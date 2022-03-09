# html요소
요즘 html이 참 많이 발전했다는 것을 느낀다. 
양식 요소는 정말 다른것을 안써도 될정도로 되어있다.
한번 구현해 보자.


## 콘텐츠 구획

|Element	|Description|
|---        |---        |
|address	|가까운 HTML 요소의 사람, 단체, 조직 등에 대한 연락처 정보를 나타냅니다.|
|article	|문서, 페이지, 애플리케이션, 또는 사이트 안에서 독립적으로 구분해 배포하거나 재사용할 수 있는 구획을 나타냅니다.|
|aside      |문서의 주요 내용과 간접적으로만 연관된 부분을 나타냅니다. 주로 사이드바 혹은 콜아웃 박스로 표현합니다.|
|footer     |가장 가까운 구획 콘텐츠나 구획 루트의 푸터를 나타냅니다. 푸터는 일반적으로 구획의 작성자, 저작권 정보, 관련 문서 등의 내용을 담습니다.|
|header     |소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다. 제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함할 수 있습니다.|
|h1~h6      |6단계의 구획 제목을 나타냅니다. 구획 단계는 h1이 가장 높고 h6은 가장 낮습니다.|
|main       |문서 body의 주요 콘텐츠를 나타냅니다. 주요 콘텐츠 영역은 문서의 핵심 주제나 앱의 핵심 기능에 직접적으로 연결됐거나 확장하는 콘텐츠로 이루어집니다.|
|nav        |요소는 문서의 부분 중 현재 페이지 내, 또는 다른 페이지로의 링크를 보여주는 구획을 나타냅니다. 자주 쓰이는 예제는 메뉴, 목차, 색인입니다.|
|section    |요소는 HTML 문서의 독립적인 구획을 나타내며, 더 적합한 의미를 가진 요소가 없을 때 사용합니다.|

## 양식
HTML은 여러가지 입력 가능한 요소를 제공합니다. 이런 요소를 서로 조합하면 사용자가 내용을 채우고, 웹사이트나 어플리케이션에 제출할 수 있습니다. HTML 폼 안내서에 더욱 다양한 내용이 있습니다.

|Element	|Description|
|---        |---        |
|`<button>	`|`제출용(submit)과 이벤트용으로 사용한다.`|
|`<datalist>`|`input과  select를 합쳤습니다. select에 대한 검색이 가능해집니다.`|
|`<fieldset>`|`	HTML <fieldset> 요소는 웹 양식의 여러 컨트롤과 레이블(label)을 묶을 때 사용합니다.`|
|`<form>	`|`화면이나 server를 호출합니다. method를 통해서 post와 get타입으로 호출이 가능합니다. autocomplete, autocapitalize , novalidate는 유용해 보입니다. `|
|`<input>	`|`    HTML <input> 요소는 웹 기반 양식에서 사용자의 데이터를 받을 수 있는 대화형 컨트롤을 생성합니다.`|
|`<label> 	`|`HTML <label> 요소는 사용자 인터페이스 항목의 설명을 나타냅니다.`|
|`<legend>	`|`HTML <legend> 요소는 부모 fieldset 콘텐츠의 설명을 나타냅니다.`|
|`<meter>	`|`    HTML <meter> 요소는 특정 범위 내에서의 스칼라 값, 또는 백분율 값을 나타냅니다.`|
|`<optgroup>`|`	HTML <optgroup> 요소는 select 요소의 옵션을 묶을 수 있습니다.`|
|`<option>	`|`HTML <option> 요소는 select, optgroup, datalist 요소의 항목을 정의합니다.`|
|`<output>	`|`HTML <output> 요소는 웹 사이트나 앱에서 계산이나 사용자 행동의 결과를 삽입할 수 있는 컨테이너 요소입니다.`|
|`<progress>`|`	HTML <progress> 요소는 어느 작업의 완료 정도를 나타내며, 주로 진행 표시줄의 형태를 띕니다.`|
|`<select>	`|`HTML <select> 요소는 옵션 메뉴를 제공하는 컨트롤을 나타냅니다.`|
|`<textarea>`|`	HTML <textarea> 요소는 멀티라인 일반 텍스트 편집 컨트롤을 나타냅니다.`|

## 대화형 요소
HTML은 상호작용 가능한 사용자 인터페이스 객체를 만들 때 사용할 수 있는 요소를 지원합니다.

|Element	|Description|
|---        |---        |
|`<details>`|`HTML <details> 요소는 "열림" 상태일 때만 내부 정보를 보여주는 정보 공개 위젯을 생성합니다.`|
|`<dialog>` |`HTML <dialog> 요소는 닫을 수 있는 경고, 검사기, 창 등 대화 상자 및 기타 다른 상호작용 가능한 컴포넌트를 나타냅니다.`|
|`<summary>`|`HTML 공개 요약 요소 (<요약>) 요소는 ("상세") 요소의 공개 상자에 대한 요약, 캡션 또는 범례를 지정한다.`| 


```markdown
<button> 요소는 <input> 요소보다 스타일을 적용하기 훨씬 수월합니다. <input>은 value 특성에 텍스트 값밖에 지정할 수 없지만, <button>은 내부 HTML 콘텐츠(<em>, <strong>, 심지어 <img>도)에 더해 ::after와 ::before 의사 요소를 사용하는 복잡한 렌더링도 가능합니다.양식 제출용 버튼이 아니라면 type 특성을 button으로 지정하는걸 잊지 마세요. 
기본값에서는 버튼을 눌렀을 때 양식 데이터를 제출하고, (존재하지 않는) 응답을 불러오려고 시도하는 과정에서 문서의 현재 상태가 사라질 수 있습니다.

<fieldset>에 스타일을 적용하기 전에 고려해야 하는 부분이 있습니다.
<fieldset>의 display 속성의 값은 기본적으로 block이며, 새로운 블록 서식 맥락을 형성합니다. 인라인형 display 값을 지정하면 inline-block, 그렇지 않으면 block처럼 행동합니다. <fieldset>은 기본 스타일로 콘텐츠를 감싸는 2px 너비의 groove 테두리, 작은 양의 내부 여백, 그리고 min-inline-size: min-content (en-US)를 갖습니다.
<legend> 요소는 <fieldset>의 블록 시작 방향(대개 위쪽) 테두리 위를 가로지르는 위치에 놓입니다. <legend> 또한 자신의 블록 서식 맥락을 만들며, 너비는 자신의 콘텐츠에 맞춰져 늘어나거나 줄어듭니다. display는 항상 블록형이 됩니다. 즉, display: inline도 block처럼 동작합니다.
<fieldset>의 콘텐츠는 별도의 익명 상자가 담게 됩니다. 익명 상자는 <fieldset>으로부터 특정 속성을 상속합니다. <fielset>에 display: grid 또는 display: inline-grid를 지정하면 익명 상자는 그리드 서식 맥락을 가지며, display: flex 또는 display: inline-flex를 지정하면 익명 상자가 플렉스 서식 맥락을 갖습니다. 그 외의 경우 블록 서식 맥락입니다.
form에 있는 유효성을 검증할수 있다는 데 어떻게 하는거지?
```
form에 대한 속성, 유용하것이 많이 있네?
```markdown
accept-charset
스페이스로 구분한, 서버가 허용하는 문자 인코딩의 목록. 브라우저는 목록을 순서대로 사용합니다. 기본값은 페이지 인코딩과 같습니다.
action
양식 데이터를 처리할 프로그램의 URI. <button>, <input type="submit"> (en-US), <input type="image"> (en-US) 요소의 formaction 특성으로 재정의할 수 있습니다.
autocapitalize 
양식 요소 내에서 영문을 입력할 때 자동으로 대문자 변환하는 방식. iOS Safari에서만 사용하는 비표준 특성입니다. 각 요소의 autocapitalize 특성이 <form>에 정의된 값을 재정의합니다.
none: 자동 대문자 입력을 비활성화합니다.
sentences: 문장의 첫 글자를 대문자로 변환합니다. 기본값.
words: 각 단어의 첫 글자를 대문자로 변환합니다.
characters: 모든 글자를 대문자로 변환합니다.
autocomplete
입력 요소가 자동완성된 값을 기본값으로 가질 수 있는지 나타냅니다. 각 요소의 autocomplete 특성이 <form>에 정의된 값을 재정의합니다.
off: 브라우저가 각 항목에 자동으로 값을 채워 넣지 않습니다. (로그인 양식으로 의심되는 경우 보통 무시합니다)
on: 사용자의 과거 입력값에 기반하여 브라우저가 자동으로 값을 채워 넣습니다.
enctype
method 특성이 post인 경우, enctype은 양식 제출 시 데이터의 MIME 유형을 나타냅니다.
application/x-www-form-urlencoded: 기본값.
multipart/form-data: <input type="file">이 존재하는 경우 사용하세요.
text/plain: HTML 5에서 디버깅 용으로 추가된 값.
<button>, <input type="submit"> (en-US), <input type="image"> (en-US) 요소의 formenctype 특성으로 재정의할 수 있습니다.

method
양식을 제출할 때 사용할 HTTP 메서드.
post: POST 메서드. 양식 데이터를 요청 본문으로 전송합니다.
get: GET 메서드. 양식 데이터를 action URL과 ? 구분자 뒤에 이어 붙여서 전송합니다.
dialog: 양식이 <dialog> 안에 위치한 경우, 제출과 함께 대화 상자를 닫습니다.
<button>, <input type="submit"> (en-US), <input type="image"> (en-US) 요소의 formmethod 특성으로 재정의할 수 있습니다.

name 
양식의 이름. HTML 4부터 사용 중단됐습니다. id를 사용하세요.
novalidate
지정한 경우 양식의 유효성 검증을 건너뜁니다. novalidate 특성을 지정하지 않은(양식의 검증을 수행하는) 경우에도 <button>, <input type="submit"> (en-US), <input type="image"> (en-US) 요소의 formnovalidate 특성으로 재정의할 수 있습니다.
target
양식 제출의 결과를 표시할 위치를 나타내는 표준 키워드 혹은 사용자 지정 이름. 가능한 값은 브라우징 맥락(탭, 창, <iframe>)의 이름 또는 키워드입니다. 지정한 경우, 버튼의 양식 소유자가 가진 target 특성보다 우선합니다. 다음 키워드는 특별한 뜻을 가지고 있습니다.
_self: 응답을 현재 브라우징 맥락에 표시합니다. 기본값.
_blank: 응답을 새로운 브라우징 맥락에 표시합니다. 보통 새 탭이지만, 사용자가 브라우저 설정을 통해 새 창으로 바꿀 수 있습니다.
_parent: 응답을 현재 브라우징 맥락의 부모에 표시합니다. 부모가 존재하지 않으면 _self와 동일하게 행동합니다.
_top: 응답을 최상단 브라우징 맥락(현재 맥락의 부모면서 자신의 부모가 존재하지 않는, 제일 높은 맥락)에 표시합니다. 부모가 존재하지 않으면 _self와 동일하게 행동합니다.
<button>, <input type="submit"> (en-US), <input type="image"> (en-US) 요소의 formtarget 특성으로 재정의할 수 있습니다.
```


## 웹 컴포넌트
웹 컴포넌트는 완전히 새로운 형태의 요소를 생성한 후 일반적인 HTML처럼 사용할 수 있는 기술입니다. 또한 표준 HTML 요소의 맞춤 버전을 만들 수도 있습니다.

|Element	|Description|
|---        |---        |
|`<slot>`	 |`HTML <slot> 요소는 웹 컴포넌트 사용자가 자신만의 마크업으로 채워 별도의 DOM 트리를 생성하고, 컴포넌트와 함께 표현할 수 있는 웹 컴포넌트 내부의 플레이스홀더입니다.`|
|`<template>`|`HTML <template> 요소는 페이지를 불러온 순간 즉시 그려지지는 않지만, 이후 JavaScript를 사용해 인스턴스를 생성할 수 있는 HTML 코드를 담을 방법을 제공합니다.`|



## 텍스트 콘텐츠

HTML 텍스트 콘텐츠를 사용하여 여는 <body>와 닫는 </body> 태그 사이의 블록이나 콘텐츠 구획을 정리할 수 있습니다. 해당 콘텐츠의 목적이나 구조 판별에 사용하므로 접근성과 SEO에 중요합니다.

```markdown
Element	Description
<blockquote>	HTML <blockquote> 요소는 안쪽의 텍스트가 긴 인용문임을 나타냅니다. 주로 들여쓰기를 한 것으로 그려집니다. (외형을 바꾸는 법은 사용 일람을 참고하세요) 인용문의 출처 URL은 cite 특성으로, 출처 텍스트는 cite 요소로 제공할 수 있습니다.
<dd>	HTML <dd> 요소는 정의 목록 요소(dl)에서 앞선 용어(dt)에 대한 설명, 정의, 또는 값을 제공합니다.
<div>	HTML <div> 요소는 플로우 콘텐츠를 위한 통용 컨테이너입니다. CSS로 꾸미기 전에는 콘텐츠나 레이아웃에 어떤 영향도 주지 않습니다.
<dl>	HTML <dl> 요소는 설명 목록을 나타냅니다. <dl>은 dt로 표기한 용어와 dd 요소로 표기한 설명 그룹의 목록을 감싸서 설명 목록을 생성합니다. 주로 용어사전 구현이나 메타데이터(키-값 쌍 목록)를 표시할 때 사용합니다.
<dt>	HTML <dt> 요소는 설명 혹은 정의 리스트에서 용어를 나타냅니다. dl 요소 안에 위치해야 합니다
<figcaption>	HTML <figcaption> 요소는 부모 figure 요소가 포함하는 다른 콘텐츠에 대한 설명 혹은 범례를 나타냅니다.
<figure>	HTML <figure> 요소는 독립적인 콘텐츠를 표현합니다. figcaption 요소를 사용해 설명을 붙일 수 있습니다.
<hr>	HTML <hr> 요소는 이야기 장면 전환, 구획 내 주제 변경 등, 문단 레벨 요소에서 주제의 분리를 나타냅니다.
<li>	HTML <li> 요소는 목록의 항목을 나타냅니다.
<menu>	HTML <menu> 요소는 사용자가 수행하거나 하는 명령 묶음을 말합니다. 이것은 스크린 위에 나오는 목록 메뉴와 눌려진 버튼 아래에 나오는 것과 같은 맥락 메뉴를 포함합니다.
<ol>	HTML <ol> 요소는 정렬된 목록을 나타냅니다. 보통 숫자 목록으로 표현합니다.
<p>	HTML <p> 요소는 하나의 문단을 나타냅니다.
<pre>	HTML <pre> 요소는 미리 서식을 지정한 텍스트를 나타내며, HTML에 작성한 내용 그대로 표현합니다.
<ul>	HTML <ul> 요소는 정렬되지 않은 목록을 나타냅니다. 보통 불릿으로 표현합니다.
```

## 인라인 텍스트 시멘틱
HTML 인라인 텍스트 시멘틱을 사용해서 단어, 줄, 혹은 아무 부분의 의미나 구조, 스타일을 정의할 수 있습니다.

```markdown

Element	Description
<a>	HTML <a> 요소(앵커 요소)는 href 특성을 통해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만듭니다.
<abbr>	HTML <abbr> 요소는 준말 또는 머리글자를 나타냅니다.
<b>	HTML <b> 요소는 독자의 주의를 요소의 콘텐츠로 끌기 위한 용도로 사용합니다. 그 외의 다른 특별한 중요도는 주어지지 않습니다.
<bdi> (en-US)	
<bdo>	HTML <bdo> 요소는 현재 텍스트의 쓰기 방향을 덮어쓰고 다른 방향으로 렌더링 할 때 사용합니다.
<br>	HTML <br> 요소는 텍스트 안에 줄바꿈(캐리지 리턴)을 생성합니다. 주소나 시조 등 줄의 구분이 중요한 내용을 작성할 때 유용합니다.
<cite>	HTML <cite> 요소는 저작물의 출처를 표기할 때 사용하며, 제목을 반드시 포함해야 합니다.
<code>	HTML <code> 요소는 짧은 코드 조각을 나타내는 스타일을 사용해 자신의 콘텐츠를 표시합니다.
<data>	HTML <data> 요소는 주어진 콘텐츠를 기계가 읽을 수 있는 해석본과 연결합니다.
<dfn>	HTML <dfn> 요소는 현재 맥락이나 문장에서 정의하고 있는 용어를 나타냅니다.
<em>	HTML <em> 요소는 텍스트의 강세를 나타냅니다. <em> 요소를 중첩하면 더 큰 강세를 뜻하게 됩니다.
<i>	HTML <i> 요소는 텍스트에서 어떤 이유로 주위와 구분해야 하는 부분을 나타냅니다.
<kbd>	HTML <kbd> 요소는 키보드 입력, 음성 입력 등 임의의 장치를 사용한 사용자의 입력을 나타냅니다.
<mark>	HTML <mark> 요소는 현재 맥락에 관련이 깊거나 중요해 표시 또는 하이라이트한 부분을 나타냅니다.
<q>	HTML <q>요소는 둘러싼 텍스트가 짧은 인라인 인용문이라는것을 나타냅니다.
<rp>	HTML <rp> 요소는 ruby 요소를 사용한 루비 주석을 지원하지 않는 경우 보여줄 괄호를 제공할 때 사용합니다.
<rt>	HTML <rt> 요소는 동아시아 문자의 루비 주석에서 발음, 번역 등을 나타내는 텍스트 부분을 지정합니다.
<ruby>	HTML <ruby> 요소는 루비 주석을 나타냅니다. 루비 주석은 동아시아 문자의 발음을 표기할 때 사용합니다.
<s>	HTML <s> 요소는 글자에 취소선, 즉 글자를 가로지르는 선을 그립니다.
<samp>	HTML <samp> 요소는 컴퓨터 프로그램 출력의 예시(혹은 인용문)를 나타냅니다.
<small>	HTML <small> 요소는 덧붙이는 글이나, 저작권과 법률 표기 등의 작은 텍스트를 나타냅니다.
<span>	HTML <span> 요소는 구문 콘텐츠를 위한 통용 인라인 컨테이너로, 본질적으로는 아무것도 나타내지 않습니다. 스타일을 적용하기 위해서, 또는 lang 등 어떤 특성의 값을 서로 공유하는 요소를 묶을 때 사용할 수 있습니다.
<strong>	HTML <strong> 요소는 중대하거나 긴급한 콘텐츠를 나타냅니다. 보통 브라우저는 굵은 글씨로 표시합니다.
<sub>	HTML <sub> 요소는 활자 배치를 아래 첨자로 해야 하는 인라인 텍스트를 지정합니다.
<sup>	HTML <sup> 요소는 활자 배치를 위 첨자로 해야 하는 인라인 텍스트를 지정합니다.
<time>	HTML <time> 요소는 시간의 특정 지점 또는 구간을 나타냅니다.
<u>	HTML <u> 요소는 글자로 표현하지 않는 주석을 가진 것으로 렌더링 해야 하는 텍스트를 나타냅니다.
<var>	HTM <var> 요소는 수학 표현 또는 프로그래밍에서 변수의 이름을 나타냅니다.
<wbr>	HTML <wbr> 요소는 현재 요소의 줄 바꿈 규칙을 무시하고 브라우저가 줄을 바꿀 수 있는 위치를 나타냅니다.
```

## 수정사항 표시
텍스트의 특정 부분이 수정됐다는 것을 표시할 수 있습니다.

|Element	|Description|
|---        |---        |
|`<del>`	|`HTML <del> 요소는 문서에서 제거된 텍스트의 범위를 나타냅니다.`|
|`<ins>`	|`HTML <ins> 요소는 문서에 추가된 텍스트의 범위를 나타냅니다.`|

## 이미지 & 멀티미디어
HTML은 사진, 오디오, 비디오 등 다양한 멀티미디어 리소스를 지원합니다..

```markdown
Element	Description
<area>	HTML <area> 요소는 이미지의 핫스팟 영역을 정의하고 hyperlink를 추가할 수 있습니다. map 요소 안에서만 사용할 수 있습니다.
<audio>	HTML <audio> 요소는 문서에 소리 콘텐츠를 포함할 때 사용합니다.
<img>	HTML <img> 요소는 문서에 이미지를 넣습니다.
<map>	HTML <map> 요소는 area 요소와 함께 이미지 맵(클릭 가능한 링크 영역)을 정의할 때 사용합니다.
<track>	HTML <track> 요소는 미디어 요소(audio, video)의 자식으로서, 자막 등 시간별 텍스트 트랙(시간 기반 데이터)를 지정할 때 사용합니다.
<video>	HTML <video> 요소는 비디오 플레이백을 지원하는 미디어 플레이어를 문서에 삽입합니다.
```

## 이미지 & 멀티미디어
HTML은 사진, 오디오, 비디오 등 다양한 멀티미디어 리소스를 지원합니다..

```markdown

Element	Description
<area>	HTML <area> 요소는 이미지의 핫스팟 영역을 정의하고 hyperlink를 추가할 수 있습니다. map 요소 안에서만 사용할 수 있습니다.
<audio>	HTML <audio> 요소는 문서에 소리 콘텐츠를 포함할 때 사용합니다.
<img>	HTML <img> 요소는 문서에 이미지를 넣습니다.
<map>	HTML <map> 요소는 area 요소와 함께 이미지 맵(클릭 가능한 링크 영역)을 정의할 때 사용합니다.
<track>	HTML <track> 요소는 미디어 요소(audio, video)의 자식으로서, 자막 등 시간별 텍스트 트랙(시간 기반 데이터)를 지정할 때 사용합니다.
<video>	HTML <video> 요소는 비디오 플레이백을 지원하는 미디어 플레이어를 문서에 삽입합니다.
```

## 내장 콘텐츠
HTML은 일반적인 멀티미디어 콘텐츠 외에도 다양한 종류의 기타 콘텐츠를 포함할 수 있습니다.

```markdown
Element	Description
<embed>	HTML <embed> 요소는 외부 어플리케이션이나 대화형 컨텐츠와의 통합점을 나타냅니다.
<iframe>	HTML <iframe> 요소는 중첩 browsing context을 나타내는 요소로, 현재 문서 안에 다른 HTML 페이지를 삽입합니다.
<object>	HTML <object> 요소는 이미지나, 중첩된 브라우저 컨텍스트, 플러그인에 의해 다뤄질수 있는 리소스와 같은 외부 리소스를 나타냅니다.
<param>	HTML <param> 요소는 object 요소의 매개변수를 정의합니다.
<picture> (en-US)	
<portal> (en-US)	
<source> (en-US)	
```

## 스크립트
HTML은 동적인 콘텐츠와 웹 어플리케이션을 위해 스크립트 언어, 그 중에서도 주로 JavaScript를 지원합니다. 특정 요소가 이런 기능을 가지고 있습니다.

```markdown

Element	Description
<canvas>	HTML <canvas> 요소는 캔버스 스크립팅 API 또는 WebGL API와 함께 사용해 그래픽과 애니메이션을 그릴 수 있습니다.
<noscript>	HTML <noscript> 요소는 페이지의 스크립트 유형을 지원하지 않거나, 브라우저가 스크립트를 비활성화한 경우 보여줄 HTML 구획을 정의합니다.
<script>	HTML <script> 요소는 데이터와 실행 가능한 코드를 문서에 포함할 때 사용하며 보통 JavaScript 코드와 함께 씁니다.
```

## 표 콘텐츠
표 형식의 데이터를 생성하고 처리할 때 사용합니다.

```markdown
Element	Description
<caption>	HTML <caption> 요소는 표의 설명 또는 제목을 나타냅니다.
<col>	HTML <col> 요소는 표의 열을 나타내며, 열에 속하는 칸에 공통된 의미를 부여할 때 사용합니다.
<colgroup>	HTML <colgroup> 요소는 표의 열을 묶는 그룹을 정의합니다.
<table>	HTML <table> 요소는 행과 열로 이루어진 표를 나타냅니다.
<tbody>	HTML <tbody> 요소는 표의 여러 행(tr)을 묶어서 표 본문을 구성합니다.
<td>	Table cell HTML 요소 (<td>) 는 데이터를 포함하는 표의 셀을 정의합니다. 이것은 표 모델에 참여합니다.
<tfoot> (en-US)	
<th>	The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.
<thead>	The HTML Table Head Element (<thead>) defines a set of rows defining the head of the columns of the table.
<tr>	The HTML Table Row Element (<tr>) defines a row of cells in a table. Those can be a mix of td and th elements.
```

## 폐기됐거나 사용하지 않는 요소들
경고: 다음은 더 이상 사용하지 않고, 사용해서도 안되는 오래된 HTML 요소입니다. 새로운 프로젝트에서 절대 사용해서는 안되고, 오래된 프로젝트에서도 가능한 빨리 대체해야 합니다. 아래 목록은 정보성 목적으로만 존재합니다.

```
<acronym> (en-US)	
<applet>	HTML의 Applet 태그 (<applet>) 는 자바 애플릿을 보이게 하는 곳에 쓰입니다.
<basefont> (en-US)	
<bgsound> (en-US)	
<big> (en-US)	
<blink> (en-US)	
<center>	이 HTML Center (<center>)요소는 또다른 블록요소을 포함하거나, 인라인요소(Inline)를 포함할 수 있는 블록속성(block-level) 의 요소이다. 그리고 해당 <center> 요소안에 포함된 전체요소는  <center>의 내용안에 가운데 정렬이 된다. (통상적으로 body로 쓰임).
<content>	The HTML <content> element—an obsolete part of the Web Components suite of technologies—was used inside of Shadow DOM as an insertion point, and wasn't meant to be used in ordinary HTML.
<dir> (en-US)	
<font>	HTML에서의 Font 요소 (<font>) 는 본문의 글자 크기, 색상과 및면을 정의합니다.
<frame>	<frame>은 다른 HTML 문서가 표시될 수 있는 특정 영역을 정의하는 element이다. frame은 frameset내에서 사용되어야 한다.
<frameset>	<frameset>은 HTML element로써 frame element을 포함하고 사용된다.
<hgroup>	HTML <hgroup> 요소는 문서 구획의 다단계 제목을 나타냅니다. 다수의 Heading_Elements 요소를 묶을 때 사용합니다.
<image> (en-US)	
<keygen>	The HTML <keygen> element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <keygen> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate.
<marquee> (en-US)	
<menuitem> (en-US)	
<nobr> (en-US)	
<noembed> (en-US)	
<noframes> (en-US)	
<plaintext> (en-US)	
<rb>	HTML <rb> 요소는 ruby 표기의 기반 텍스트 구성요소(루비 주석을 적용하려는 글자)를 나눌 때 사용합니다.
<rtc>	HTML <rtc> 요소는 rb 요소가 표시하는 문자의 의미에 대한 주석을 나타냅니다.
<shadow> (en-US)	
<spacer> (en-US)	
<strike> (en-US)	
<tt> (en-US)	
<xmp> (en-US)	
```