import useGetSecure from "../../hooks/axiosSecureApi/useGetSecure";
import Loader from "../../shared/Loader/Loader";

const Products = () => {
    const { data: products,isLoading } = useGetSecure("/verifiedProducts",'verifiedProducts');
    console.log(products);
    if(isLoading){
        return <Loader></Loader>
    }
    return (
      <div>
        <p>All Products:{products.length}</p>

        <div className="grid lg:grid-cols-4 gap-5">
          {products?.map((product) => (
            <div key={product._id} className="card  bg-base-100 shadow-xl">
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
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{product?.description}</p>
                <div className="card-actions items-center">
                  <span className="font-medium">Tags:</span>
                  {product?.tags.map((tag, idx) => (
                    <div key={idx} className="badge badge-outline">
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded-full flex items-center"
                      disabled // To be enabled based on user login status and product ownership
                    >
                      <span className="mr-2">10</span>
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
                      className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-full flex items-center ml-2"
                      disabled // To be enabled based on user login status and product ownership
                    >
                      <span className="mr-2">5</span>
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
                    </button>
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-full"
                    disabled // To be enabled based on user login status and product ownership
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};
export default Products;