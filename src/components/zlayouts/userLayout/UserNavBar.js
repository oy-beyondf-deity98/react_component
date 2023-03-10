import React from 'react';
import {useNavigate} from "react-router-dom";

function UserNavBar(props) {
  // const {history} = useHistory()
  let navigate = useNavigate();

  const goAdmin = () =>{
    console.log("goAdmin")
    //히스토리 push 보내기
    // history.push("/user_manage");
    navigate("/user_manage")
  }

  const logout = () =>{
    navigate("/login")
  }

  console.log('navBar')
  return (
    <header style={{display:"flex", position:"fixed", top:"0", width:"100%", minHeight:"50px", height:"50px", background:"#4680ff", color:"rgba(255,255,255, 0.8"}}>
      <div className={"logo"} style={{display:"inline-flex", justifyContent:"center",alignItems:"center", width:"100px", position:"relative",  padding: "0 25px"}}>
        <div className={"menu_toggle"}><span/></div>
        <a href={"/main"} style={{textDecoration:"none", backgroundColor:"transparent"}}>
          TTC
        </a>
      </div>
      <div className={"main_header"} style={{display:"flex", alignItems:"center", flexBasis:"auto", flexGrow:"1"}}>
        <div>
          <span>
            Deity(The This Company)
          </span>
        </div>
        <ul style={{listStyle:"none", display:"inline-flex", flexDirection:"row",
          float:"right", marginLeft:"auto", height:"50px", paddingLeft:0, alignItems:"center"
        }}
        >
          <li style={{paddingLeft:"5px"}}>
            <button style={{background: "#000000", color: "#fff", border: "1px solid #000000", opacity: "0.5", height:"33px", padding:"0 10px"}}>검색</button>
          </li>
          <li style={{paddingLeft:"5px"}}>
            <button title="관리자 화면" style={{background: "#000000", color: "#fff", border: "1px solid #000000", opacity: "0.5", height:"33px", padding:"0 10px"}} onClick={goAdmin}>admin</button>
          </li>
          <li style={{paddingLeft:"5px", paddingRight:"25px"}}>
            <div className={"dropdown"}>
              <button style={{background: "#000000", color: "#fff", border: "1px solid #000000", opacity: "0.5", height:"33px", padding:"0 10px"}} onClick={logout}>인</button>
              {/*<div className={"dropdown-menu"} style={{position:"absolute", inset:"0px 0px auto auto", margin:"0px", transform:"translate(-13px, 9px)", top:"50px", overflow:"hidden"}}>*/}
              {/*  <div style={{background:"rgb(0,0,0)", border:"solid 1px", padding:"15px"}}><span>시스템 관리자 그룹</span></div>*/}
              {/*  <ul>*/}
              {/*    <li style={{color:"#222222"}}>비밀번호 변경</li>*/}
              {/*    <li>*/}
              {/*      <button style={{background: "#000000", color: "#fff", border: "1px solid #000000", opacity: "0.5", height:"33px", padding:"0 10px"}} onClick={logout}>로그아웃</button>*/}
              {/*    </li>*/}
              {/*  </ul>*/}
              {/*</div>*/}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default React.memo(UserNavBar);