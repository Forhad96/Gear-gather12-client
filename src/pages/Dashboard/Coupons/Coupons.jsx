import { FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";
import { Link, } from "react-router-dom";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import Loader from "../../../shared/Loader/Loader";
import useAxiosSecure from "../../../hooks/axiosSecureApi/useAxiosSecure";
import swal from "sweetalert";
const Coupons = () => {

  const axiosSecure = useAxiosSecure();
  const {
    data: coupons,
    isLoading,
    refetch,
  } = useGetSecure(`/coupons`, "coupons");
  // console.log(user?.email);

  if (isLoading  ) {
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
        const res = await axiosSecure.delete(`/coupons/${id}`);
        if (res.status === 204) {
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
  return (
    <div>
      <div className="card-actions justify-end">
   
        <Link to="/dashboard/addCoupon" className="btn btn-primary text-white">
          <FaPlus className="h-5 w-5 text-white"></FaPlus>
          Add coupon
        </Link>
      </div>
      <div className="overflow-x-auto h-[80vh]">
        <table className="table table-md">
          <thead>
            <tr>
              <th>#</th>
              <th>Coupon code</th>
              <th>ExpiryDate</th>
              <th>Description</th>
              <th>DiscountAmount</th>
              <th>Status</th>
              <th>Edit</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {coupons?.map((coupon, idx) => {
              return (
                <tr key={coupon._id}>
                  <th>{idx + 1}</th>
                  <td>{coupon?.couponCode}</td>
                  <td>{new Date(coupon?.expiryDate).toLocaleString()}</td>
                  <td>{coupon?.description}</td>
                  {/* {new Date(product?.created_at).toLocaleString()} */}
                  <td>{coupon?.discountAmount}</td>
                  <td className="text-success">
                    {coupon?.status ? "Active" : "Expired"}
                  </td>
                  <td>
                    <Link
                      className="btn btn-sm"
                      to={`/dashboard/editCoupon/${coupon?._id}`}
                    >
                      <FaEdit className="h-5 w-5 text-primary"></FaEdit>
                    </Link>
                  </td>

                  <td>
                    <Link
                      className="btn btn-sm"
                      to={`/dashboard/CouponDetails/${coupon?._id}`}
                    >
                      <FaEye className="h-5 w-5 text-primary"></FaEye>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm"
                      onClick={() => handleDelete(coupon?._id)}
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
    </div>
  );
};
export default Coupons;
