# 모바일 청첩장 템플릿

실제 지인분 청첩장으로 사용된 모바일 청첩장 프로젝트입니다. 개인정보 보호를 위해 미디어와 상세 내용은 더미 데이터로 대체되어 있으며, 운영 시 적용했던 우클릭 방지 및 개발자 도구 차단 로직은 코드 검수를 위해 해제된 상태입니다.

* 서비스 URL: https://marry-template.pages.dev/
* GitHub 저장소: https://github.com/seongjongju/marry_template

---

## 1. 프로젝트 소개
* **프로젝트 이름**: 모바일 청첩장 템플릿
* **개발 형태**: 디자이너 협업 1인 개발
* **서비스 한 줄 요약**: 실제 지인의 모바일 청첩장 제작 및 배포 경험을 바탕으로, 모바일 환경에 최적화된 UX와 지도/내비게이션 딥링크 기능을 제공하는 React 기반 웹 템플릿입니다.

---

## 2. 기술 스택 (Tech Stack)

### Core & Infrastructure
* **Core**: React, Vite
* **Deployment**: Cloudflare Pages

### State & Utility
* **Utility**: dayjs, react-device-detect, vite-plugin-html

### UI / UX
* **Animation & Gallery**: gsap, react-photoswipe-gallery, photoswipe
* **Calendar**: react-calendar

---

## 3. 핵심 기능 (Main Features)

### 정보 제공 및 소통
* **인사말**: 예식 일시 및 신랑·신부 정보 전달
* **연락하기**: Tel 및 SMS URI Scheme 기반의 전화, 문자 즉시 연결 지원

### 일정 및 D-Day
* **달력 시각화**: `react-calendar` 기반 예식일 표시
* **D-day 연산**: `dayjs`를 활용한 예식 잔여 일수 실시간 계산

### 갤러리
* **사진 감상**: `photoswipe` 기반 모바일 터치 슬라이드 UX 및 라이트박스 팝업 제공

### 오시는 길 (지도 & 내비게이션)
* **지도 안내**: Kakao / Naver 지도 API 연동
* **내비게이션 앱 연동**: Deep Link를 통한 TMap, 카카오내비, 네이버 지도 앱 실행 지원

### 마음 전하실 곳
* **계좌번호 복사**: Clipboard API 기반 계좌번호 원터치 복사

### OS 맞춤형 공유
* **iOS**: Web Share API 활용 네이티브 공유 및 URL 복사 기능 제공
* **Android**: URL 클립보드 복사 처리

---

## 4. 운영 및 배포 고려 사항 (Production Considerations)

* **트래픽 및 배포 환경 최적화**: Cloudflare Pages 배포를 통해 예식 당일 하객 트래픽 집중 및 대용량 이미지 요청에 대비하여, 대역폭(Bandwidth) 제한 없는 인프라를 구축했습니다.
* **크로스 브라우징 및 UX 최적화**: OS별(iOS/Android) Web Share API 지원 여부 및 딥링크 동작 방식 차이를 `react-device-detect` 기반 분기 로직으로 처리했습니다.
* **콘텐츠 보안 (실운영 적용)**: 사진 도용 및 개인정보 보호를 위한 우클릭 방지, 개발자 도구 진입 차단 스크립트를 적용했습니다. (현재 검수용 저장소에는 해제 처리됨)

---

## 5. 개발 과정에서 해결한 문제 (트러블슈팅)

### 딥링크 연결 시 한글 장소명 인코딩 누락으로 인한 내비게이션 목적지 인식 오류
* **문제 상황**: 모바일 청첩장에서 카카오내비, 네이버 지도 등의 내비게이션 앱으로 연동되는 딥링크 버튼 클릭 시, 위치가 정상적으로 안찍히거나, 아무 동작을 안하는 문제가 발생했습니다.
* **원인**: 딥링크 URL 파라미터로 전달되는 장소명(예: '더 뉴 컨벤션')의 한글 문자열이 UTF-8로 인코딩되지 않은 채 규격에 맞지 않게 전달되어, 외부 내비게이션 앱에서 주소를 올바르게 파싱하지 못했기 때문이었습니다.
* **해결 방법**: 내비게이션 딥링크 scheme URL을 생성할 때 장소명 파라미터에 `encodeURIComponent('더 뉴 컨벤션')`를 적용하여 안전한 문자열 포맷으로 변환 후 전달하도록 수정했습니다. 이를 통해 OS 및 내비게이션 앱 종류와 상관없이 정확한 목적지 좌표와 장소명이 연동되도록 개선했습니다.

### Vercel/Netlify 무료 티어 대역폭 소모 문제로 인한 Cloudflare Pages 전환
* **문제 상황**: 초기에는 Vercel, Netlify 무료 티어로 배포를 진행했으나, 디자이너에게 수정된 결과물을 수시로 공유하고 지인에게 확인을 받는 과정, 그리고 배포 후 정상 동작 여부를 반복적으로 테스트하는 과정에서 대역폭이 예상보다 빠르게 소진되는 문제가 있었습니다.
* **해결 방법**: 대역폭 제한이 사실상 없는(bandwidth-unlimited) Cloudflare Pages로 배포 플랫폼을 전환했습니다. 이를 통해 반복적인 확인·테스트 과정에서도 대역폭 걱정 없이 안정적으로 작업할 수 있도록 개선했습니다.

---

## 6. 로컬 실행 방법

### 1) 저장소 클론 및 패키지 설치
```bash
git clone https://github.com/seongjongju/marry_template.git
cd marry_template
npm install

개발 서버 실행
npm run dev
```
