import React from 'react';

function UserBreadcrumb() {
  console.log('breadcrumb')
  return (
    <div className={"page-header"}>
      <div className={"page-block"} style={{margin:"0rem 0 2rem"}}>
        <div className={"row"} style={{display:"flex", alignItems:"center", flexWrap:"wrap"}}>
          <div className={"col"} style={{flex:"0 0 50%", maxWidth:"50%"}}>
            <div className={"page-header-title"} style={{fontSize:"1.3rem", fontWeight:"600"}}>
              품질그룹관리
            </div>
          </div>
          <div className={"col"} style={{flex:"0 0 50%", maxWidth:"50%"}}>
            <ul className={"breadcrumb"} style={{display:"flex", flexWrap:"wrap",justifyContent:"end", padding:0,marginBottom:0, listStyle:"none", borderRadius:"0.25rem"}}>
              <li className={"breadcrumb-item"}>
                <i className={"icon-home"}></i>
              </li>
              <li className={"breadcrumb-item"}>
                <a href={"/main"}>품질그룹관리</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(UserBreadcrumb);