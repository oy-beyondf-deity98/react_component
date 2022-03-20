import React from 'react';
import "./grid.css";

function GridTemplate(props) {
  const topObject = props.children[0];
  const leftObject = props.children[1];
  const mainObject = props.children[2];
  const popup = props.children[3];

  return (
    <div className={"grid-container-main"}>
      <div className={"r-top"}>{topObject}</div>
      <div className={"r-left"}>{leftObject}</div>
      <div className={"r-main"}>{mainObject}</div>
      <div className={"r-popup"}>{popup}</div>
    </div>
  );
}

export default GridTemplate;