import React from 'react';

function AdminMenuNav(props) {
  const {menu} = props.menu ||''
  const jutis = "column"
  if(menu){

  }
  return (
    <nav className={"navbar"}
         style={{position:"fixed", height:"100vh", minHeight:"100vh",borderRadius:0, width:"70px", background:"#fff", color: "#535763", display: "block",
      top: "0", boxShadow:"none", transition:"all 0.3s ease-in-out", borderBottom:"1px solid #cccccc" }}>
      <div className={"wrapper"} style={{width:"100%", height:"100%", marginTop:"50px"}}>
        <div className={"navbar-content"} style={{height:"100vh", width:"100%", position:"relative"}}>
          <div className={"scrollbar"} style={{height:"calc(100% - 50px)",marginTop:"32px", borderRight:"1px solid #eaeaea", overflow:"hidden", overflowAnchor:"none", touchAction:"auto"}}>
            <ul className={"nav sidenav-inner"} style={{display:"flex", flexDirection:jutis, flexWrap:"wrap", listStyle:"none", marginTop:"32px", paddingLeft:"0", marginBottom:"0", position:"relative"}}>
              <li style={{position:"relative"}}>
                <a href="#" style={{padding:"7px 10px", transition:"all 0.3s ease-in-out", textAlign:"left", margin:"5px 10px", borderRadius:"0.25rem", position:"relative", display:"block", color:"#555"}}>
                  <span className={"micon"}>A</span>
                  <span className={"mtext"}>데이터정책</span>
                </a>
              </li>
              <li style={{position:"relative"}}>
                <a href="#" style={{padding:"7px 10px", transition:"all 0.3s ease-in-out", textAlign:"left", margin:"5px 10px", borderRadius:"0.25rem", position:"relative", display:"block", color:"#555"}}>
                  <span className={"micon"}>A</span>
                  <span className={"mtext"}>데이터정책</span>
                </a>
              </li>
              <li style={{position:"relative"}}>
                <a href="#" style={{padding:"7px 10px", transition:"all 0.3s ease-in-out", textAlign:"left", margin:"5px 10px", borderRadius:"0.25rem", position:"relative", display:"block", color:"#555"}}>
                  <span className={"micon"}>A</span>
                  <span className={"mtext"}>데이터정책</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminMenuNav;