import { Link } from "react-router-dom";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../shared/Loader/Loader";

const MyProducts = () => {
  const {user} = useAuth()
  const {data:products,isLoading} = useGetSecure(`/userProducts/${user?.email}`,'userProducts')
  if(isLoading){
    return <Loader></Loader>
  }
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
              <td>Delete</td>
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
