import React from 'react';

//샘플을 간단한 'tree view' 실제는 라이브러리를 쓰자.
const TreeListSimple = (props) => {
  const handleClick = (item, index) =>{
    // console.log(item)
    // console.log(index)
    const returnItem = {key:item.key,title:item.title}
    // console.log(returnItem)
    if(props.onClick){
      props.onClick(returnItem,index)
    }
  }
  const treeRender = (list) =>{
    return (
      <>
        {list.map((item,itemIndex) =>
          <li key={item.key} onClick={() => handleClick(item,itemIndex)}>
            {item.title}
            {item.children && <ul style={{listStyle:"none"}}>
              {treeRender(item.children)}
            </ul>
            }
          </li>
        )}
      </>
    )
  }

  const treeList = props.treeList
  return (
    <div>
      <ul style={{listStyle:"none"}}>
        {/*{treeRender(treeData)}*/}
        {treeList && treeRender(treeList)}
        {/*<li>*/}
        {/*  첫번째<ul>*/}
        {/*  <li>두번째-1</li>*/}
        {/*  <li>두번째-2</li>*/}
        {/*</ul>*/}
        {/*</li>*/}
      </ul>
    </div>
  );
}


const treeData =[
  {key: '0', title: '여기서',
     children: [
       { key: '0-0', title: 'node 0-0' },
       { key: '0-1', title: 'node 0-1' },
       {
         key: '0-2', title: 'node 0-2',
         children: [
           { key: '0-2-0', title: 'node 0-2-0' },
           { key: '0-2-1', title: 'node 0-2-1' },
           { key: '0-2-2', title: 'node 0-2-2' },
         ],
       },
       { key: '0-3', title: 'node 0-3' },
       { key: '0-4', title: 'node 0-4' },
       { key: '0-5', title: 'node 0-5' },
       { key: '0-6', title: 'node 0-6' },
       { key: '0-7', title: 'node 0-7' },
       { key: '0-8', title: 'node 0-8' },
       {
         key: '0-9', title: 'node 0-9',
         children: [
           { key: '0-9-0', title: 'node 0-9-0' },
           { key: '0-9-1', title: 'node 0-9-1',
             children: [
               { key: '0-9-1-0', title: 'node 0-9-1-0' },
               { key: '0-9-1-1', title: 'node 0-9-1-1' },
               { key: '0-9-1-2', title: 'node 0-9-1-2' },
               { key: '0-9-1-3', title: 'node 0-9-1-3' },
               { key: '0-9-1-4', title: 'node 0-9-1-4' },
             ],
           },
           { key: '0-9-2',
             title: 'node 0-9-2',
             children: [
               { key: '0-9-2-0', title: 'node 0-9-2-0' },
               { key: '0-9-2-1', title: 'node 0-9-2-1' },
             ],
           },
         ],
       },
     ],
  },
  {
    key: '1', title: 'node 1',
    // children: new Array(1000)
    //   .fill(null)
    //   .map((_, index) => ({ title: `auto ${index}`, key: `auto-${index}` })),
    children: [
      {
        key: '1-0', title: 'node 1-0',
        children: [
          { key: '1-0-0', title: 'node 1-0-0' },
          { key: '1-0-1', title: 'node 1-0-1',
            children: [
              { key: '1-0-1-0', title: 'node 1-0-1-0' },
              { key: '1-0-1-1', title: 'node 1-0-1-1' },
            ],
          },
          { key: '1-0-2', title: 'node 1-0-2' },
        ],
      },
    ],
  },
]

export default TreeListSimple;