layouts 이름을 바꾸자.. t밑 으로 오게... 
  - 예제군 : views, 

[a 태그에 대한 고찰](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md)

index.js는 거의 쓰지 말자.
  - 사용 목적지
    1. 통합 적인 것 (필요 할까?)
    2. 인덱스 용도로 여러 개를 선택 할수 있도록 하는 곳
  - 사용 사례
    1. 초기 페이지의 index
    2. 메뉴 페이지의 통합 페이지 용도(꼭 필요 할까? 다시 의문이 든다.)

route dom Link 왜 필요한 가? 그냥 a tag 되는데...
  - 외부 것인지 내부 것인지 구분을 위해서??

stylesheet -> css 파일에 두지 말고.. 각자 페이지로 컴포넌트로 만들면 어떨까? 괜찮을 것 같은데..

파일명
  1. 컴포넌트는 시작을 대문자로 시작 한다.
  2. 순수 js는 시작을 소문자로 시작 한다.
  3. 예외로 index.js는 소문자로 시작 한다.

---

SI용 컴포넌트 챙기자.

"flex"가 정말 많이 쓰이네...
"justifyContent"는 두번 째로 쓰인다.
  - 주로 space-between 많이 쓴다.
"alignItems":는 상하의 중앙 정렬을 할때 쓰인다.
  - 주로 center 쓴다.
  - 적용이 되려면 height:100%나 높이가 확보 되어야 할수 있다.

"flex-grow, flex-shrink, flex-basis"는 flex 적용 되는 자식 항목에 사용이 된다.

flex 적용된 것의 정렬을 위한 방법이 여러개 있다.
  - [참조](https://velog.io/@jary/flex%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B0%80%EC%9A%B4%EB%8D%B0-%EC%A0%95%EB%A0%AC)
  - 내가 주로 쓰는 것은 alignItems:center 이다.

항목을 4개씩 끝어서 하는 방법은 무엇이 있는가?
1. 우선은 "flexWrap:wrap"로 지정 한다.
2. 4개씩 끝는 방법은 무엇이 있을까? 고정 크기를 주어야 할까?


fields 에서 html5의 element 요소를 확인해 볼수 있을 것이다.
  - https://developer.mozilla.org/ko/docs/Web/HTML/Element

---
## 설정 
1. "create-react-app 앱명"으로 생성
2. 기본 설치 앱 제거
   - App.css, App.js, App.test.js, index.css, logo.svg 
   - public : logo192.png, logo512.png 제거, favicon.ico 다른 것으로 바꾸기...
3. apps 폴더를 기본 폴더로 설정
4. components 안에 컴포넌트 생성 예정
5. "yarn add react-router-dom"으로 라우트 설정
   - src/index.js에 BrowserRouter 묶기
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

"yarn add react-router-dom"으로 추가 되는 dependency 체크

info Direct dependencies
└─ react-router-dom@6.2.2
info All dependencies
├─ react-router-dom@6.2.2
└─ react-router@6.2.2
✨  Done in 6.45s.