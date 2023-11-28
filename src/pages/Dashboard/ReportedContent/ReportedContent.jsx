import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/axiosSecureApi/useAxiosSecure";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import { Link } from "react-router-dom";
const ReportedContent = () => {
    const axiosSecure = useAxiosSecure()
    const {data:products} = useGetSecure('/allReportedProducts','allReportedProducts')

    const handleDelete =()=>{

    }
    const handleViewDetails =()=>{

    }

    return (
      <div className="overflow-x-auto">
        <table className="table table-md table-zebra">
          <thead>
            <tr>
              <th className="border border-gray-300">#</th>
              <th className="border border-gray-300">Product Name</th>
              <th className="border border-gray-300 text-center">
                View Report{" "}
              </th>

              <th className="border border-gray-300 text-center">
                View Products Details
              </th>
              <th className="border border-gray-300 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr className="hover" key={product._id}>
                <td className="border border-gray-300">#</td>
                <td className="border border-gray-300">{product.name}</td>
                <td className="border border-gray-300 text-center">
                  <button
                    onClick={() => handleViewDetails(product?._id)}
                    className="bg-red-500 text-white py-1 px-2 rounded-sm hover:bg-blue-600"
                  >
                    View Reports
                  </button>
                </td>

                <td className="border border-gray-300 text-center">
                  <button
                    onClick={() => handleViewDetails(product?._id)}
                    className="bg-blue-500 text-white py-1 px-2 rounded-sm hover:bg-blue-600"
                  >
                    <Link to={`/dashboard/productDetails/${product?._id}`}>View Details</Link>
                  </button>
                </td>

                <td className="border border-gray-300 text-center">
                  <button
                    onClick={() => handleDelete(product?._id)}
                    className="bg-red-500 disabled:cursor-not-allowed disabled:bg-red-200 disabled:text-gray-500 text-white px-2 py-1 rounded-sm hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ReportedContent;