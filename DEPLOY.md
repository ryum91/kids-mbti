# GitHub Pages 배포 가이드

## 🚀 자동 배포 설정

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

### 설정 단계

1. **GitHub 리포지토리 설정**
   - GitHub에 리포지토리를 생성하거나 기존 리포지토리를 사용
   - Settings > Pages로 이동
   - Source를 "GitHub Actions"로 설정

2. **코드 푸시**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **자동 배포 확인**
   - `main` 브랜치에 푸시하면 자동으로 빌드 및 배포
   - Actions 탭에서 배포 진행 상황 확인
   - 완료 후 `https://[username].github.io/kids-mbti/`에서 확인

### 수동 배포

로컬에서 직접 배포하려면:

```bash
# 빌드 후 배포
pnpm run deploy
```

## 📝 배포 URL 구조

- **프로덕션**: `https://[username].github.io/kids-mbti/`
- **Vite base URL**: `/kids-mbti/`

## 🔧 설정 파일

### vite.config.ts

```typescript
export default defineConfig({
  base: '/kids-mbti/' // GitHub Pages 경로
  // ... 기타 설정
});
```

### package.json

```json
{
  "homepage": "https://[username].github.io/kids-mbti",
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

## ⚡ 주요 특징

- **React Router 지원**: SPA 라우팅이 GitHub Pages에서 정상 작동
- **404 처리**: 404.html로 리다이렉트 처리
- **자동 빌드**: TypeScript 컴파일 + Vite 빌드
- **캐시 최적화**: pnpm 캐시로 빌드 속도 향상

## 🔄 최신 업데이트 (2025.07.08)

### GitHub Actions 최신화

- `actions/upload-pages-artifact@v3` 사용 (v2 deprecated 해결)
- `actions/deploy-pages@v4` 사용 (최신 안정 버전)
- `pnpm/action-setup@v4` 사용 (pnpm v9 지원)
- `actions/cache@v4` 사용 (성능 향상)

### pnpm 캐시 오류 해결

- Node.js setup에서 npm 캐시 대신 pnpm 캐시 사용하도록 수정
- `cache: 'pnpm'` 설정으로 pnpm-lock.yaml 파일 인식
- pnpm/action-setup을 먼저 설치한 후 Node.js setup 실행

### 개선사항

- 더 빠른 빌드 속도
- 안정적인 캐싱 시스템
- 최신 보안 정책 적용

## 🔄 최신 업데이트 (2025.07.08 - 추가)

### pnpm 버전 일치 문제 해결

- GitHub Actions에서 pnpm 버전을 자동으로 package.json의 packageManager 필드에서 읽도록 수정
- "Multiple versions of pnpm specified" 오류 해결
- package.json의 predeploy 스크립트를 npm에서 pnpm으로 변경

### 변경사항

- GitHub Actions: `pnpm/action-setup@v4` (버전 자동 감지)
- package.json: packageManager 필드 활용
- 일관된 패키지 매니저 사용

## 🔍 트러블슈팅

### 1. 빈 페이지가 표시되는 경우

- `vite.config.ts`의 `base` 설정 확인
- 리포지토리 이름과 일치하는지 확인

### 2. 라우팅이 작동하지 않는 경우

- `public/404.html` 파일 존재 확인
- `index.html`의 스크립트 확인

### 3. 빌드 실패

- 타입 에러 확인: `pnpm run build`
- 의존성 설치: `pnpm install`

## 📊 배포 상태 확인

GitHub Actions에서 배포 상태를 확인할 수 있습니다:

- ✅ 성공: 사이트가 정상 배포됨
- ❌ 실패: 로그를 확인하여 문제 해결 필요
- 🟡 진행중: 빌드 또는 배포 중

## 🛡️ 보안 설정

GitHub Actions는 다음 권한을 사용합니다:

- `pages: write` - Pages 배포 권한
- `id-token: write` - OIDC 토큰 생성 권한

이 권한들은 배포에만 사용되며 안전합니다.
