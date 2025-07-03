# Gemini 가이드

이 문서는 Gemini가 이 프로젝트와 상호 작용하는 방법을 안내합니다.

## 프로젝트 개요

이 프로젝트는 Next.js 기반의 게시판 애플리케이션입니다.

## 주요 기술

- Next.js
- React
- TypeScript
- vanilla-extract (CSS-in-JS)
- Knex.js (SQL 쿼리 빌더)
- MySQL
- Redis

## 사용 가능한 스크립트

`package.json`에 정의된 주요 스크립트는 다음과 같습니다.

- `npm run dev`: 개발 모드로 애플리케이션을 실행합니다.
- `npm run build`: 프로덕션용으로 애플리케이션을 빌드합니다.
- `npm run start`: 빌드된 애플리케이션을 프로덕션 모드로 시작합니다.
- `npm run lint`: `next lint`를 사용하여 코드의 린트 오류를 확인하고 수정합니다.

## 테스트 실행 방법

이 프로젝트에는 아직 명시적인 테스트 스크립트가 없습니다.

## 코드 스타일 및 규칙

- **언어**: TypeScript를 주로 사용합니다.
- **스타일링**: `@vanilla-extract/css`를 사용하여 타입스크립트 파일 내에서 스타일을 정의합니다.
- **린팅**: `next lint` (ESLint)를 사용하여 코드 스타일을 일관되게 유지합니다. 변경 사항을 커밋하기 전에 항상 `npm run lint`를 실행하여 오류가 없는지 확인해주세요.
- **커밋 메시지**: 의미 있는 커밋 메시지를 작성해주세요. (예: `feat: 사용자 인증 기능 추가`, `fix: 게시글 목록 조회 오류 수정`)
