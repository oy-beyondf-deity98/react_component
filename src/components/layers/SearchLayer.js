import React from 'react';

function SearchLayer(props) {
  return (
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"100%"}}>
      <div style={{display:"flex", flexWrap:"wrap", paddingRight:"10px"}}>
        {props.children}
      </div>
      <div style={{width:"15%", paddingLeft:"10px"}}>
        <button>검색</button>
      </div>
    </div>
  );
}

export default SearchLayer;