import { useState } from "react";
import useGetPublicData from "../../hooks/axiosPublicApi/useGetPublicData";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import VoteButton from "../../shared/VoteButton/VoteButton";

const FeaturedProduct = () => {
    const [sort,setSort] = useState('')
      const [searchValue, setSearchValue] = useState("");
    const {data:products,refetch} = useGetPublicData(`/featuredProducts/?sort=${sort}`,'featuredProducts')

    return (
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Featured Products"></SectionTitle>
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
            <select className="select select-bordered join-item">
              <option disabled>Filter</option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">new</span>
              <button onClick={"handleSearch"} className="btn join-item">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* product card */}
        <div className="grid lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <div key={product?._id} className="card  bg-base-100 shadow-xl">
              <figure>
                {/* <img src={product?.image_url} alt={product?.name} /> */}
                <img
                  src="https://cdn.pixabay.com/photo/2023/11/21/04/12/chicken-8402334_1280.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product?.name}
                  <div className="badge badge-secondary">Featured</div>
                </h2>
                <p className="h-10 overflow-hidden">{product?.description}</p>
                <div className="card-actions items-center">
                  <span className="font-medium">Tags:</span>
                  {product?.tags.map((tag, idx) => (
                    <div key={idx} className="badge badge-outline">
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
<VoteButton product={product}refetch={refetch}></VoteButton>
                  <button
                    className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-1 rounded-full"
                    // To be enabled based on user login status and product ownership
                  >
                    <Link to={`/productDetails/${product?._id}`}>
                      Details
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};
export default FeaturedProduct;