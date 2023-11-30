import { Link } from "react-router-dom";
import useGetPublicData from "../../hooks/axiosPublicApi/useGetPublicData";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import VoteButton from "../../shared/VoteButton/VoteButton";

const TrendingProducts = () => {
    const { data: products,refetch } = useGetPublicData(`/verifiedProducts?sort=asc`,"products");

    return (
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Trending product"></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products?.slice(0, 6).map((product) => (
            <div
              key={product?._id}
              className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md"
            >
              <a href="#">
                <img
                  className="h-60 rounded-t-lg object-cover"
                  src="https://media.istockphoto.com/id/1281696939/photo/blue-armchair-isolated-on-a-white.webp?s=1024x1024&w=is&k=20&c=0uacw2YjpVkx6pMbEgDQaG7Ahk5Dt-4p9TNHb-1bdhs="
                  alt="product image"
                />
              </a>
              <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-primary text-center text-sm text-white">
                Trending
              </span>
              <div className="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                    {product?.name}
                  </h5>
                </a>
                <div className="mt-2.5 mb-5 flex items-center">
                  <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    5.0
                  </span>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      ${product?.price}
                    </span>
                    <span className="text-sm text-slate-900 line-through">
                      20%
                    </span>
                  </p>
                  {/* <a
                    href="#"
                    className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Details
                  </a> */}
                  <VoteButton product={product} refetch={refetch}></VoteButton>
                </div>
              </div>

              <Link to={`/productDetails/${product?._id}`}>
                <button className="bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  Details
                </button>
              </Link>
            </div>
          ))}
        </div>

        <Link to="/products" className="flex items-center justify-center">
          <button className="bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral focus:outline-none focus:ring-4 focus:ring-blue-300">
            Show All
          </button>
        </Link>
      </div>
    );
};
export default TrendingProducts;