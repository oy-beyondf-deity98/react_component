
SI용 컴포넌트부터 챙긴다...

"flex"가 정말 많이 쓰이네...
"justifyContent"는 두번째로 쓰인다.
  - 주로 space-between을 많이 쓴다.
"alignItems":는 상하의 중앙 정렬을 할때 쓰인다.
  - 주로 center를 쓴다.
  - 적용이 되려면 height:100%나 높이가 확보되어야 할수 있다.

"flex-grow, flex-shrink, flex-basis"는 flex가 적용되는 자식항목에 사용이 된다.

flex가 적용된것의 정렬을 위한 방법이 여러개 있다.
  - [참조](https://velog.io/@jary/flex%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B0%80%EC%9A%B4%EB%8D%B0-%EC%A0%95%EB%A0%AC)
  - 내가 주로 쓰는 것은 alignItems:center이다.

항목을 4개씩 끝어서 하는 방법은 무엇이 있는가?
1. 우선은 "flexWrap:wrap"로 지정한다.
2. 4개씩 끝는 방법은 무엇이 있을까? 고정 크기를 주어야 할까?


필드에서는... html5의 element요소를 확인해볼수 있을 것이다.
  - https://developer.mozilla.org/ko/docs/Web/HTML/Element

---
## 설정 
1. "create-react-app 앱명"으로 생성
2. 기본 설치 앱 제거
   - App.css, App.js, App.test.js, index.css, logo.svg 
   - public : logo192.png, logo512.png 제거, favicon.ico 다른 것으로 바꾸기...
3apps 폴더를 기본 폴더로 설정
4components에 컴포넌트 생성 예정
5"yarn add react-router-dom"으로 라우트 설정
   - src/index.js에 BrowserRouter로 묶기
   - apps/index.js를 기본 앱으로 설정
   
```js
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Apps from "./apps";
import {BrowserRouter} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Apps />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

```

---

"yarn add react-router-dom"으로 추가되는 디펜던시 체크

info Direct dependencies
└─ react-router-dom@6.2.2
info All dependencies
├─ react-router-dom@6.2.2
└─ react-router@6.2.2
✨  Done in 6.45s.