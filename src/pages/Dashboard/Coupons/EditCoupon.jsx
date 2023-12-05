import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/axiosSecureApi/useAxiosSecure";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import Loader from "../../../shared/Loader/Loader";

const EditCoupon = () => {
  const goTo = useNavigate();
  const { id } = useParams();
  const [expiryDate, setExpiryDate] = useState("");
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const { data: coupon, isLoading } = useGetSecure(`/coupons/${id}`, "coupon");

  useEffect(() => {
    if (coupon) {
      // Set default values based on the coupon data
      setExpiryDate(coupon?.expiryDate.substring(0, 10));
    }
  }, [coupon]);

  if(isLoading){
    return <Loader></Loader>
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data using FormData
    const formData = new FormData(e.target);
    const couponData = Object.fromEntries(formData);
    console.log(couponData);

    try {

      const response = await axiosSecure.patch(`/coupons/${id}`, couponData);
      if (response.status === 200) {
        toast.success("Update coupon successful");
        goTo("/dashboard/coupons");
      }
    } catch (error) {
      toast.error(error);
      setError(error);
      throw error;
    }
  };

  return (
    <div className="h-[75vh] mt-8">
      <SectionTitle title={"Update Coupon"}></SectionTitle>
      <form
        className="max-w-md mx-auto p-6  bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="couponCode"
            className="block text-sm font-medium text-gray-600"
          >
            Coupon Code
          </label>
          <input
            type="text"
            name="couponCode"
            className="input input-primary input-md w-full"
            placeholder="Enter coupon code"
            defaultValue={coupon?.couponCode}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="expiryDate"
            className="block text-sm font-medium text-gray-600"
          >
            Expiry Date
          </label>
          <input
            type="date"
            name="expireDate"
            className="input input-primary input-md w-full"
            placeholder="Enter expiry date"
            value={expiryDate} // Set the value based on the state
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Coupon Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="input input-primary input-md w-full"
            placeholder="Enter coupon description"
            defaultValue={coupon?.description}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="discountAmount"
            className="block text-sm font-medium text-gray-600"
          >
            Discount Amount
          </label>
          <input
            type="text"
            id="discountAmount"
            name="discountAmount"
            className="input input-primary input-md w-full"
            placeholder="Enter discount amount"
            defaultValue={coupon?.discountAmount}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary text-white font-bold"
          >
            Update Coupon
          </button>
        </div>

        <p className="text-red-500 font-bold mt-2">{error}</p>
      </form>
    </div>
  );
};

export default EditCoupon;
