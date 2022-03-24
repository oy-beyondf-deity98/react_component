import React from 'react';

//TODO 우측에 설정창을 넣도록 하자. 접었다 폈다...
const OneTemplate = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default OneTemplate;