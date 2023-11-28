import { Link } from "react-router-dom";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../shared/Loader/Loader";
import useAxiosSecure from "../../../hooks/axiosSecureApi/useAxiosSecure";
import swal from "sweetalert";

const MyProducts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: products, isLoading,refetch } = useGetSecure(
    `/userProducts/${user?.email}`,
    "userProducts"
  );
  console.log(user?.email);

  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleDelete = async (id) => {
    console.log(id);
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
    <div className="overflow-x-auto">
      <table className="table table-md">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>status</th>
            <th>Up votes</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, idx) => (
            <tr key={product._id}>
              <th>{idx + 1}</th>
              <td>{product?.name}</td>
              <td>{product?.status}</td>
              <td>{product?.upVotes}</td>
              <td>
                {" "}
                <Link
                  className="btn"
                  to={`/dashboard/editProduct/${product?._id}`}
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="btn"
                  onClick={() => handleDelete(product?._id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link
                  className="btn"
                  to={`/dashboard/productDetails/${product?._id}`}
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MyProducts;
