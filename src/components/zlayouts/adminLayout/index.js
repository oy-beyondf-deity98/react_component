import React from 'react';
import AdminBreadcrumb from "./AdminBreadcrumb";
import AdminNavBar from "./headerBar/AdminNavBar";
import AdminMenuNav from "./menuNavBar/AdminMenuNav";

function AdminLayout(props) {
  console.log(props.component)
  return (
    <>
      <AdminMenuNav/>
      <AdminNavBar/>
      <div className={"main-container"} style={{marginTop:"0", marginLeft:"70px", paddingTop:"0", minHeight:"100vh"}} >
        <div className={"wrapper"}>
          <div className={"content"} style={{position:"relative", display:"block", padding:"25px"}}>
            <div className={"inner-content"}>
              <AdminBreadcrumb/>
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

export default AdminLayout;