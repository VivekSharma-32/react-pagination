import React from "react";

const Pagination = ({
  noOfPages,
  currentPage,
  goToNextPage,
  goToPrevPage,
  handlePageChange,
}) => {
  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 0}
        className="pagination-number"
        onClick={() => goToPrevPage()}
      >
        ◀
      </button>
      {[...Array(noOfPages).keys()]?.map((item, index) => (
        <div key={index}>
          <button
            className={
              "pagination-number" + (currentPage === item ? " active" : "")
            }
            onClick={() => handlePageChange(item)}
          >
            {item + 1}
          </button>
        </div>
      ))}
      <button
        disabled={currentPage === noOfPages - 1}
        className="pagination-number"
        onClick={() => goToNextPage()}
      >
        ▶
      </button>
    </div>
  );
};

export default Pagination;
