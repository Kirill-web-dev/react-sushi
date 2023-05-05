import React from "react";
import ReactPaginate from "react-paginate";

import Styles from "./Pagination.module.scss";

const Pagination = ({ currentPage, onChangePage }) => {
    return (
        <ReactPaginate
            className={Styles.root}
            breakLabel="..."
            nextLabel="=>"
            previousLabel="<="
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageCount={5}
            forcePage={currentPage - 1}
        />
    );
};

export default Pagination;
