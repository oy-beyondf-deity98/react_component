import React from 'react';

const BothEndLayer = (props) => {
  const left = props.children[0]
  const right = props.children[1]

  console.log('BothEndLayer')
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <div>
        {left}
      </div>
      <div>
        {right}
      </div>
    </div>
  );
};

export default BothEndLayer;