import React from 'react';
import {menuList} from "../../../../../../apps/admin/5menu/menu_list";
import {Link} from "react-router-dom";

function UserMenuNav() {
  // const {menu} = props.menu ||''
  const jutis = "row"

  let ul_menu = null;
  if(menuList){
    ul_menu = menuList.filter(menu =>menu.name==="root_user")
  }

  console.log('메뉴리스트 출력 횟수',ul_menu)


  return (
    <nav className={"navbar"}
         style={{position:"fixed", width:"100%", height:"50px", background:"#fff", color: "#535763", display: "block",
      top: "50px", marginTop:"0", boxShadow:"0 2px 10px -1px rgb(69 90 100 / 30%)", transition:"all 0.3s ease-in-out" }}>
      <div className={"wrapper"}>
        <div className={"navbar-content"}>
          <ul className={"nav sidenav-inner"} style={{display:"flex", flexDirection:jutis, flexWrap:"wrap", listStyle:"none", marginLeft:"32px"}}>
            {
              ul_menu[0].children.map(item =><li key={item.id} style={{marginRight:"1rem"}}><Link to={item.url}>{item.name}</Link></li>)
            }
            {/*<li style={{marginRight:"1rem"}}>메뉴1</li>*/}
            {/*<li style={{marginRight:"1rem"}}>메뉴2</li>*/}
            {/*<li style={{marginRight:"1rem"}}>메뉴3</li>*/}
          </ul>
        </div>
      </div>

    </nav>
  );
}

export default React.memo(UserMenuNav);