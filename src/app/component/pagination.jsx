import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div  className='text-black mx-auto w-[93%] text-lg'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='mr-5 mt-20 mb-10'
      >
        <FontAwesomeIcon icon={faCaretLeft} className='hover:text-[#e44320] text-2xl' />
        <div>Prv</div>
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={currentPage === page}
          className={`mx-1 py-2 px-4 rounded-md ${
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
       
      >
        <FontAwesomeIcon icon={faCaretRight} className='hover:text-[#e44320] text-2xl' />
        <div>Nxt</div>
      </button>
    </div>
  );
};

export default Pagination;
