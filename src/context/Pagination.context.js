import React, { useState } from "react";

const PaginationContext = React.createContext();

const PaginationContextProvider = ({ children }) => {
    const [currentPageNumber, setCurrentPageNumber] = useState(1)
    const [numberOfItemsPerPage] = useState(5)

    const nextPage = () => {
        setCurrentPageNumber(currentPageNumber + 1)
    }

    const previousPage = () => {
        setCurrentPageNumber(currentPageNumber -1)
    }

    const goToPage = pageNumber => {
        setCurrentPageNumber(pageNumber)
    } 

  return (
    <PaginationContext.Provider
      value={{
        currentPageNumber,
        numberOfItemsPerPage,
        nextPage,
        previousPage,
        goToPage
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export { PaginationContextProvider, PaginationContext };
