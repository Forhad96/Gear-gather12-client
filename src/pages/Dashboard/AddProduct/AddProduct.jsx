import { useState } from "react";
import TagInput from "./TagInput";
import useAuth from "../../../hooks/useAuth";
import imageUpload from "../../../utils/imageUpload.js";
import useAxiosSecure from "../../../hooks/axiosSecureApi/useAxiosSecure.jsx";

const AddProduct = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [tags, setTags] = useState([]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const allInputData = new FormData(e.target);
      const {
        name,
        image_url,
        price,
        description,
        product_owner,
        category,
        externalLinks,
      } = Object.fromEntries(allInputData);
      const imageUploadResponse = await imageUpload(image_url);
      if(imageUploadResponse){
        const product = {
          name,
          image_url: imageUploadResponse,
          price,
          description,
          product_owner: user?.email,
          category,
          tags,
          externalLinks,
        };

        const res = await axiosSecure.post('/products',product)
        console.log(res.data);
        console.log(product);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Product Owner Info <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center justify-between">
            <div className="w-24 mask mask-squircle">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <div>
              <p>Name:{user?.displayName}</p>
              <p>Email:{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-600"
          >
            Product Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="productImage"
            className="block text-sm font-medium text-gray-600"
          >
            Product Image <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="image_url"
            required
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productImage"
            className="block text-sm font-medium text-gray-600"
          >
            Product price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            required
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="productImage"
            className="block text-sm font-medium text-gray-600"
          >
            Product Category <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="category"
            required
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            required
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-600"
          >
            Tags
          </label>
          <TagInput tags={tags} setTags={setTags}></TagInput>
        </div>
        <div className="mb-4">
          <label
            htmlFor="externalLinks"
            className="block text-sm font-medium text-gray-600"
          >
            External Links
          </label>
          <input
            type="text"
            id="externalLinks"
            name="externalLinks"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
const ownerInfo = {
  ownerName: "John Doe",
  ownerImage: "path/to/image.jpg",
  ownerEmail: "john@example.com",
};
