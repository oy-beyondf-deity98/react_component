import React from 'react';


const getTableItem = (children, item) =>{
  let itemList = []
  children.forEach(child => {
    itemList.push(<td>{item[child.props.field]}</td>)
  });

  return itemList

}

const getFieldProp = (children,list) =>{
  let header = [];
  let data = [];
  if(children){
    children.forEach(child => {
      header.push(<th>{child.props.title}</th>)
    });

    if(list && list.length > 0){
      list.forEach(item =>{
        data.push(<tr>{getTableItem(children,item)}</tr>)
      })
    }else{
      data.push(<tr><td colSpan={children.length}>No Data</td></tr>)
    }
  }

  return {header,data};
}


function TableList(props) {
  const {children,list} = props
  const {header,data} = getFieldProp(children,list);
  return (
    <div style={{width:"100%", height:"200px", overflow:"auto"}}>
      <table border={"1px"} style={{width:"100%", borderRadius:"2px"}}>
        <thead>
          <tr>
            {header}
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
    </div>
  );
}



export default TableList;

export function TableCol(props) {
  console.log(props)
  console.log("여기는 안거쳐 간다")
  return {...props.props};
}
