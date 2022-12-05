import React from 'react';
import classes from './Pagination.module.css';

const PaginationItem = (props) => {
    const isActive = props.currentPage === props.pageNumber;

    return (
        <button className={isActive ? classes.active : ''} onClick={() => props.setPage(props.pageNumber)}>{props.pageNumber}</button>
    );
};

export default PaginationItem;