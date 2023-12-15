import { useState } from "react";
import useGetPublicData from "./axiosPublicApi/useGetPublicData";
import Loader from "../shared/Loader/Loader";

const usePagination = () => {
  // const [ totalPages,isLoading] = useGetPublicData(`/pageCounts/${"verifiesProducts"}?size=${2}`);
  const [currentPage, setCurrentPage] = useState(1); //  initial page
  const [perPage,setPerPage]=  useState (4)
  const { data: totalPages, isLoading } = useGetPublicData(
    `/pageCounts/verifiedProducts?size=${perPage}`,
    "pageCount"
  );
  if (isLoading) {
    return <Loader />;
  }

  return { totalPages, currentPage, setCurrentPage,perPage,setPerPage};
};
export default usePagination;