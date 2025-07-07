# 우리 아이 성향 찾기 - Kids MBTI Test 🌟

미취학 자녀의 성향을 MBTI 방식으로 파악할 수 있는 재미있는 테스트 앱입니다.

## 🎯 주요 기능

- **12개의 재미있는 질문**: 아이들이 이해하기 쉬운 상황별 질문
- **MBTI 성향 분석**: E/I, S/N, T/F, J/P 4가지 축 분석
- **성향별 특징 설명**: 아이의 특징을 알기 쉽게 설명
- **친구 궁합 정보**: 어떤 성향의 친구와 잘 맞는지 안내
- **부모 친화적 UI**: 직관적이고 사용하기 쉬운 인터페이스

## 🚀 기술 스택

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📱 사용 방법

1. 테스트 시작 버튼을 클릭
2. 12개의 질문에 차례대로 답변
3. 아이의 MBTI 결과와 특징 확인
4. 잘 맞는 친구 유형 확인

## 🛠️ 개발 환경 설정

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build

# 미리보기
pnpm preview
```

## 🚀 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

### 자동 배포

- `main` 브랜치에 푸시하면 자동으로 배포됩니다.

### 수동 배포

```bash
# 로컬에서 수동 배포
pnpm run deploy
```

## 📋 프로젝트 구조

```
src/
├── components/       # 재사용 가능한 컴포넌트
├── contexts/        # React Context (상태 관리)
├── data/           # 질문 데이터 및 궁합 정보
├── pages/          # 페이지 컴포넌트
├── types/          # TypeScript 타입 정의
├── utils/          # 유틸리티 함수
└── App.tsx         # 메인 앱 컴포넌트
```

## 🎨 페이지 구성

- `/` - 홈페이지 (테스트 시작)
- `/quiz` - 질문 응답 페이지
- `/result` - 결과 페이지

## 💡 특징

- **반응형 디자인**: 모바일과 데스크톱 모두 지원
- **애니메이션**: 부드러운 전환 효과와 인터랙션
- **접근성**: 사용자 친화적인 UI/UX
- **성능 최적화**: Vite를 통한 빠른 빌드와 핫 리로드

## 📄 라이센스

MIT License
