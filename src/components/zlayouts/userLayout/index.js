import React from 'react';
import UserMenuNav from "./UserMenuNav";
import UserNavBar from "./UserNavBar";
import UserBreadcrumb from "./UserBreadcrumb";

//TODO 하위에 있는 props.component()에서 변경되었는데.. 여기까지 나오는 것일까? props.compoennt()가 함수여서 그런걸까?

function UserLayout(props) {
  console.log('layout',props)
  return (
    <>
      <UserMenuNav/>
      <UserNavBar/>
      <div className={"main-container"} style={{marginTop:"100px", marginLeft:"0", paddingTop:"1px", minHeight:"calc(100vh - 100px)"}} >
        <div className={"wrapper"}>
          <div className={"content"} style={{position:"relative", display:"block", padding:"25px"}}>
            <div className={"inner-content"}>
              <UserBreadcrumb/>
              <div className={"main-body"}>
                <div className={"page-wrapper"}>
                  {props.component()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(UserLayout);