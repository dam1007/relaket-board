import Redis from "ioredis";
import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

// 환경 변수 REDIS_URL이 설정되지 않은 경우 경고 메시지를 표시합니다.
if (!process.env.REDIS_URL) {
  console.warn("REDIS_URL 환경 변수가 설정되지 않았습니다.");
}

// 환경 변수에서 REDIS_URL을 가져옵니다.
const redisUrl = process.env.REDIS_URL || '';

// 전역 네임스페이스에 redis 변수를 선언합니다.
declare global {
  var redis: Redis | undefined;
}

// 전역 redis 변수를 사용하여 Redis 인스턴스를 중복 생성을 방지합니다.
if (!global.redis) {
  if (redisUrl) {
    global.redis = new Redis(redisUrl);
  } else {
    console.warn("Redis 연결을 초기화하지 않았습니다.");
    global.redis = undefined;
  }
}

// Redis 연결 오류를 처리합니다.
if (global.redis) {
  global.redis.on("error", (err: any) => {
    console.error("Redis 연결 오류:", err);
  });
}

// redis 클라이언트를 내보냅니다.
export default global.redis;

const SESSION_ID_COOKIE_NAME = process.env.SESSION_ID_COOKIE_NAME || 'sessionId';
const SESSION_TTL: number = process.env.SESSION_TTL ? Number(process.env.SESSION_TTL) : 600;

// 세션 ID를 가져오는 함수
async function getSessionId(): Promise<string> {
  const cookieStore = await cookies();
  let sessionId = cookieStore.get(SESSION_ID_COOKIE_NAME)?.value;

  return sessionId ? sessionId : '';
}

// 데이터를 Redis에 설정하는 함수
async function setSession(key: string, value: any): Promise<boolean> {
  const sessionId = await getSessionId();
  if (global.redis) {
    try {
      // hmset을 사용하여 해시를 설정하고, expire를 사용하여 만료 시간을 설정합니다.
      await global.redis.hmset(`session:${sessionId}`, key, JSON.stringify(value));
      await global.redis.expire(`session:${sessionId}`, SESSION_TTL);
      return true;
    } catch (error) {
      console.error("Redis에 데이터를 설정하는 중 오류 발생:", error);
      return false;
    }
  } else {
    console.warn("Redis 연결이 초기화되지 않아 데이터를 설정할 수 없습니다.");
    return false
  }
}

// Redis에서 데이터를 가져오는 함수
async function getSession(key: string): Promise<any> {
  const sessionId = await getSessionId();
  if (global.redis) {
    try {
      const data = await global.redis.hget(`session:${sessionId}`, key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Redis에서 데이터를 가져오는 중 오류 발생:", error);
      return null;
    }
  } else {
    console.warn("Redis 연결이 초기화되지 않아 데이터를 가져올 수 없습니다.");
    return null;
  }
}

// Redis에서 모든 데이터를 가져오는 함수
async function getSessionAll(): Promise<any> {
  const sessionId = await getSessionId();
  if (global.redis) {
    try {
      const data = await global.redis.hgetall(`session:${sessionId}`);
      const parsedData: { [key: string]: any } = {};
      for (const key in data) {
        parsedData[key] = JSON.parse(data[key]);
      }
      return parsedData;
    } catch (error) {
      console.error("Redis에서 모든 데이터를 가져오는 중 오류 발생:", error);
      return null;
    }
  } else {
    console.warn("Redis 연결이 초기화되지 않아 데이터를 가져올 수 없습니다.");
    return null;
  }
}

// 세션의 특정 키를 기반으로 키에 등록된 데이터를 삭제하는 함수
async function unsetSession(key: string): Promise<boolean> {
  const sessionId = await getSessionId();
  if (global.redis) {
    try {
      await global.redis.hdel(`session:${sessionId}`, key);
      return true;
    } catch (error) {
      console.error("Redis에서 데이터를 삭제하는 중 오류 발생:", error);
      return false;
    }
  } else {
    console.warn("Redis 연결이 초기화되지 않아 데이터를 삭제할 수 없습니다.");
    return false;
  }
}

// 세션의 모든 데이터를 삭제하는 함수
async function unsetSessionAll(): Promise<boolean> {
  const sessionId = await getSessionId();
  if (global.redis) {
    try {
      await global.redis.del(`session:${sessionId}`);
      return true;
    } catch (error) {
      console.error("Redis에서 모든 데이터를 삭제하는 중 오류 발생:", error);
      return false;
    }
  } else {
    console.warn("Redis 연결이 초기화되지 않아 데이터를 삭제할 수 없습니다.");
    return false;
  }
}

// 특정 키를 기반으로 값을 설정하는 함수 (300초 기본 시간, ttl 파라미터로 시간 설정 가능)
async function setFlashData(key: string, value: any, ttl: number = 300): Promise<boolean> {
  const sessionId = await getSessionId();
  if (global.redis) {
    try {
      await global.redis.set(`flash:${sessionId}:${key}`, JSON.stringify(value), 'EX', ttl);
      return true;
    } catch (error) {
      console.error("Redis에 Flash 데이터를 설정하는 중 오류 발생:", error);
      return false;
    }
  } else {
    console.warn("Redis 연결이 초기화되지 않아 Flash 데이터를 설정할 수 없습니다.");
    return false;
  }
}

// 특정 키를 기반으로 데이터를 가져오거나 ttl에 지정된 시간이 지나면 데이터가 삭제되는 함수
async function getFlashData(key: string): Promise<any> {
  const sessionId = await getSessionId();
  if (global.redis) {
    try {
      const data = await global.redis.get(`flash:${sessionId}:${key}`);
      if (data) {
        await global.redis.del(`flash:${sessionId}:${key}`); // 데이터를 가져온 후 삭제
        return JSON.parse(data);
      } else {
        return null; // 데이터가 없으면 null 반환
      }
    } catch (error) {
      console.error("Redis에서 Flash 데이터를 가져오는 중 오류 발생:", error);
      return null;
    }
  } else {
    console.warn("Redis 연결이 초기화되지 않아 Flash 데이터를 가져올 수 없습니다.");
    return null;
  }
}

// 미들웨어 전용: 세션 ID를 직접 지정하여 세션 데이터 저장
async function setSessionWithId(sessionId: string, key: string, value: any): Promise<boolean> {
  if (global.redis) {
    try {
      await global.redis.hmset(`session:${sessionId}`, key, JSON.stringify(value));
      await global.redis.expire(`session:${sessionId}`, SESSION_TTL);
      return true;
    } catch (error) {
      console.error('Redis에 세션 데이터 저장 중 오류:', error);
      return false;
    }
  } else {
    console.warn('Redis 연결이 초기화되지 않아 세션 데이터를 저장할 수 없습니다.');
    return false;
  }
}

// 미들웨어 전용: 세션 ID를 직접 지정하여 세션 데이터 조회
async function getSessionWithId(sessionId: string, key: string): Promise<any> {
  if (global.redis) {
    try {
      const data = await global.redis.hget(`session:${sessionId}`, key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Redis에서 세션 데이터 조회 중 오류:', error);
      return null;
    }
  } else {
    console.warn('Redis 연결이 초기화되지 않아 세션 데이터를 조회할 수 없습니다.');
    return null;
  }
}

export { getSessionId, setSession, getSession, getSessionAll, unsetSession, unsetSessionAll, setFlashData, getFlashData, setSessionWithId, getSessionWithId };
