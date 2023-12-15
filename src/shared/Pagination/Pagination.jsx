// import { useState } from "react";

const Pagination = ({totalPages,currentPage,setCurrentPage,refetch}) => {


  const generatePageLinks = () => {
    const pageLinks = [];

    // Add the first page link
    pageLinks.push(
      <li key={1}>
        <a
          href="#"
          className="px-2 text-lg font-medium sm:px-3 hover:text-blue-600"
        >
          1
        </a>
      </li>
    );

    // Add "..." if there are more than 3 pages
    if (currentPage > 3) {
      pageLinks.push(
        <li key="skip1">
          <span
            className="px-2 text-lg font-medium text-gray-400 sm:px-3"
            aria-hidden="true"
          >
            ...
          </span>
          <span className="sr-only">Skipping Pages</span>
        </li>
      );
    }

    // Add previous and next page links
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        const activeClass =
          i === currentPage ? "border-b-2 border-blue-600" : "";
        pageLinks.push(
          <li key={i}>
            <a
              href="#"
              className={`px-2 text-lg font-medium sm:px-3 hover:text-blue-600 ${activeClass}`}
              onClick={() => changePage(i)}
            >
              {i}
            </a>
          </li>
        );
      }
    }

    // Add "..." if there are more than 3 pages
    if (currentPage < totalPages - 2) {
      pageLinks.push(
        <li key="skip2">
          <span
            className="px-2 text-lg font-medium text-gray-400 sm:px-3"
            aria-hidden="true"
          >
            ...
          </span>
          <span className="sr-only">Skipping Pages</span>
        </li>
      );
    }

    // Add the last page link
    pageLinks.push(
      <li key={totalPages}>
        <a
          href="#"
          className="px-2 text-lg font-medium sm:px-3 hover:text-blue-600"
          onClick={() => changePage(totalPages)}
        >
          {totalPages}
        </a>
      </li>
    );

    return pageLinks;
  };

  const changePage = (newPage) => {
    setCurrentPage(newPage);
    refetch()
    // Add logic to fetch and display content for the new page
  };

  return (
    <nav
      aria-label="Page Navigation"
      className="mx-auto my-10 flex max-w-md justify-between space-x-2 rounded-md py-2"
    >
      <a
        href="#"
        className="flex items-center space-x-1 font-medium hover:text-blue-600"
        onClick={(e) => {
          e.preventDefault();
          changePage(currentPage - 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
        <span>prev</span>
      </a>
      <ul className="flex">{generatePageLinks()}</ul>
      <a
        href="#"
        className="flex items-center space-x-1 font-medium hover:text-blue-600"
        onClick={(e) => {
          e.preventDefault();
          changePage(currentPage + 1);
        }}
      >
        <span>next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </nav>
  );
};

export default Pagination;
