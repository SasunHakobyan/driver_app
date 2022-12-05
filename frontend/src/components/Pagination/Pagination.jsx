import React from 'react';
import PaginationItem from "./PaginationItem";

import classes from './Pagination.module.css';

const Pagination = (props) => {

    const setPage = (pageNumber) => {
        props.setCurrentPage(pageNumber);
    }

    const pagItemsCount = Math.ceil(Number(props.driversCount) / Number(props.pageLimit));
    const pagItems = [];

    for (let i = 0; i < pagItemsCount; i++) {
        const pagItem = <PaginationItem key={i} setPage={setPage} currentPage={props.currentPage} pageNumber={i+1}/>
        pagItems.push(pagItem);
    }

    return (
        <div className={classes.pagination}>
            {pagItems}
        </div>
    );
};

export default Pagination;