# relaket-board

## 프로젝트 소개

relaket-board는 Next.js(App Router), React, TypeScript, MySQL, Redis, Vanilla Extract를 기반으로 한 실전형 게시판 프로젝트입니다.
회원 인증, 게시글 CRUD, 파일 업로드/다운로드, 좋아요, 댓글, 조회수, 페이지네이션, 동적 도움말 페이지 등 실서비스 수준의 기능을 제공합니다.

## 기술 스택

- **Next.js** (App Router, Server/Client Components)
- **React**
- **TypeScript**
- **MySQL** (knex)
- **Redis** (ioredis, 세션/인증)
- **Vanilla Extract** (CSS-in-TS)
- **react-icons**
- **marked** (Markdown to HTML)

## 주요 기능

- **회원 인증**
  - 커스텀 세션/쿠키/Redis 기반 로그인/로그아웃/회원가입
  - 미들웨어에서 회원 전용 URL 보호
- **게시판**
  - 게시글 목록/상세/작성/수정/삭제
  - 첨부파일 업로드(암호화 파일명), 다운로드(원본명)
  - 페이지네이션, 검색(제목/내용/전체), 정렬(최신/인기/조회수/댓글)
  - 조회수, 좋아요(회원만, 토글), 댓글수 표시
  - 본인만 수정/삭제 가능
- **좋아요**
  - relaket_post_like 테이블로 회원별 좋아요 관리
  - 좋아요/취소 토글, 비회원 클릭 시 로그인 유도
- **댓글** (UI/DB 구조만, 기능 확장 가능)
- **파일 업로드/다운로드**
  - public/uploads 저장, DB에 원본/저장명 기록
- **도움말**
  - `README.md` 파일을 동적으로 읽어 HTML로 변환하여 표시
- **미들웨어**
  - 회원 전용/비회원 접근 제어, 세션 쿠키 검증
- **API Route**
  - 파일 다운로드, 좋아요 여부 확인 등

## 폴더 구조

```
src/
  app/
    board/
      list/         # 게시글 리스트, 검색, 정렬, 페이지네이션
      detail/       # 게시글 상세, 좋아요, 삭제
      write/        # 글쓰기/수정 폼, 액션
    member/         # 회원가입, 로그인, 로그아웃, 인증
    guide/          # 도움말 페이지
    api/
      file/         # 파일 다운로드 API
      post/         # 좋아요 여부 API
  components/       # 공통 컴포넌트(헤더, 푸터, 에디터 등)
  lib/
    knex.ts        # MySQL 연결
    redis.ts       # Redis 세션/인증
    auth.ts        # 인증 유틸
  styles/          # Vanilla Extract CSS
```

## DB 테이블 예시

- **relaket_post**: 게시글 (id, user_id, title, content, like_count, view_count, comment_count, created_at, updated_at)
- **relaket_file**: 첨부파일 (id, post_id, file_name, file_path, file_size)
- **relaket_user**: 회원 (id, user_id, user_name, password ...)
- **relaket_post_like**: 좋아요 (id, post_id, user_id, created_at)

## 환경 변수 예시

```
KNEX_DATABASE_HOST=localhost
KNEX_DATABASE_USER=youruser
KNEX_DATABASE_PASSWORD=yourpass
KNEX_DATABASE_NAME=relaket
KNEX_DATABASE_PORT=3306

REDIS_URL=redis://localhost:6379
SESSION_ID_COOKIE_NAME=sessionId
SESSION_PLAIN_COOKIE_NAME=psid
SESSION_SECRET=your-secret
SESSION_TTL=86400
```

## 실행 방법

1. 저장소 복제
   ```bash
   git clone https://github.com/dam1007/relaket-board.git
   cd relaket-board
   ```

2. 의존성 설치
   ```bash
   pnpm install
   ```

3. 환경 변수(.env) 설정

4. DB 테이블 생성 (MySQL)
   ```sql
   -- relaket_post, relaket_file, relaket_user, relaket_post_like 등
   ```

5. 개발 서버 실행
   ```bash
   pnpm dev
   ```

## 기타

- MCP(Model Context Protocol) 미사용
- 최신 Next.js App Router 패턴, 서버/클라이언트 컴포넌트 분리, 서버 액션 등 적용
- 실전 서비스에 준하는 구조와 보안 패턴 반영
