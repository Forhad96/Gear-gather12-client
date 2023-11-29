import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/axiosSecureApi/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useCheckRole from "../../hooks/useCheckRole";
import { SlDislike, SlLike } from "react-icons/sl";
const VoteButton = ({ product, refetch }) => {
  const { user } = useAuth();
  const { userInfo } = useCheckRole();
  const axiosSecure = useAxiosSecure();
  const [disabled, setDisable] = useState(false);
  const [vote, setVote] = useState();
  const goTo = useNavigate();

  useEffect(() => {
    if (product) {
      product?.votedUsers?.map((vote) => {
        if (vote.action === "upvote") {
          setVote("upvote");
        } else if (vote.action === "downvote") {
          setVote("downvote");
        }
      });
    }
  }, [product]);

  useEffect(() => {
    if (
      userInfo?.role === "admin" ||
      userInfo?.role === "moderator" ||
      product?.product_owner === userInfo?.email
    ) {
      setDisable(true);
    }
  }, [userInfo, product]);
  const handleVote = async (product_id, vote) => {
    try {
      // const voteInfo = { action: vote,userId:userInfo?.userId };

      if (user?.email && userInfo?.userId) {
        const res = await axiosSecure.post(
          `/votes/${product_id}/${userInfo.userId}/?action=${vote}`
        );
        if (res.data.success) {
          refetch();
        }
        console.log(res);
      } else {
        goTo("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => handleVote(product._id, "upvote")}
        type="button"
        
        className="w-16 bg-warning hover:opacity-90 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-50 disabled:text-black text-white px-2 py-1 rounded-full flex items-center"
        disabled={vote === "upvote" || disabled}
      >
        <span className="mr-2">{product?.upVotes}</span>
<SlLike className="w-5 h-5"></SlLike>
      </button>
      <button
        onClick={() => handleVote(product._id, "downvote")}
        className="w-16 bg-error hover:opacity-90 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-50 disabled:text-black text-white px-3 py-1 rounded-full flex items-center ml-2"
        disabled={vote === "downvote" || disabled}
      >
        <span className="mr-2">{product?.downVotes}</span>
<SlDislike className="w-5 h-5"></SlDislike>
      </button>
    </div>
  );
};

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

VoteButton.propTypes = {
  product: PropTypes.object,
  refetch: PropTypes.func,
};
export default VoteButton;
