import React from 'react';
import {useNavigate} from "react-router-dom";

function AdminNavBar(props) {
  let navigate = useNavigate()

  const logout = () =>{
    navigate("/login")
  }

  console.log('navBar Admin')
  return (
    <header style={{display:"flex", position:"fixed", top:"0", width:"100%", minHeight:"50px", height:"50px", background:"#4680ff", color:"rgba(255,255,255, 0.8"}}>
      <div className={"logo"} style={{display:"inline-flex", justifyContent:"center",alignItems:"center", width:"100px", position:"relative",  padding: "0 25px"}}>
        <a className={"menu_toggle"}><span/></a>
        <a href={"/main"} style={{textDecoration:"none", backgroundColor:"transparent"}}>
          TTC
        </a>
      </div>
      <div className={"main_header"} style={{display:"flex", alignItems:"center", flexBasis:"auto", flexGrow:"1"}}>
        <div>
          <span>Deity(The This Company)</span>
        </div>
        <ul style={{listStyle:"none", display:"inline-flex", flexDirection:"row",
          float:"right", marginLeft:"auto", height:"50px", paddingLeft:0, alignItems:"center"
        }}
        >
          <li style={{paddingLeft:"5px"}}>
            <button style={{background: "#000000", color: "#fff", border: "1px solid #000000", opacity: "0.5", height:"33px", padding:"0 10px"}}>검색</button>
          </li>
          <li style={{paddingLeft:"5px", paddingRight:"25px"}}>
            <button style={{background: "#000000", color: "#fff", border: "1px solid #000000", opacity: "0.5", height:"33px", padding:"0 10px"}} onClick={logout}>로그아웃</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default AdminNavBar;