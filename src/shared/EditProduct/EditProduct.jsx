import { useEffect, useState } from "react";

import TagInput from "../../pages/Dashboard/AddProduct/TagInput.jsx";
import useAuth from "../../hooks/useAuth.jsx";
import imageUpload from "../../utils/imageUpload.js";
import useAxiosSecure from "../../hooks/axiosSecureApi/useAxiosSecure.jsx";
import useGetSecure from "../../hooks/axiosSecureApi/useGetSecure.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";
import toast from "react-hot-toast";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";

const EditProduct = ({ data }) => {
  const { id } = useParams();
  const { user } = useAuth();
  const goTo = useNavigate()
  const axiosSecure = useAxiosSecure();
  const [tags, setTags] = useState([]);
  const {
    data: product,
    isLoading,
    refetch,
  } = useGetSecure(`/products/${id}`, "product");
  // useEffect(() => {
  //   // Set default tags when the component mounts
  //   if (product?.tags) {
  //     setTags([ ...product.tags]);
  //   }
  // }, [product]);
  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const allInputData = new FormData(e.target);
      const {
        name,
        image_url,
        price,
        description,

        category,
        externalLinks,
      } = Object.fromEntries(allInputData);
      const imageUploadResponse = await imageUpload(image_url);

      // update product
      const updateProduct = {
        name,
        image_url: imageUploadResponse,
        price,
        description,
        product_owner: user?.email,
        category,
        tags,
        externalLinks,
      };

      const res = await axiosSecure.patch(
        `/products/${product?._id}`,
        updateProduct
      );
      console.log(res);
      if (res.data.success) {
        toast.success("update successful");
        goTo('/dashboard/myProducts')
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SectionTitle title="Edit Product"></SectionTitle>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl rounded-lg bg-white p-5 shadow-2xl mx-auto mt-8"
      >
        <div className="mb-4">
          <div className="flex justify-between">
            <div>
              <label className="block mb-2 text-xl font-medium text-gray-600">
                Product image <span className="text-red-500">*</span>
              </label>
              <img width={250} src={product?.image_url} alt="" />
            </div>
            <div>
              <div className="w-24 mask mask-squircle">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
              <label className="block text-xl font-medium text-gray-600">
                Product Owner Info <span className="text-red-500">*</span>
              </label>
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
            defaultValue={product?.name}
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
            // defaultValue={product?.image_url}
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
            defaultValue={product?.price}
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
            defaultValue={product?.category}
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
            defaultValue={product?.description}
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
          <TagInput
            tags={tags}
            defaultTags={product?.tags}
            setTags={setTags}
          ></TagInput>
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
            defaultValue={product?.externalLinks}
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

export default EditProduct;
const ownerInfo = {
  ownerName: "John Doe",
  ownerImage: "path/to/image.jpg",
  ownerEmail: "john@example.com",
};
