import React from 'react';

const RightEndLayer = (props) => {
  console.log('rightEndLayer')
  return (
    <div align={"right"} style={{marginBottom:"10px", marginTop:"5px"}}>
      {props.children}
    </div>
  );
};

export default RightEndLayer;