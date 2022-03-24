import React from 'react';

//TODO 트리리스트 만들기
//TODO 간단히 뷰만 보여주는것... 클릭할때 나와도 상관 없겠다.
//TODO 클릭 이벤트도 넣기
function TreeList(props) {
  return (
    <div>
      <ul style={{listStyle:"none"}}>
        <li>
          첫번째<ul>
          <li>두번째-1</li>
          <li>두번째-2</li>
        </ul>
        </li>
      </ul>
    </div>
  );
}

export default TreeList;