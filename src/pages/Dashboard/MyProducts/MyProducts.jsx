import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import useAuth from "../../../hooks/useAuth";

const MyProducts = () => {
  const {user} = useAuth()
  const {data:products} = useGetSecure(`/products/${user?.email}`,'userProducts')
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
            <th>view</th>
           
          </tr>
        </thead>
        <tbody>
          {products?.map((product, idx) => (
            <tr key={product._id}>
              <th>{idx + 1}</th>
              <td>{product?.name}</td>
              <td>{product?.status}</td>
              <td>{product?.upVotes}</td>
              <td>Edit</td>
              <td>Delete</td>
              <td>View</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MyProducts;
