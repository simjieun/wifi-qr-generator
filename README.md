# Wi-Fi QR 코드 생성기

Wi-Fi QR 코드 생성기는 매장이나 사무실에서 손님들이 Wi-Fi에 쉽게 접속할 수 있도록 도와주는 QR 코드 카드를 생성하는 Next.js 애플리케이션입니다.

## 시작하기

개발 서버를 실행합니다:

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)를 열어 결과를 확인하세요.

`src/app/page.tsx`를 수정하여 메인 페이지를 편집할 수 있습니다. 파일을 수정하면 페이지가 자동으로 업데이트됩니다.

## 주요 기능

- Wi-Fi 네트워크 정보(SSID, 비밀번호, 보안 유형)를 입력하여 QR 코드 생성
- 생성된 QR 코드가 포함된 카드 디자인
- 이미지 다운로드 기능

## 기술 스택

이 프로젝트는 다음과 같은 기술 스택을 사용합니다:

- [Next.js 15](https://nextjs.org/) - React 프레임워크
- [React 19](https://react.dev/) - UI 라이브러리
- [Tailwind CSS 4](https://tailwindcss.com/) - 스타일링
- [qrcode](https://www.npmjs.com/package/qrcode) - QR 코드 생성
- [html-to-image](https://www.npmjs.com/package/html-to-image) - HTML 요소를 이미지로 변환

## 배포

Next.js 앱을 배포하는 가장 쉬운 방법은 Next.js의 제작자가 만든 [Vercel 플랫폼](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.
