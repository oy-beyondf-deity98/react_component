import React from 'react';
import {menuList} from "../../../../../../apps/admin/5menu/menu_list";
import {Link} from "react-router-dom";

//TODO 메뉴 하위로 내리는 것 확인해보기
function AdminMenuNav(props) {
  const jutis = "column"

  let ul_menu = null;
  if(menuList){
    ul_menu = menuList.filter(menu =>menu.name==="root_admin")
  }

  console.log('메뉴리스트 출력 횟수',ul_menu)
  return (
    <nav className={"navbar"}
         style={{position:"fixed", height:"100vh", minHeight:"100vh",borderRadius:0, width:"200px", background:"#fff", color: "#535763", display: "block",
      top: "0", boxShadow:"none", transition:"all 0.3s ease-in-out", borderBottom:"1px solid #cccccc" }}>
      <div className={"wrapper"} style={{width:"100%", height:"100%", marginTop:"50px"}}>
        <div className={"navbar-content"} style={{height:"100vh", width:"100%", position:"relative"}}>
          <div className={"scrollbar"} style={{height:"calc(100% - 50px)",marginTop:"32px", borderRight:"1px solid #eaeaea", overflow:"hidden", overflowAnchor:"none", touchAction:"auto"}}>
            <ul className={"nav sidenav-inner"} style={{display:"flex", flexDirection:jutis, flexWrap:"wrap", listStyle:"none", marginTop:"32px", paddingLeft:"10px", marginBottom:"10px", position:"relative"}}>
              {/*<li style={{position:"relative"}}>*/}
              {/*  <a href="#" style={{padding:"7px 10px", transition:"all 0.3s ease-in-out", textAlign:"left", margin:"5px 10px", borderRadius:"0.25rem", position:"relative", display:"block", color:"#555"}}>*/}
              {/*    <span className={"micon"}>DC</span>*/}
              {/*    /!*<span className={"mtext"}>데이터정책</span>*!/*/}
              {/*  </a>*/}
              {/*</li>*/}
              {/*<li style={{position:"relative"}}>*/}
              {/*  <a href="#" style={{padding:"7px 10px", transition:"all 0.3s ease-in-out", textAlign:"left", margin:"5px 10px", borderRadius:"0.25rem", position:"relative", display:"block", color:"#555"}}>*/}
              {/*    <span className={"micon"}>DP</span>*/}
              {/*    /!*<span className={"mtext"}>데이터정책</span>*!/*/}
              {/*  </a>*/}
              {/*</li>*/}
              {/*<li style={{position:"relative"}}>*/}
              {/*  <a href="#" style={{padding:"7px 10px", transition:"all 0.3s ease-in-out", textAlign:"left", margin:"5px 10px", borderRadius:"0.25rem", position:"relative", display:"block", color:"#555"}}>*/}
              {/*    <span className={"micon"}>A</span>*/}
              {/*    /!*<span className={"mtext"}>데이터정책</span>*!/*/}
              {/*  </a>*/}
              {/*</li>*/}
              {
                ul_menu[0].children.map(item =><li key={item.id} style={{position:"relative", paddingBottom:"10px"}}><Link to={item.url} title={item.name}>{item.name}</Link></li>)
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminMenuNav;