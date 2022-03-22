import React from 'react';
import SelectList from "../atoms/list/SelectList";
import PropTypes from "prop-types";


//TODO 이거 자체가 SearchLayer에 속해야 할 것이다.
function SearchField(props) {
  const inputChange = (e) =>{
    let value;
    switch(props.type){
      case "text":      value = e.target.value;   break;
      case "number":    value = e.target.value;   break;
      case "select":    value = e.value;          break;
      case "checkbox":  value = e.target.checked; break
      case "radio":     value = e;                break;
      default :         value = e.target.value;   break;
    }

    props.onChange({name:props.name, value:value})
  }

  let field = null;
  const customProps = {...props}
  delete customProps.type;

  switch(props.type){
    case "text":
      field = (<input type={"text"} {...customProps} onChange={inputChange}/> ); break;
    case "number":
      field = (<input type={"number"} {...customProps} onChange={inputChange}/> ); break;
    case "select":
      field = (<SelectList {...customProps} onChange={inputChange}/>); break;
    case "checkbox":
      //TODO 여러개 일때
      if(customProps.children){

      }else{
        field = (<input type={"checkbox"} {...customProps} onChange={inputChange}/>); break;
      }
      break;
    case "radio":
      //TODO 라디오가 여러개 일때
      if(customProps.children){

      }else{
        field = (<input type={"radio"} {...customProps} onChange={inputChange}/> ); break;
      }
      break;
    case "date":
      field = (<input type={"date"} {...customProps} onChange={inputChange}/> ); break;

    //TODO 추가로 넣을것 1. date가 2개일 때, 2.팝업창으로 나올때, customPop 3. 그외 팝업창으로 나올때
    default:
      field = (<input type={"text"} {...customProps} onChange={inputChange}/> ); break;
  }



  return (
    <div className={"searchField"}>
      {props.label && <label>{props.label}</label>}
      {field}
    </div>
  );
}

//TODO propType 자체가 필요 없을 것이다. props에 넣으면 되니까
SearchField.propType ={
  type:PropTypes.string,
  onChange:PropTypes.func,
  label:PropTypes.string,
}

export default SearchField;