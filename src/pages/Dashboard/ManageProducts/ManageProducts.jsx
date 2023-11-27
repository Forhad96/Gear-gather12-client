import { useState } from "react";
import useAxiosSecure from "../../../hooks/axiosSecureApi/useAxiosSecure";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ManageProducts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const goTo = useNavigate();
  const { data: products } = useGetSecure(`/products`, "products");

  const handleViewDetails = (productId) => {
    // Add logic to navigate to the product details page
    console.log(`View details for product ${productId}`);
    goTo(`/dashboard/productDetails/${productId}`);
  };

  const handleMakeFeatured = (productId) => {
    // Add logic to mark the product as featured
    console.log(`Make featured for product ${productId}`);
  };

  const handleAccept = (productId) => {
    // Add logic to change the product status to Accepted
    console.log(`Accept product ${productId}`);
  };

  const handleReject = (productId) => {
    // Add logic to change the product status to Rejected
    console.log(`Reject product ${productId}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
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
              <td className="border border-gray-300">{product?.status}</td>
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
                  onClick={() => handleMakeFeatured(product?._id)}
                  className={`${
                    product.status === "Featured"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  } text-white py-1 px-2 rounded-sm hover:bg-green-600`}
                >
                  Make Featured
                </button>
              </td>
              <td className="border border-gray-300 text-center">
                <button
                  onClick={() => handleAccept(product?._id)}
                  className="bg-green-500 text-white px-2 py-1 rounded-sm hover:bg-green-600"
                  disabled={product.status === "Accepted"}
                >
                  Accept
                </button>
              </td>

              <td className="border border-gray-300 text-center">
                <button
                  onClick={() => handleReject(product?._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-sm hover:bg-red-600"
                  disabled={product.status === "Rejected"}
                >
                  Reject
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
