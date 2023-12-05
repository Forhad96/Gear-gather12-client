import { Link } from "react-router-dom";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../shared/Loader/Loader";
import useAxiosSecure from "../../../hooks/axiosSecureApi/useAxiosSecure";
import swal from "sweetalert";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const MyProducts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: products, isLoading,refetch } = useGetSecure(
    `/userProducts/${user?.email}`,
    "userProducts"
  );

  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleDelete = async (id) => {

    try {
      const willDelete = await swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      if (willDelete) {
        const res = await axiosSecure.delete(`/products/${id}`);
        if (res.data.deletedCount > 0) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          refetch()
        }
        
      } else {
        swal("Your imaginary file is safe!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="overflow-x-auto h-[80vh]">
      <table className="table table-md">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>status</th>
            <th>Up votes</th>
            <th>Edit</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, idx) => {
            return (
              <tr key={product._id}>
                <th>{idx + 1}</th>
                <td>{product?.name}</td>
                <td>{product?.status}</td>
                <td>{product?.upVotes}</td>
                <td>
                  <Link
                    className="btn btn-sm"
                    to={`/dashboard/editProduct/${product?._id}`}
                  >
                    <FaEdit className="h-5 w-5 text-secondary"></FaEdit>
                  </Link>
                </td>

                <td>
                  <Link
                    className="btn btn-sm"
                    to={`/dashboard/productDetails/${product?._id}`}
                  >
                    <FaEye className="h-5 w-5 text-secondary"></FaEye>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-sm"
                    onClick={() => handleDelete(product?._id)}
                  >
                    <FaTrash color="red" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default MyProducts;
