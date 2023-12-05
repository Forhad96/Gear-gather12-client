

import ReactStarsRating from "react-awesome-stars-rating";
import useGetPublicData from "../../hooks/axiosPublicApi/useGetPublicData";
import AddReview from "../../pages/AddReview/AddReview";
import NoReview from "./NoReview";
import Loader from "../../shared/Loader/Loader";
const Review = ({ productId, product_owner }) => {
  const {
    data: reviews,
    refetch,
    isLoading,
  } = useGetPublicData(`/reviews/${productId}`, "reviews");
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <section className=" flex justify-center py-2 font-poppins dark:bg-gray-800">
      {reviews ? (
        <div className="grid grid-cols-1 h-32 gap-6 lg:grid-cols-2 ">
          {reviews?.map((review, idx) => (
            <div
              key={idx}
              className="py-6 bg-white rounded-md shadow dark:bg-gray-900"
            >
              <div className="flex flex-wrap items-center justify-between pb-4 mb-6 space-x-2 border-b dark:border-gray-700">
                <div className="flex items-center px-6 mb-2 md:mb-0 ">
                  <div className="flex mr-2 rounded-full">
                    <img
                      src="https://i.postimg.cc/rF6G0Dh9/pexels-emmy-e-2381069.jpg"
                      alt=""
                      className="object-cover w-12 h-12 rounded-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-300">
                      {review?.author}
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Email:{review?.email}
                    </p>
                  </div>
                </div>
                <p className="px-6 text-base font-medium text-gray-600 dark:text-gray-400">
                  Publish Date:{new Date(review?.createdAt).toLocaleString()}
                </p>
              </div>
              <p className="px-6 mb-6 text-base text-gray-500 dark:text-gray-400">
                {review?.comment}
              </p>
              <div className="flex flex-wrap justify-between pt-4 border-t dark:border-gray-700">
                <div className="flex px-6 mb-2 md:mb-0">
                  <ReactStarsRating
                    size={20}
                    className="flex me-2"
                    isEdit={false}
                    value={review?.rating}
                  ></ReactStarsRating>
                  <h2 className="text-sm text-gray-500 dark:text-gray-400">
                    Rating:-
                    <span className="font-semibold text-gray-600 dark:text-gray-300">
                      {review?.rating}
                    </span>
                  </h2>
                </div>
                <div className="flex items-center px-6 space-x-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <div className="flex mr-3 text-sm text-gray-700 dark:text-gray-400">
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="w-4 h-4 mr-1 text-blue-400 bi bi-hand-thumbs-up-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"></path>
                        </svg>
                      </a>
                      <span>12</span>
                    </div>
                    <div className="flex text-sm text-gray-700 dark:text-gray-400">
                      <a href="#" className="inline-flex hover:underline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="w-4 h-4 mr-1 text-blue-400 bi bi-chat"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path>
                        </svg>
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoReview></NoReview>
      )}

      <AddReview
        refetch={refetch}
        product_owner={product_owner}
        productId={productId}
      ></AddReview>
    </section>
  );
};
import PropTypes from 'prop-types';


Review.propTypes = {
  productId: PropTypes.string,
  product_owner: PropTypes.string,
};
export default Review;
