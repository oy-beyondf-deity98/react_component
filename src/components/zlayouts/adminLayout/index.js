import React from 'react';
import AdminBreadcrumb from "./AdminBreadcrumb";
import AdminNavBar from "./AdminNavBar";
import AdminMenuNav from "./AdminMenuNav";

function AdminLayout(props) {
  return (
    <>
      <AdminMenuNav/>
      <AdminNavBar/>
      <div className={"main-container"} style={{marginTop:"0", marginLeft:"200px", paddingTop:"0", minHeight:"100vh"}} >
        <div className={"wrapper"}>
          <div className={"content"} style={{position:"relative", display:"block", padding:"25px"}}>
            <div className={"inner-content"}>
              <AdminBreadcrumb/>
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

export default AdminLayout;