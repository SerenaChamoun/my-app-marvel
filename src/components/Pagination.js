import React from "react";

const Pagination = ({ setPage, setIsLoading }) => {
  const paginationBar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="pagination">
      {paginationBar.map((pageNumber, index) => {
        return (
          <span>
            <button
              onClick={(event) => {
                setIsLoading(true);
                setPage(pageNumber);
              }}
            >
              {pageNumber}
            </button>
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
