import { Link, NavLink } from "react-router-dom";
const Coupons = () => {
  return (
    <div>
      <Link to="/dashboard/addCoupon" className="btn">Add coupon</Link>
      <p>HELLO I AM Coupons</p>
    </div>
  );
};
export default Coupons;
