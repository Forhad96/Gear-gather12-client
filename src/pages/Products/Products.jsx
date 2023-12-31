import { useEffect, useState } from "react";
import Loader from "../../shared/Loader/Loader";
import useAxiosPublic from "../../hooks/axiosPublicApi/useAxiosPublic";
import useGetPublicData from "../../hooks/axiosPublicApi/useGetPublicData";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/axiosSecureApi/useAxiosSecure";
import useCheckRole from "../../hooks/useCheckRole";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import Pagination from "../../shared/Pagination/Pagination";
import VoteButton from "../../shared/VoteButton/VoteButton";
import usePagination from "../../hooks/usePagination";
const Products = () => {

  const goTo = useNavigate();
const { totalPages, currentPage, setCurrentPage, perPage, setPerPage } = usePagination();



  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, refetch } = useGetPublicData(
    `/verifiedProducts/?searchValue=${searchValue}&page=${currentPage}&size=${perPage}`,
    "verifiedProducts",
    searchValue
  );

  
  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (isLoading) {
    return <Loader></Loader>;
  }
  // console.log(userInfo);
  const handleSearch = async (e) => {
    try {
      // const res = await axiosPublic(
      //   `/verifiedProducts/?searchValue=${searchValue}`
      // );
      // setProducts(res.data);

      e.preventDefault();
      const searchText = e.target.search.value;
      setSearchValue(searchText);
      refetch();
      console.log(searchText);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleVote = async (product_id, vote) => {
  //   try {
  //     console.log("click");
  //     // const voteInfo = { action: vote,userId:userInfo?.userId };

  //     if (user?.email && userInfo?.userId) {
  //       const res = await axiosSecure.post(
  //         `/votes/${product_id}/${userInfo.userId}/?action=${vote}`
  //       );
  //       if (res.data.success) {
  //         refetch();
  //       }
  //       console.log(res);
  //     } else {
  //       goTo("/login");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle title={"All Products"}></SectionTitle>
      {/* product search bar */}
      <div className="text-center">
        <form onSubmit={handleSearch} className="join my-10">
          <input
            className="input input-bordered join-item"
            placeholder="Search"
            // onBlur={(e) => setSearchValue(e.target.value)}
            name="search"
          />
          <select className="select select-bordered join-item">
            <option disabled>Filter</option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <div className="indicator">
            {/* <span className="indicator-item badge badge-secondary">new</span> */}
            <button
              type="submit"
              className="btn btn-primary text-white join-item"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* product card */}
      <div className="grid lg:grid-cols-4 gap-5">
        {products?.map((product) => (
          <div key={product?._id} className="card bg-white shadow-xl">
            <figure>
              {/* <img src={product?.image_url} alt={product?.name} /> */}
              <img
                className="h-[210px] w-full object-cover"
                src={product?.image_url}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-between">
                {product?.name}
                <div className="badge badge-primary text-white">
                  {product?.rating}
                </div>
              </h2>

              <p>
                <span className="font-medium">Publish :</span>
                {new Date(product?.created_at).toLocaleString()}
              </p>
              <div className="card-actions flex-1 items-center">
                <span className="font-medium">Tags:</span>
                {product?.tags.slice(0, 3).map((tag, idx) => (
                  <div key={idx} className="badge  badge-outline">
                    {tag}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <VoteButton product={product} refetch={refetch}></VoteButton>
                <button className="bg-primary hover:bg-neutral text-white px-4 py-1 rounded-full">
                  <Link to={`/productDetails/${product?._id}`}>Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        totalPages={totalPages.totalPage}
        currentPage={currentPage}
        refetch={refetch}
        setCurrentPage={setCurrentPage}
      ></Pagination>
      {/* extra components */}
    </div>
  );
};
export default Products;
