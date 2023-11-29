
import useAxiosSecure from "../../../hooks/axiosSecureApi/useAxiosSecure";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import { Link } from "react-router-dom";
import Loader from "../../../shared/Loader/Loader";
import swal from "sweetalert";
const ManageReports = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: products,
    refetch,
    isLoading,
  } = useGetSecure("/allReportedProducts", "allReportedProducts");

  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleDelete = async (productId) => {



try {
  const willDelete = await swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  });
  if (willDelete) {
    const res = await axiosSecure.delete(`/allReportedProduct/${productId}`);
    if (res.data.deletedCount > 0) {
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
      refetch();
    }
  } else {
    swal("Your imaginary file is safe!");
  }
} catch (error) {
  console.log(error);
}








  };
  const handleViewDetails = () => {};

  return (
    <div className="overflow-x-auto h-[80vh]">
      <table className="table table-md table-zebra">
        <thead>
          <tr>
            <th className="border border-gray-300">#</th>
            <th className="border border-gray-300">Product Name</th>
            <th className="border border-gray-300 text-center">View Report</th>

            <th className="border border-gray-300 text-center">
              View Products Details
            </th>
            <th className="border border-gray-300 text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, idx) => (
            <tr className="hover" key={product._id}>
              <td className="border border-gray-300">{idx + 1}</td>
              <td className="border border-gray-300">{product.name}</td>
              <td className="border border-gray-300 text-center">
                <button
                  onClick={() => handleViewDetails(product?._id)}
                  className="bg-red-500 text-white py-1 px-2 rounded-sm hover:bg-red-600"
                >
                  <Link to={`/dashboard/viewReports/${product?._id}`}>
                    View Reports
                  </Link>
                </button>
              </td>

              <td className="border border-gray-300 text-center">
                <button
                  onClick={() => handleViewDetails(product?._id)}
                  className="bg-blue-500 text-white py-1 px-2 rounded-sm hover:bg-blue-600"
                >
                  <Link to={`/dashboard/productDetails/${product?._id}`}>
                    View Details
                  </Link>
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

export default ManageReports;
