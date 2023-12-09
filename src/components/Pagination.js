import React from 'react';
import './Pagination.js.css';

function Pagination({ currentPage, totalPages, onNextPage, onPreviousPage }) {
    return (
      <div className="pagination">
        <button onClick={onPreviousPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={onNextPage} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
    );
  }

export default Pagination;