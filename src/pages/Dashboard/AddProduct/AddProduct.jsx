import { useState } from "react";
import TagInput from "./TagInput";
import useAuth from "../../../hooks/useAuth";
import imageUpload from "../../../utils/imageUpload.js";
import useAxiosSecure from "../../../hooks/axiosSecureApi/useAxiosSecure.jsx";
import toast from "react-hot-toast";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure.jsx";
import { useNavigate } from "react-router-dom";
import Loader from "../../../shared/Loader/Loader.jsx";

const AddProduct = () => {
  const { user } = useAuth();
  const goTo = useNavigate()
  const axiosSecure = useAxiosSecure();
  const [tags, setTags] = useState([]);
const { data: premiumInfo,isLoading } = useGetSecure(`/premium_info`,'premiumInfo');

if(isLoading){
  return <Loader></Loader>
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


      if (premiumInfo.count === 1 && premiumInfo.subscription === "free") {

        toast.error("Without subscription you can add only one product! Please Subscribe");
        goTo('/dashboard/profile')
        return
        
      }
      const imageUploadResponse = await imageUpload(image_url);
      if (imageUploadResponse) {
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

        const res = await axiosSecure.post("/products", product);
        toast.success("Product added successful");
        console.log(res.data);

        e.target.reset()
        setTags([])
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-white max-w-2xl mx-auto p-5 rounded-lg shadow-2xl">
      <form onSubmit={handleSubmit} className="">
        <div className="mb-4">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-24 mask mask-squircle">
              <img src={user?.photoURL} />
            </div>
            <div className="space-y-2">
              <label className="block text-center text-lm  border-b-4 font-medium text-gray-600">
                Product Owner Info <span className="text-red-500">*</span>
              </label>
              <p className="block text-center text-sm font-medium text-gray-600">
                Name: {user?.displayName}
              </p>
              <p className="block text-center text-sm font-medium text-gray-600">
                Email:{user?.email}
              </p>
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
            className="px-4 py-2 btn btn-primary text-white rounded-md  focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
