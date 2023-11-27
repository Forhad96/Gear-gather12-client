import { useState } from "react";
import useAxiosSecure from "../../../hooks/axiosSecureApi/useAxiosSecure";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
const ManageProducts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const goTo = useNavigate();
  const { data: products,refetch } = useGetSecure(`/products`, "products");

  const handleViewDetails = (productId) => {
    // navigate to the product details page
    console.log(`View details for product ${productId}`);
    goTo(`/dashboard/productDetails/${productId}`);
  };

  const handleMakeFeatured = async (productId, featured) => {
    // mark the product as featured
    try {
      console.log(`Make featured for product ${productId}`);
      const updateFeatured = { featured: !featured };
      const res = await axiosSecure.patch(
        `/products/${productId}`,
        updateFeatured
      );
          if(res.data.success){
            refetch()
            toast.success('successfully changed')
          }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccept = async(productId) => {
    // change the product status to Accepted

        try {
    console.log(`Accept product ${productId}`);
 
      const updateStatus = { status: "accepted" };
      const res = await axiosSecure.patch(
        `/products/${productId}`,
        updateStatus
      );
          if(res.data.success){
            refetch()
            toast.success('successfully update status')
          }
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async(productId) => {
    // change the product status to Rejected
    console.log(`Reject product ${productId}`);
         try {

 
      const updateStatus = { status: "rejected" };
      const res = await axiosSecure.patch(
        `/products/${productId}`,
        updateStatus
      );
          if(res.data.success){
            refetch()
            toast.success('successfully update status')
          }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-md table-zebra">
        <thead>
          <tr>
            <th className="border border-gray-300">#</th>
            <th className="border border-gray-300">Product Name</th>
            <th className="border border-gray-300">Status</th>
            <th className="border border-gray-300">Featured Status</th>
            <th className="border border-gray-300 text-center">
              View Details Button
            </th>
            <th className="border border-gray-300 text-center">
              Make Featured Button
            </th>
            <th className="border border-gray-300 text-center">
              Accept Button
            </th>
            <th className="border border-gray-300 text-center">
              Reject Button
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr className="hover" key={product._id}>
              <td className="border border-gray-300">#</td>
              <td className="border border-gray-300">{product.name}</td>
              <td
                className={`border border-gray-300 ${
                  product?.status === "accepted" && "text-green-500"
                }`}
              >
                {product?.status}
              </td>
              <td className="border border-gray-300">
                {product?.featured === true ? "YES" : "NO"}
              </td>

              <td className="border border-gray-300 text-center">
                <button
                  onClick={() => handleViewDetails(product?._id)}
                  className="bg-blue-500 text-white py-1 px-2 rounded-sm hover:bg-blue-600"
                >
                  View Details
                </button>
              </td>
              <td className="border border-gray-300 text-center">
                <button
                  onClick={() =>
                    handleMakeFeatured(product?._id, product?.featured)
                  }
                  className={`${
                    product?.featured ? "bg-green-500" : "bg-yellow-500"
                  } text-white py-1 px-2 rounded-sm hover:bg-green-600`}
                >
                  {product?.featured ? "Make Featureless" : "Make Featured"}
                </button>
              </td>
              <td className="border border-gray-300 text-center">
                <button
                  onClick={() => handleAccept(product?._id)}
                  className="bg-green-500 disabled:cursor-not-allowed disabled:bg-green-200 disabled:text-gray-500 text-white px-2 py-1 rounded-sm hover:bg-green-600"
                  disabled={product?.status === "accepted"}
                >
                  {product?.status === "accepted" ? "Accepted" : "Accept"}
                </button>
              </td>

              <td className="border border-gray-300 text-center">
                <button
                  onClick={() => handleReject(product?._id)}
                  className="bg-red-500 disabled:cursor-not-allowed disabled:bg-red-200 disabled:text-gray-500 text-white px-2 py-1 rounded-sm hover:bg-red-600"
                  disabled={product?.status === "rejected"}
                >
                  {product?.status === "rejected" ? "Rejected" : "Reject"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ManageProducts;
