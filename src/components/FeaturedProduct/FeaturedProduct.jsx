import { useState } from "react";
import useGetPublicData from "../../hooks/axiosPublicApi/useGetPublicData";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import VoteButton from "../../shared/VoteButton/VoteButton";

const FeaturedProduct = () => {
  const [sort, setSort] = useState("");
  const { data: products, refetch } = useGetPublicData(
    `/featuredProducts/?sort=${sort}`,
    "featuredProducts"
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* <SectionTitle title="Featured Products"></SectionTitle> */}
      {/* product card */}
      {/* <div className="grid lg:grid-cols-4 gap-5">
        {products?.map((product) => (
          <div key={product?._id} className="card  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://cdn.pixabay.com/photo/2023/11/21/04/12/chicken-8402334_1280.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-between">
                {product?.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
            
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
       

                <button
                  className="bg-primary hover:bg-neutral text-white px-4 py-1 rounded-full"

                >
                  <Link to={`/productDetails/${product?._id}`}>Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <section className="bg-white py-5 text-gray-700 sm:py-16 lg:py-10">
        <SectionTitle title="Featured Products"></SectionTitle>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-4 lg:gap-8">
            {products?.map((product) => (
              <article key={product?._id} className="relative">
                <figure>
                  {/* <img src={product?.image_url} alt={product?.name} /> */}
                  <img
                    src="https://cdn.pixabay.com/photo/2015/01/20/13/13/samsung-605439_1280.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="absolute top-0 m-1 rounded-full bg-white">
                  <p className="text-[10px] rounded-full bg-primary p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
                    Featured
                  </p>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div className="">
                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      <a href="#" title="" className="cursor-pointer">
                        {product?.name}
                        <span className="absolute" aria-hidden="true" />
                      </a>
                    </h3>
                    <div className="mt-2 flex items-center">
                      <svg
                        className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          className=""
                        />
                      </svg>
                      <svg
                        className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          className=""
                        />
                      </svg>
                      <svg
                        className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          className=""
                        />
                      </svg>
                      <svg
                        className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          className=""
                        />
                      </svg>
                      <svg
                        className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          className=""
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-right">
                    <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
                      {" "}
                      $79.00{" "}
                    </del>
                    <p className="text-xs font-normal sm:text-sm md:text-base">
                      $99.00
                    </p>
                  </div>
                </div>

                <div className="card-actions mt-2 flex-nowrap overflow-hidden items-center">
                  <span className="font-medium">Tags:</span>
                  {product?.tags?.slice(0, 3).map((tag, idx) => (
                    <div key={idx} className="badge">
                      {tag}
                    </div>
                  ))}
                </div>
                <p className="mt-2">
                  posted date:{new Date(product?.created_at).toLocaleString()}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <VoteButton product={product} refetch={refetch}></VoteButton>
                  <button
                    className="bg-primary hover:bg-neutral text-white px-4 py-1 rounded-full"
                    // To be enabled based on user login status and product ownership
                  >
                    <Link to={`/productDetails/${product?._id}`}>Details</Link>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default FeaturedProduct;
