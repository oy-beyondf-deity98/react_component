import React, {useRef} from 'react';
import styles from "./DCSearch.module.css";

/**
 * input 안에 버튼을 넣는 것을 참조할수 있다.
 * @returns {JSX.Element}
 * @constructor
 */
const DcSearch = () => {

  const inputRef = useRef(null);
  const handleChange = () =>{
    console.log(inputRef.current)
  }
  return (
    <div className={styles.inputWrap}>
      <input type={"text"} ref={inputRef} placeholder={"검색어를 입력하세요"} />
      <button className={styles.btnClear} onClick={handleChange}>x</button>
    </div>
  );
};

export default DcSearch;