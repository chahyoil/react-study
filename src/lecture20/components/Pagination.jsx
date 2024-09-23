import { sliceArrayByLimit } from "../lib/utils";
import { useState, useEffect } from "react";

import styles from './Pagination.module.css';

export default function Pagination({page, totalPage, setPage}) {
    const [currentPageArr, setCurrentPageArr] = useState([]);
    const [totalPageArr, setTotalPageArr] = useState([]);
    const limit = 3;
    
    function handlePage(page) {
        if(page < 1) {
            setPage(1);
        } else{
            setPage(page);
        }
    }

    // totalPage로 현재페이지 배열을 구성
    useEffect(() => {
        if (totalPage <= 0 || isNaN(totalPage)) {
            setTotalPageArr([]);
            setCurrentPageArr([]);
            return;
        }


        const pageGroup = sliceArrayByLimit(totalPage, limit);
        setTotalPageArr(pageGroup);
        setCurrentPageArr(pageGroup[page - 1]);
    }, [totalPage]);

    // totalPageArr 변경시 현재페이지 배열 변경
    useEffect(() => {
        if(page % limit === 1) {
            setCurrentPageArr(totalPageArr[Math.floor(page / limit)]);
        } else if(page % limit === 0) {
            setCurrentPageArr(totalPageArr[Math.floor(page / limit) - 1]);
        }
    }, [page, currentPageArr, totalPageArr]);

    return (
        <div className={styles.pagination}>
            <button 
                onClick={() => handlePage(page - 1)}
                disabled={page === 1 || isNaN(totalPage) || totalPage <= 0}
            >
                Prev
            </button>
            {currentPageArr?.map((index) => (
                <button 
                    key={index}
                    onClick={() => setPage(index + 1)} 
                    className={page === index + 1 ? styles.active : ''}
                >
                    {index + 1}
                </button>
            ))}
            <button 
                onClick={() => handlePage(page + 1)}
                disabled={page === totalPage || isNaN(totalPage) || totalPage <= 0}
            >
                Next
            </button>
        </div>
    )
}
