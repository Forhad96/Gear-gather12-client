import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import ReactStarsRating from "react-awesome-stars-rating";
import useAxiosSecure from "../../hooks/axiosSecureApi/useAxiosSecure";
import toast from "react-hot-toast";
const AddReview = ({ productId, refetch }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [rating, setRating] = useState(0);
  // {author, email;productId;createdAt;rating;profession;}

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const comment = e.target.comment.value;
      const review = {
        author: user?.displayName,
        email: user?.email,
        productId,
        comment,
        rating,
      };
      // sent ratings to store database
      const res = await axiosSecure.post("/reviews", review);
      if (res.data.success) {
        toast.success("successfully posted review");
        refetch()
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-w-md px-3 sm:mx-auto">
        <div className="flex flex-col rounded-xl bg-slate-200 shadow-lg">
          <div className="px-12 py-5">
            <h2 className="whitespace-nowrap text-center font-semibold text-gray-800 sm:text-xl">
              Share your opinion with us!
            </h2>
          </div>
          <form
            onSubmit={handleReviewSubmit}
            className="flex w-full flex-col items-center bg-[#fdfeff]"
          >
            <div className="flex flex-col items-center space-y-3 py-6">
              <span className="text-lg font-medium text-gray-500">
                How was your experience?
              </span>
              <div className="flex space-x-3">
                <ReactStarsRating
                  size={20}
                  className="flex me-2"
                  value={rating}
                  onChange={(value) => setRating(value)}
                ></ReactStarsRating>
              </div>
            </div>
            <div className="flex w-3/4 flex-col">
              <textarea
                rows={3}
                className="resize-none rounded-xl bg-gray-100 p-4 text-gray-500 outline-none focus:ring"
                placeholder="Leave a message, if you want"
                defaultValue={""}
                name="comment"
              />
              <button className="my-8 rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 py-3 text-base text-white">
                Rate now
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center py-5">
            <a href="#" className="text-sm text-gray-600">
              Maybe later
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

import PropTypes from 'prop-types';

AddReview.propTypes = {
  productId: PropTypes.string,
};
export default AddReview;
