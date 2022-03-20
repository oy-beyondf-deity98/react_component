import React from 'react';
import "./dash_grid.css"

function DashBoardTemplate(props) {
  return (
    <div className={"grid x-12"}>
      {props.children}
    </div>
  );
}

export default DashBoardTemplate;