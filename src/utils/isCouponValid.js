import isCouponExpired from "./isCouponExpired";

const isCouponValid = (couponCode, coupons) => {
  const coupon = coupons.find((c) => c.couponCode === couponCode);

  if (!coupon) {
    throw new Error("Coupon not found");
  }

  if (isCouponExpired(coupon.expiryDate)) {
    throw new Error("Coupon has expired");
  }

  return true;
};

export default isCouponValid