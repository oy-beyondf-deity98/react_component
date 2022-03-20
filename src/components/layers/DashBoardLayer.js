import React from 'react';

function DashBoardLayer({col,row,...rest}) {
  const colClass = "w-"+ col
  const rowClass = "h-"+ row
  const height= rest.height || '130px'

  const className =[colClass, rowClass]

  console.log(className)

  return (
    <div className={className.join(" ")} style={{height:height}}>{rest.children}</div>
  );
}

export default DashBoardLayer;