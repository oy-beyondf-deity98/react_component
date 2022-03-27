import React, {useEffect, useState} from 'react';
import * as PropTypes from "prop-types";

/**
 * 토탈 페이지 구하는 것과 제일 앞으로 제일뒤로, 이전 페이지, 다음 페이지로 가는 로직이 아까워서 copy해 놓는다.
 * 담엔 해메지 말자... 좀더 구체적으로 해야겠지?
 * @param totalPage Math.floor(전체 건수 / 페이지 보여줄 Row 수) +1
 * @param activePage
 * @returns {JSX.Element}
 * @constructor
 */
const DPaging = ({totalPage,activePage, onChangeActivePage}) => {
  const [pageItems, setPageItems] = useState(null);

  const handlePaginationChange = (e) =>{
    // console.log(e.target.arttributes.activepage)

    // const selectActivePage = Number(e.target)
    const selectActivePage = 0 //실제 페이지 번호는 1번부터 시작

    const listOffset = (selectActivePage -1) //리스트는 0번부터 시작하므로 listOffset을 따로 가지고 있는다.

    //activePage를 화면에 저장할 것인지 확인, 화면에 저장해 놔야지...
    if(onChangeActivePage){
      onChangeActivePage(listOffset, selectActivePage)
    }

  }

  /**
   * activePage이면 백그라운드로 표시를 해준다.
   * @param item
   * @returns {JSX.Element}
   * @constructor
   */
  const PageItem = (item) =>{
    console.log(item.children);
    const itemNumber = item.number
    const activePage = item.activePage
    let active = itemNumber === activePage //disable여부를 정한다.
    return <li key={itemNumber} onClick={handlePaginationChange} className={"page-item"}>
      {active?
        <span className={"page-link"} style={{zIndex:"1", color:"#fff", backgroundColor:"#2b79ca", borderColor:"#2b79ca"}}>{itemNumber}</span>
        :<a href={"#"} className={"page-link"} role={"button"}>{itemNumber}</a>
      }

    </li>
  }

  useEffect(() =>{
    let items = [];
    for(let number = currentPageStart; number <= currentPageEnd; number++){
      items.push(
        <PageItem key={`paging-${number}`} className={"page-item"}>
          {number}
        </PageItem>
      )
    }

    setPageItems(items)
  },activePage, totalPage)



  const currentPageStart = activePage <= 10?1:Math.floor(activePage/10) * 10 +1
  const currentPageEnd = currentPageStart + 9 > totalPage?totalPage:currentPageStart + 9
  return (
    <div>
      <nav>
        <ul>
          <PageItemFirst disabled={currentPageStart ===1} activePage={1} onClick={handlePaginationChange()}/>
          <PageItemPrev  disabled={currentPageStart ===1} activePage={currentPageStart - 1} onClick={handlePaginationChange()}/>
          {pageItems}
          <PageItemNext disabled={currentPageEnd ===Number(totalPage)} activePage={currentPageStart + 10 > totalPage? totalPage:currentPageStart + 10} onClick={handlePaginationChange()}/>
          <PageItemLast  disabled={currentPageEnd ===Number(totalPage)} activePage={totalPage} onClick={handlePaginationChange()}/>
        </ul>
      </nav>
    </div>
  );
};


function PageItemFirst(props) {
  return <li onClick={props.onClick}><span className={"page-link"} disabled={props.disabled}>{"<<"}</span></li>;
}

PageItemFirst.propTypes = {
  onClick: PropTypes.any,
  activePage: PropTypes.number,
  disabled: PropTypes.bool
};

function PageItemPrev(props) {
  return <li onClick={props.onClick}><span className={"page-link"} disabled={props.disabled}>{"<"}</span></li>;
}

PageItemPrev.propTypes = {
  onClick: PropTypes.any,
  activePage: PropTypes.number,
  disabled: PropTypes.bool
};

function PageItemNext(props) {
  return <li onClick={props.onClick}><span className={"page-link"} disabled={props.disabled}>{">"}</span></li>;
}

PageItemNext.propTypes = {
  onClick: PropTypes.any,
  activePage: PropTypes.any,
  disabled: PropTypes.bool
};

function PageItemLast(props) {
  return <li onClick={props.onClick}><span className={"page-link"} disabled={props.disabled}>{">>"}</span></li>;
}

PageItemLast.propTypes = {
  onClick: PropTypes.any,
  disabled: PropTypes.bool
};

export default DPaging;