import React from 'react';
import SelectList from "../atoms/list/SelectList";

/**
 * submit 안좋은 것 같다. 엔터치면 되는 것은 좋지만 말이다.. 화면 리로딩 된다.
 * @param handlerSearch
 * @param children
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function SearchLayer({handlerSearch,children,...rest}) {
  return (
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"100%"}}>
      <form onSubmit={handlerSearch}>
        <div style={{display:"flex", flexWrap:"wrap", paddingRight:"10px"}}>
          {children}
        </div>
      </form>
      <div style={{width:"10%", paddingLeft:"10px"}}>
        <button>검색</button>
      </div>
    </div>
  );
}

export default SearchLayer;