import { Link } from "react-router-dom";
import useGetPublicData from "../../hooks/axiosPublicApi/useGetPublicData";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import VoteButton from "../../shared/VoteButton/VoteButton";
import ReactStarsRating from "react-awesome-stars-rating";
const TrendingProducts = () => {
  const { data: products, refetch } = useGetPublicData(
    `/verifiedProducts?sort=desc`,
    "products"
  );

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
                className="h-60 w-full  rounded-t-lg object-cover"
                src={product?.image_url}
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
                  {product?.rating}
                </span>
                <ReactStarsRating
                  size={18}
                  className="flex me-2"
                  isEdit={false}
                  value={product?.rating}
                ></ReactStarsRating>
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
