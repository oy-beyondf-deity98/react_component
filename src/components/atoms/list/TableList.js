import React from 'react';
import "./table.css"

//TODO key넣는 것도 하나의 패턴이네... 이것도 나중에다 빼도록하자.
//TODO 대신에.... child의 속성에 있는 것은 따로 해야할지도?
const getTableItem = (children, item) =>{
  let itemList = []
  children.forEach((child,index) => {
    const key = `${child.props.field}-${index}`
    itemList.push(<td key={key}>{item[child.props.field]}</td>)
  });
  return itemList
}

const handleRowClick = (item, rowClick) =>{
  rowClick(item)
}

const getFieldProp = (props) =>{
  const {children,list} = props
  let header = [];
  let data = [];

  let cChildren =[]
  if(Array.isArray(children)){
    cChildren = children.map(data => data);
  }else{
    cChildren.push(children)
  }

  if(cChildren){
    cChildren.forEach((child,index) => {
      const key = `${child.props.field}-${index}`
      header.push(<th key={key} scope={"col"}>{child.props.title}</th>)
    });

    if(list && list.length > 0){
      list.forEach((item,index) =>{
        const key = `${index}`
        if(props.rowClick){
          data.push(<tr key={key} onClick={() => handleRowClick(item, props.rowClick)}>{getTableItem(cChildren,item)}</tr>)
        }else{
          data.push(<tr key={key}>{getTableItem(cChildren,item)}</tr>)
        }

      })
    }else{
      data.push(<tr><td colSpan={cChildren.length}>No Data</td></tr>)
    }
  }

  return {header,data};
}

//TODO widht가 있을때 Colgroup과 caption과 table 속성 summary도 달도록 하자.
//TODO 로우 클릭할때 반응도 보자.
function TableList(props) {

  const {header,data} = getFieldProp(props);
  const height = "500px"
  return (
    <div style={{width:"100%", height:"500px", overflow:"auto"}}>
      {/*나중에 colgroup도 넣자. width값이 있을때 이야기이다.*/}
      {/*<colgroup>*/}
      {/*  <col width={""}/>*/}
      {/*  <col width={""}/>*/}
      {/*  <col width={""}/>*/}
      {/*  <col width={""}/>*/}
      {/*</colgroup>*/}
      <table className={"type01"} style={{width:"100%", borderRadius:"2px"}}>
        <thead>
          <tr>
            {header}
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
      {/*<div>페이징</div>*/}
    </div>
  );
}



export default TableList;

export function TableCol(props) {
  console.log(props)
  console.log("여기는 안거쳐 간다")
  return {...props.props};
}
