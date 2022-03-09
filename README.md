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
form의 autocomplete, novalidate가 괜찮다.
  - validation을 검사할수 있다는데... 어떻게 하는 것일까?

field로 한꺼번에 disabled 할수 있을것 같다.
  - 상세 화면에서 써먹을수 있을듯


input은 특히 더 쓸만한게 많네...
  - pattern이라는게 있어서 유효성을 체크하네?
  - required는 빈갑을 체크하고 pattern은 입력값을 체크한다.
  - 패턴으로도 모둔 유효성을 체크할수 없는 것 같다..



체크박스의 값은 참 오묘한것 같다...
기본이 true, false여야하는데... value값도 있네?
checked가 true, false인것 같고... 
checked와 상관없이 value값이 있는게 신기해, 희안해
  - indeterminate 속성은 무엇일까? 
date의 날짜값은 문자로 입력한다. 숫자가 아니다.. 명심하자
  - 입력값은 YYYY-MM-DD이다. 
  - pattern으로 모든것을 처리하는게 불가능하다..
  - 라이브러리를 쓰는게 더 효율적인것 같다.
  - 2월31일이 입력이 가능하네?
  - 일반적으로 쓰다가 대체하는게 좋을 것 같다.
  - 보여주는 패턴을 바꾸는 것도 없어보인다.
    - 아마도... 로케이션에 영향을 받는 거 같기도 하다.
file는 파일을 선택하는 요소이다. 
  - 서버에 올라간 파일을 보여주기 위한것은 따로 만들어서 보여주어야 한다.

input중 에서 list속성을 이용해서 값을 값을 넣어 줄수도 있는 거 같다.
  - 멀티 선택은 어떻게 할까?

range는... 움직이는 값이 보였으면 좋겠는데?

required와 pattern으로 모두 validtaion체크가 안된다면...
그냥 모두 처리하는게 나을지도 모르겠다.
  - 아니면 일반적인것은 처리하고.. 몇가지만 보조하는 식도 괜찮겠지..
  - required인것을 진짜로 만족하는지 옆에 체크박스를 두어서 시각적으로 체크하게 하는방법도 있다. 
  - required의 값을 바꿀수 있는 방법도 있다.
  - 샘플링에만 어울리려나?
  - 속성에 list가 있으면... 그값중에서 선택을 할수 있는것 같다.
    - date, 
  - 패턴에 만족하지 않는다면 css속성으로 제어가 가능하다.
    - invalid, valid로 제어가 가능하다.
    - 아래조건 외에도 valid로 넣을수는 없을까?
  - form에서 [validtaion체크방법을 확인해보자.](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
  - 사용자가 직접 입력되는 값과 서버에서 불려왔을때의 넣었을때 값도 체크해야하다.
    - 밸리데이션에 맞는지...
  - form으로 안쓰는 것은 어떻게 되는거지?
  - form 클릭으로 되면...? rest api는 form을 안쓰지 않나?

```markdown
validation체크는 아래와 같이 진행한다.

required: Specifies whether a form field needs to be filled in before the form can be submitted.
minlength and maxlength: Specifies the minimum and maximum length of textual data (strings)
min and max: Specifies the minimum and maximum values of numerical input types
type: Specifies whether the data needs to be a number, an email address, or some other specific preset type.
pattern: Specifies a regular expression that defines a pattern the entered data needs to follow.
```

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