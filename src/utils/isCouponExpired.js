const isCouponExpired = (expiryDate) => {
  const couponExpiryDate = new Date(expiryDate);
  const currentDate = new Date();
  return currentDate > couponExpiryDate;
};

export default isCouponExpired;
