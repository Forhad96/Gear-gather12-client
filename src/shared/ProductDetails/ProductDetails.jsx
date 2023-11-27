import { useParams } from "react-router-dom";
import useGetSecure from "../../hooks/axiosSecureApi/useGetSecure";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product } = useGetSecure(`/products/${id}`, "singleProduct");

  console.log(product);
  console.log(id);
  // console.log(data);
  // Static product details
  //   const product = {
  //     name: "Sample Product",
  //     image:
  //       "https://cdn.pixabay.com/photo/2016/01/01/13/56/vintage-tv-1116587_1280.jpg",
  //     description: "This is a sample product description.",
  //     tags: ["Tag1", "Tag2", "Tag3"],
  //     externalLinks: ["https://link1.com", "https://link2.com"],
  //     upvoteCount: 42,
  //   };

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
          {/* {product?.externalLinks?.map((link, index) => (
            <a key={index} href={link} className="underline mr-2">
              {link}
            </a>
          ))} */}
        </div>

        {/* Upvote Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
          Upvote
        </button>

        {/* Report Button */}
        <button className="bg-red-500 text-white px-4 py-2 rounded mb-4">
          Report
        </button>

        {/* Upvote Count */}
        <div className="text-gray-500 mb-4">Upvotes: {product?.upVotes}</div>
      </div>
    </div>
  );
};

export default ProductDetails;
