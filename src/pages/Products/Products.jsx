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
const Products = () => {
  const { user } = useAuth();
  const goTo = useNavigate();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { userInfo } = useCheckRole();
  const { data, isLoading, refetch } = useGetPublicData(
    "/verifiedProducts",
    "verifiedProducts",
    searchValue
  );
  console.log(userInfo.userId);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (isLoading) {
    return <Loader></Loader>;
  }
  // console.log(userInfo);
  const handleSearch = async () => {
    try {
      const res = await axiosPublic(
        `/verifiedProducts/?searchValue=${searchValue}`
      );
      setProducts(res.data);
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
        <div className="join my-10">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
                onBlur={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          {/* <select className="select select-bordered join-item">
            <option disabled>Filter</option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select> */}
          <div className="indicator">
            {/* <span className="indicator-item badge badge-secondary">new</span> */}
            <button onClick={handleSearch} className="btn btn-primary text-white join-item">
              Search
            </button>
          </div>
        </div>
      </div>


      {/* product card */}
      <div className="grid lg:grid-cols-4 gap-5">
        {products?.map((product) => (
          <div key={product?._id} className="card bg-white shadow-xl">
            <figure>
              {/* <img src={product?.image_url} alt={product?.name} /> */}
              <img
                src="https://cdn.pixabay.com/photo/2023/11/21/04/12/chicken-8402334_1280.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-between">
                {product?.name}
                <div className="badge badge-primary text-white">NEW</div>
              </h2>
              {/* <p>{product?.description}</p> */}
              <p>
                Publish Date:{new Date(product?.created_at).toLocaleString()}
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
                {/* <button
                  onClick={() => handleVote(product._id, "upvote")}
                  type="button"
                  className="bg-yellow-500 hover:bg-yellow-400 text-white px-2 py-1 rounded-full flex items-center"
                  // To be enabled based on user login status and product ownership
                >
                  <span className="mr-2">{product?.upVotes}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleVote(product._id, "downvote")}
                  className="bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded-full flex items-center ml-2"
                  // To be enabled based on user login status and product ownership
                >
                  <span className="mr-2">{product?.downVotes}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button> */}
<VoteButton product={product} refetch={refetch}></VoteButton>
                <button
                  className="bg-primary hover:bg-neutral text-white px-4 py-1 rounded-full"
          
                >
                  <Link to={`/productDetails/${product?._id}`}>Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


<Pagination></Pagination>
{/* rnsdofdfdlf */}
      <div className="mx-auto my-10 grid max-w-screen-xl gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="mx-2 rounded-xl bg-gray-100" />
        <div className="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
          <div className="flex h-60 flex-col justify-between overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpZGVvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="group-hover:scale-110 h-full w-full object-cover duration-200"
            />
          </div>
          <div className="flex-1 overflow-hidden bg-white px-6 py-8">
            <h5 className="group-hover:text-indigo-600 mb-4 text-xl font-bold">
              Video 6: Learn more about marketing
            </h5>
            <p className="mb-8 text-gray-600">
              Cras ultricies ligula sed magna dictum porta. Praesent sapien
              massa, convallis a pellentesque nec, egestas non nisi.
            </p>
            <div className="flex justify-between">
              <a
                href="#"
                className="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600"
              >
                <span>▷</span>
                <span className="underline">Watch Now</span>
              </a>
              <div className="max-w-full flex-none lg:px-4">
                <h5 className="text-lg font-bold">Video 6</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 rounded-xl bg-gray-100" />
      </div>
      <div className="grid h-screen bg-gray-800 lg:grid-cols-3 justify-center">
        <div />
        <div className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
          <a
            className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
            href="#"
          >
            <img
              className="peer absolute top-0 right-0 h-full w-full object-cover"
              src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b"
              alt="product image"
            />
            <img
              className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="product image"
            />
            <svg
              className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
              />
            </svg>
            {/* <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-white">
                Nike Air MX Super 2500 - Red
              </h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-white">$449</span>
                <span className="text-sm text-white line-through">$699</span>
              </p>
            </div>
            <a
              href="#"
              className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
