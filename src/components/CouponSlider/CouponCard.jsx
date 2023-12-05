const CouponCard = ({coupon}) => {
    return (
      <div className="container absolute inset-0  bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
        <div className="max-w-xl absolute inset-20 mx-auto">
          <div className="text-3xl text-warning font-bold mb-4">Special Offer!</div>
          <div className="text-lg mb-4">
            {/* Get <span className="text-yellow-400 font-bold">25% OFF</span> your
            next purchase! */}
            {coupon?.description}
          </div>
          <div className="text-base mb-4">Use coupon code:</div>
          <div className="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
            <span className="text-2xl font-semibold">{coupon?.couponCode}</span>
            <button className="bg-blue-800 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Copy
            </button>
          </div>
          <div className="text-sm mt-4">
            <p>
              Valid until{" "}
              <span className="font-semibold">December 31, 2023</span>
            </p>
            <p>Terms and conditions apply.</p>
          </div>
        </div>
      </div>
    );
};

import PropTypes from 'prop-types';

CouponCard.propTypes = {
    coupon: PropTypes.object.isRequired,
};
export default CouponCard;