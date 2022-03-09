import React from 'react';

function UserMenuNav(props) {
  const {menu} = props.menu ||''
  const jutis = "row"
  if(menu){

  }
  return (
    <nav className={"navbar"}
         style={{position:"fixed", width:"100%", height:"50px", background:"#fff", color: "#535763", display: "block",
      top: "50px", marginTop:"0", boxShadow:"0 2px 10px -1px rgb(69 90 100 / 30%)", transition:"all 0.3s ease-in-out" }}>
      <div className={"wrapper"}>
        <div className={"navbar-content"}>
          <ul className={"nav sidenav-inner"} style={{display:"flex", flexDirection:jutis, flexWrap:"wrap", listStyle:"none", marginLeft:"32px"}}>
            <li style={{marginRight:"1rem"}}>메뉴1</li>
            <li style={{marginRight:"1rem"}}>메뉴2</li>
            <li style={{marginRight:"1rem"}}>메뉴3</li>
          </ul>
        </div>
      </div>

    </nav>
  );
}

export default UserMenuNav;