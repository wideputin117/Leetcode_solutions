import React from "react";
import './pagination.css';

const PaginationButton = ({ currentPage, postsPerPage, paginate, posts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      {pageNumbers.map((pageNumber) => (
        <button key={pageNumber} onClick={() => paginate(pageNumber)} data-page={pageNumber} className={currentPage === pageNumber ? "active" : ""}>
          {pageNumber}
        </button>
      ))}
      <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length}>
        Next
      </button>
    </div>
  );
};

export default PaginationButton;