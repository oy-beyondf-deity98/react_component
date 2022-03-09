import React from 'react';

function LeftTemplate(props) {
  const left = props.children[0]
  const right = props.children[1]
  return (
    <div style={{display:"flex", height:"100vh", width:"100%"}}>
      <div style={{width:"20%", background:"lightgreen"}}>{left}</div>
      <div style={{width:"80%"}}>{right}</div>
    </div>
  );
}

export default LeftTemplate;