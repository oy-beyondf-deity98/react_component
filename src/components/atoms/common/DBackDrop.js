import React from 'react';
import "./backdrop.css";

const DBackDrop = (props) => {
  const {onHide} = props

  return (
    <>
      <div className={"fade modal-backdrop show"}/>
      <div role={"dialog"} className={"fade modal show"} style={{display:"block"}}>
        <div className={"modal-dialog modal-lg modal-dialog-centered"}>
          <div className={"modal-content"} >
            <div className={"modal-header"}>
              <h5 className={"modal-title"}>상세정보</h5>
              <button type={"button"} className={"close"} onClick={onHide}>
                <span aria-hidden={"true"}>x</span>
                <span className={"sr-only"}>Close</span>
              </button>
            </div>
            <div className={"modal-body"} style={{height:"400px"}}>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default DBackDrop;