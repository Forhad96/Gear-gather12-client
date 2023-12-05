import { useState } from "react";
import useGetPublicData from "../../hooks/axiosPublicApi/useGetPublicData";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import VoteButton from "../../shared/VoteButton/VoteButton";
import ReactStarsRating from "react-awesome-stars-rating";
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
                    className="h-[210px] w-full object-cover"
                    src={product?.image_url}
                    alt=""
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
                      <ReactStarsRating
                        size={20}
                        className="flex me-2"
                        isEdit={false}
                        value={product?.rating}
                      ></ReactStarsRating>
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
