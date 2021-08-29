import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";

import { PaginationContext } from "../../context/Pagination.context";

import "./Pagination.style.scss";

export const Pagination = () => {
  const state = useSelector((state) => state.staticContent);

  const orderLength = state.orders.length;
  console.log(orderLength);
  const {
    currentPageNumber,
    nextPage,
    previousPage,
    numberOfItemsPerPage,
    goToPage,
  } = useContext(PaginationContext);
  const [maximumPageNumber] = useState(
    Math.round(orderLength / numberOfItemsPerPage)
  );

  const pageList = Array.from(Array(maximumPageNumber).keys());

  const nextNavigatorStyle =
    maximumPageNumber === currentPageNumber
      ? "deactiveNavigation"
      : "activeNavigation";
  const prevNavigatorStye =
    currentPageNumber === 1 ? "deactiveNavigation" : "activeNavigation";

  return (
    <div className="PaginationWrapper">
      <button
        disabled={currentPageNumber === 1}
        className={prevNavigatorStye}
        onClick={() => previousPage()}
      >
        Back
      </button>
      <div>
        {pageList.map((pageNumber) => {
          pageNumber++;
          const pageNumberStyle =
            pageNumber === currentPageNumber
              ? "activePageNumber"
              : "deactivePageNumber";
          return (
            <button
              disabled={pageNumber === currentPageNumber}
              className={pageNumberStyle}
              onClick={() => goToPage(pageNumber)}
              key={pageNumber}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        disabled={maximumPageNumber === currentPageNumber}
        className={nextNavigatorStyle}
        onClick={() => nextPage()}
      >
        Next
      </button>
    </div>
  );
};
