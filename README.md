# UY Studio Business Card

Cloudflare Pages에 GitHub 연동으로 배포할 수 있는 정적 명함형 소개 사이트입니다.

## 배포

1. 이 폴더를 GitHub 저장소에 올립니다.
2. Cloudflare Dashboard의 **Workers & Pages**에서 **Create application** → **Pages** → **Import an existing Git repository**를 선택합니다.
3. GitHub을 연결한 뒤 이 저장소를 선택합니다.
4. 빌드 설정을 다음과 같이 지정한 뒤 저장합니다.

- Framework preset: `None`
- Build command: `exit 0`
- Build output directory: `.`

이후 `main` 브랜치에 변경 사항을 올릴 때마다 Cloudflare Pages가 자동으로 새 버전을 배포합니다.

`index.html`의 이름, 이메일 주소, 소셜 링크를 실제 정보로 바꾼 뒤 배포하면 됩니다.
# businees-card
