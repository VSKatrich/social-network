import { useState } from 'react';
import styleObj from './paginator.module.css';

const Paginator = ({ pageSize, totalItemsCount, onClickChange, currentPage, portionSize = 20 }) => {
  const pages = [];
  const pagesCount = Math.ceil(totalItemsCount / pageSize)
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionCount = (portionNumber - 1) * portionSize + 1
  const rightPortionCount = portionNumber * portionSize

  return (
    <div >
      {portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}> prev </button>}


      {pages
        .filter(p => p >= leftPortionCount && p <= rightPortionCount)
        .map(p => {
          return <span key={p}
            className={currentPage === p && styleObj.selectedPage}
            onClick={(e) => { onClickChange(p) }}
          > {p} </span>
        })}

      {portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}> next </button>}

    </div>
  )
};

export default Paginator;