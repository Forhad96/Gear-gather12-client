import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import Loader from "../../../shared/Loader/Loader";
import useAxiosSecure from "../../../hooks/axiosSecureApi/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
const Coupons = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: coupons,
    isLoading,
    refetch,
  } = useGetSecure(`/coupons`, "coupons");
  console.log(user?.email);

  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log(coupons);

  //  {
  //       status: true,
  //       _id: '65681ce1e119da623ec0f1a7',
  //       couponCode: 'hurry',
  //       expiryDate: '2023-12-08T00:00:00.000Z',
  //       description: 'hurry up',
  //       discountAmount: 50,
  //       __v: 0
  //     }
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
      <Link to="/dashboard/addCoupon" className="btn">
        Add coupon
      </Link>
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
                  <td>{coupon?.expiryDate}</td>
                  <td>{coupon?.description}</td>
                  <td>{coupon?.discountAmount}</td>
                  <td>{coupon?.status}</td>
                  <td>
                    <Link
                      className="btn btn-sm"
                      to={`/dashboard/editCoupon/${coupon?._id}`}
                    >
                      <FaEdit className="h-5 w-5 text-secondary"></FaEdit>
                    </Link>
                  </td>

                  <td>
                    <Link
                      className="btn btn-sm"
                      to={`/dashboard/CouponDetails/${coupon?._id}`}
                    >
                      <FaEye className="h-5 w-5 text-secondary"></FaEye>
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
