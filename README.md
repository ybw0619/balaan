# 발란 FE 주니어 사전 과제

- Node 16
- Vue 3 / script setup
- Vite
- Yarn
- VS Code + Volar
- vue-router && vuex 사용안했습니다.

# 구조

```sh
├── .src
│ ├── components
│ │ ├── CustomInput.vue # 반복되는 인풋과 유효성검사  경고문구까지 합쳐서 컴포넌트화
│ │ ├── Step1.vue # 개인 정보 입력
│ │ ├── Step2.vue # 배송지 정보 입력
│ │ ├── Step3.vue # 결제 정보 입력
│ │ └── Step4.vue # 회원가입 완료
│ ├─── utils
│ │ ├── index.js
│ │ ├── postcode.v2.js # index.html에 cdn추가 하기 싫어서 파일로 가져옴
│ │ ├── regex.js # 제약조건 체크할때마다 긴 정규식이 필요해서 따로 상수로 뺌
│ │ └── validate.js # 유효성 검사하는 코드 공통으로 들어가서 따로 뺌
│ ├── App.vue # App.vue
│ ├── main.js # main.js
│ └── style.css # 공통 css 따로 뺌
├── .gitignore
├── .prettierrc
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── yarn.lock
```
