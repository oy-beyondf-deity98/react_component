import React from 'react';

function ListTemplate(props) {

  const searchLayer = props.children[0]
  const tableLayer = props.children[1]
  let detailLayer = null
  if(props.children && props.children.length >2){
    detailLayer = props.children[2]
  }

  return (
    <div className={"container-fluid"} style={{marginLeft:"2px"}}>
      <div style={{height:"5vh", border:"1px solid black", borderRadius:"3px", marginBottom:"50px"}}>
        {searchLayer}
      </div>
      <div>
        {tableLayer}
      </div>
      {detailLayer &&
        <div>
          {detailLayer}
        </div>
      }
    </div>
  );
}

export default ListTemplate;