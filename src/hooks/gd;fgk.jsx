import { useState } from "react";

const usePagination = () => {
  const totalPages = 23; // total number of pages
  const [currentPage, setCurrentPage] = useState(8); //  initial page
  return {totalPages,currentPage, setCurrentPage}
};
export default usePagination;