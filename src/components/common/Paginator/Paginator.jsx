import {useState} from "react";
import "./Paginator.scss";

const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 5}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = []; //5
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className="pages">
        <div className="pages__container">
            {portionNumber > 1 &&
                <button className="toggleBtn" onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>Back</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (
                        <div key={p} onClick={(e) => {
                            onPageChanged(p);
                        }}
                             className={currentPage === p ? "page__selected" : "page"}> {p}
                        </div>)
                })}
            {portionCount > portionNumber &&
                <button className="toggleBtn" onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>Next</button>
            }
        </div>
    </div>
}

export default Paginator;