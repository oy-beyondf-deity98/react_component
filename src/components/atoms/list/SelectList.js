import React from 'react';

/**
 * multi Select도 생각해보자.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function SelectList(props) {
  return (
    <select>
      {
        props.optionList ?
        props.optionList.map(item =><option value={item.value}>{item.label}</option>)
          :<option value={""} placeholder={"No Data"}>No Data</option>
      }
    </select>

  );
}

export default SelectList;