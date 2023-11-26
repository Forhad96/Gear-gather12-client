import useAxiosSecure from "../../../hooks/axiosSecureApi/useAxiosSecure";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import useAuth from "../../../hooks/useAuth";

const ManageProducts = () => {
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  const {data} = useGetSecure(`/products/${user?.email}`)
  console.log(data);
  
  // axiosSecure.get(`/products/${user?.email}`)
  // .then(res => res.json())
  // .then(data => console.log(data))
  return (
    <div>
      <p>HELLO I am ManageProducts</p>
    </div>
  );
};
export default ManageProducts;