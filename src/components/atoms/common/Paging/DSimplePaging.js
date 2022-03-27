import React from 'react';
import "./d-simple-paging.css"

const DSimplePaging = () => {
  const pagingNumber = "1-10 of 11"
  return (
    <div>
      <nav style={{display:"flex", flex:"1 1 auto", alignItems:"center", boxSizing:"border-box", paddingRight:"8px", paddingLeft:"8px", width:"100%", color:"rgbs(0,0,0,0,54)", minHeight:"56px", fontSize:"13px", backgroundColor:"#FFFFFF", borderTopColor:"rgba(0,0,0,.12", borderTopWidth:"1px", borderTopStyle:"solid", justifyContent:"center"}}>
        <span style={{margin:"0 24px"}}>{pagingNumber}</span>
        <div style={{display:"flex", alignItems:"center", borderRadius:"4px", whiteSpace:"nowrap"}}>
          <button disabled={true} className={"pagination-first-page simple-paging-button"}>{"<<"}</button>
          <button disabled={true} className={"pagination-previous-page simple-paging-button"}>{"<"}</button>
          <button className={"pagination-next-page simple-paging-button"}>{">"}</button>
          <button className={"pagination-last-page simple-paging-button"}>{">>"}</button>
        </div>
      </nav>
    </div>
  );
};

export default DSimplePaging;