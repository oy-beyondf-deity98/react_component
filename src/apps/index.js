import React from 'react';
import {Route,Routes} from "react-router-dom";
import MainApp from "./MainApp";
import LeftTemplateApp from "./LeftTemplateApp";
import ListTemplateApp from "./ListTemplateApp";


function DefaultApp() {
  return (
    <div>처음앱 입니다.로그인을 해야겠죠?</div>
  );
}

function Apps(props) {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<DefaultApp />} />
        <Route path="/main" element={<MainApp />} />
        <Route path="/tree" element={<LeftTemplateApp />} />
        <Route path="/list" element={<ListTemplateApp />} />
      </Route>
    </Routes>
  );
}

export default Apps;