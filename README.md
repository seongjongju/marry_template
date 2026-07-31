# 모바일 청첩장 템플릿

실제 지인분 청첩장으로 사용된 모바일 청첩장 프로젝트입니다. 개인정보 보호를 위해 미디어와 상세 내용은 더미 데이터로 대체되어 있으며, 운영 시 적용했던 우클릭 방지 및 개발자 도구 차단 로직은 코드 검수를 위해 해제된 상태입니다.

---

## 🛠 Tech Stack

| 분류 | 기술 스택 |
| :--- | :--- |
| **Core** | React, Vite |
| **Deployment** | Cloudflare Pages |
| **State / Utility** | dayjs, react-device-detect, vite-plugin-html |
| **UI / UX** | gsap, react-calendar, react-photoswipe-gallery, photoswipe |

---

## 📌 Main Features

### 1. 정보 제공 및 소통
* **인사말:** 예식 일시 및 신랑·신부 정보 전달
* **연락하기:** Tel / SMS URI Scheme 기반 전화 및 문자 바로 연결

### 2. 일정 및 D-Day
* **달력 시각화:** `react-calendar` 기반 예식일 표시
* **D-day 연산:** `dayjs`를 활용한 예식 잔여 일수 실시간 계산

### 3. 갤러리
* **사진 감상:** `photoswipe` 기반 모바일 터치 슬라이드 UX 및 라이트박스 팝업 제공

### 4. 오시는 길 (지도 & 내비게이션)
* **지도 안내:** Kakao / Naver 지도 API 연동
* **내비게이션 앱 연동:** Deep Link를 통한 TMap, 카카오내비, 네이버 지도 앱 실행 지원

### 5. 마음 전하실 곳
* **계좌번호 복사:** Clipboard API 기반 계좌번호 복사

### 6. OS 맞춤형 공유
* **iOS:** Web Share API 활용 네이티브 공유 및 URL 복사 기능 제공
* **Android:** URL 클립보드 복사 처리

---

## 💡 Production Considerations

* **트래픽 및 배포 환경 최적화:** Cloudflare Pages를 통한 배포로 예식 당일 순간적인 하객 트래픽 집중 및 대용량 이미지 요청에 대비, 대역폭(Bandwidth) 제한 없는 안정적인 인프라 구축
* **크로스 브라우징 및 UX 최적화:** OS별(iOS/Android) Web Share API 지원 여부와 딥링크 동작 방식 차이를 `react-device-detect` 기반 분기 로직으로 해결
* **콘텐츠 보안 (실운영 적용):** 사진 도용 및 개인정보 보호를 위한 우클릭 방지, 개발자 도구 진입 차단 스크립트 적용 (현재 검수용으로 해제 상태)