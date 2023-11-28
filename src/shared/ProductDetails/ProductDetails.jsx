import { useParams } from "react-router-dom";
import useGetSecure from "../../hooks/axiosSecureApi/useGetSecure";
import Modal from "../Modal/Modal";
import Report from "../../pages/Report/Report";
import useCheckRole from "../../hooks/useCheckRole";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const {userInfo} = useCheckRole()
  const { id } = useParams();
  const [disabled,setDisable] = useState(false)
  const { data: product } = useGetSecure(`/products/${id}`, "singleProduct");
console.log(userInfo);
useEffect(()=>{
  if (
    userInfo?.role === "admin" ||
    userInfo?.role === "moderator" ||
    product?.product_owner === userInfo?.email
  ) {
    setDisable(true);
  }
},[userInfo,product])
  return (
    <div className="p-4">
      {/* Product Details Section */}
      <div>
        {/* Product Name */}
        <h2 className="text-2xl font-semibold mb-4">{product?.name}</h2>

        {/* Product Image */}
        <img
          src={product?.image_url}
          alt="Product Image"
          className="mb-4 w-96 rounded-lg"
        />

        {/* Product Description */}
        <p className="text-gray-700 mb-4">{product?.description}</p>

        {/* Tags */}
        <div className="mb-4">
          <span className="mr-2">Tags:</span>
          {product?.tags?.map((tag, index) => (
            <span key={index} className="bg-gray-300 px-2 py-1 rounded mr-1">
              {tag}
            </span>
          ))}
        </div>

        {/* External Links */}
        <div className="mb-4">
          <span className="mr-2">External Links:</span>
          {product?.externalLinks?.map((link, index) => (
            <a key={index} href={link} className="underline mr-2">
              {link}
            </a>
          ))}
        </div>

        {/* Upvote Button */}
        <button
          disabled={disabled}
          className="bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded mb-2"
        >
          Upvote
        </button>

        {/* Report Button */}
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="bg-red-500 disabled:bg-red-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded mb-4"
          disabled={disabled}
        >
          Report
        </button>
        <Modal>
          <Report productId={product?._id}></Report>
        </Modal>
        {/* Upvote Count */}
        <div className="text-gray-500 mb-4">Upvotes: {product?.upVotes}</div>
      </div>
    </div>
  );
};

export default ProductDetails;
