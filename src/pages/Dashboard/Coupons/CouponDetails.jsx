import { Link, useParams } from "react-router-dom";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import Loader from "../../../shared/Loader/Loader";

const CouponDetails = () => {
    const {id} =useParams()
    const {data:coupon,isLoading} = useGetSecure(`/coupons/${id}`,'coupon')
    if(isLoading){
        return <Loader></Loader>
    }

    return (
      <div className="h-[80vh]">
        <div className="card items-center justify-center mt-5 max-w-2xl mx-auto bg-primary text-white">
          <div className="card-body">
            <h2 className="card-title">
              Coupon code:{" "}
              <span className="text-warning">{coupon?.couponCode}</span>
            </h2>
            <h2 className="card-text">
              Expiry Date: {new Date(coupon?.expiryDate).toLocaleString()}
            </h2>
            <p className="card-text">Description:{coupon?.description}</p>
            <p className="card-text">
              Discount Amount:${coupon?.discountAmount}
            </p>
            <div className="card-actions justify-center">
              <Link to="/dashboard/coupons" className="btn btn-wide">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};
export default CouponDetails;