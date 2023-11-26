
import { useState } from "react";
import TagInput from "./TagInput";


const AddProduct = () => {
const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    //   const [tags, setTags] = useState([]);
    e.preventDefault();

    // Validate the form fields here if needed

    // Create the product object
    const product = {
      productName,
      productImage,
      description,
      ownerInfo,
      tags,
      externalLinks,
    };

    // // Pass the product object to the onSubmit callback
    // onSubmit(product);
  };

  return (
    <div>
      <div className="mb-4">
        <label
          htmlFor="tags"
          className="block text-sm font-medium text-gray-600"
        >
          Tags
        </label>

        <TagInput tags={tags} setTags={setTags}></TagInput>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
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
            type="text"
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
            type="text"
            name="price"
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
          <label className="block text-sm font-medium text-gray-600">
            Product Owner Info <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            readOnly
            className="mt-1 p-2 w-full border rounded-md bg-gray-100"
          />
          <input
            type="text"
            readOnly
            className="mt-1 p-2 w-full border rounded-md bg-gray-100"
          />
          <input
            type="email"
            readOnly
            className="mt-1 p-2 w-full border rounded-md bg-gray-100"
          />
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