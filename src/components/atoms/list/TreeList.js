import React from 'react';

function TreeList(props) {
  return (
    <div>
      <ul style={{listStyle:"none"}}>
        <li>
          첫번째<ul>
          <li>두번째-1</li>
          <li>두번째-2</li>
        </ul>
        </li>
      </ul>
    </div>
  );
}

export default TreeList;