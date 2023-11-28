import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/axiosSecureApi/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useCheckRole from "../../hooks/useCheckRole";

const VoteButton = ({ product, refetch }) => {
  const { user } = useAuth();
  const { userInfo } = useCheckRole();
  const axiosSecure = useAxiosSecure();
  const [vote,setVote] = useState()
  const goTo = useNavigate();


  useEffect(()=>{
    if(product){
        product?.votedUsers?.map(vote =>{
            if(vote.action === "upvote"){
                setVote('upvote')
            }
            else if(vote.action === 'downvote'){

                setVote('downvote')
            }
        })
    }
  },[product])
  const handleVote = async (product_id, vote) => {
    try {
      console.log("click");
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
        className="bg-yellow-500 hover:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-50 disabled:text-black text-white px-2 py-1 rounded-full flex items-center"
        disabled={vote === "upvote"}
      >
        <span className="mr-2">{product?.upVotes}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
      <button
        onClick={() => handleVote(product._id, "downvote")}
        className="bg-red-500 hover:bg-red-400 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-50 disabled:text-black text-white px-2 py-1 rounded-full flex items-center ml-2"
        disabled={vote === "downvote"}
      >
        <span className="mr-2">{product?.downVotes}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
};

import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

VoteButton.propTypes = {
    product: PropTypes.object.isRequired,
    refetch:PropTypes.func.isRequired,
};
export default VoteButton;
