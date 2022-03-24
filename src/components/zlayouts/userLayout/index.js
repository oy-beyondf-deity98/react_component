import React from 'react';
import UserMenuNav from "./UserMenuNav";
import UserNavBar from "./UserNavBar";
import UserBreadcrumb from "./UserBreadcrumb";

function UserLayout(props) {
  console.log(props.component())
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
                  {props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLayout;