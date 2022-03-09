import React from 'react';

function ListTemplate(props) {
  const search = props.children[0]
  const table = props.children[1]
  return (
    <div className={"container-fluid"} style={{marginLeft:"2px"}}>
      <div style={{height:"10vh", border:"1px solid black", borderRadius:"3px", marginBottom:"50px"}}>
        {search}
      </div>
      <div>
        {table}
      </div>
    </div>
  );
}

export default ListTemplate;