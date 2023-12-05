
import { Chart } from "react-google-charts";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import { FaStar } from "react-icons/fa";

export default function AdminStatistics() {
    const {data:statistics} = useGetSecure('/statistics','statistics')
    
  const data = [
    ["Total", "Count"],
    ["Products", statistics?.totalProducts],
    ["Reviews", statistics?.totalReviews],
    ["Users", statistics?.totalUsers],
    ["Coupon", statistics?.totalCoupon],
  ];

  const options = {
    title: "Admin Statistics",
    is3D: true,
  };

  return (
    <div>
      <section className="px-6 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center justify-center p-4 shadow dark:bg-gray-900 bg-gray-50">
            <div>
              <span className="text-gray-700 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-14 h-14 bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </span>
              <h2 className="mt-2 mb-2 text-2xl font-bold text-gray-700 dark:text-gray-400">
                {statistics?.totalUsers}
              </h2>
              <p className="text-gray-700 dark:text-gray-400">Total Users</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 shadow dark:bg-gray-900 bg-gray-50">
            <div>
              <span className="text-gray-700 dark:text-gray-400">
                <FaStar className="h-10 w-10"></FaStar>
              </span>
              <h2 className="mt-2 mb-2 text-2xl font-bold text-gray-700 dark:text-gray-400">
                {statistics?.totalReviews}
              </h2>
              <p className="text-gray-700 dark:text-gray-400">Total Review</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 shadow dark:bg-gray-900 bg-gray-50">
            <div>
              <span className="text-gray-700 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-10 h-10 bi bi-cart2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </span>
              <h2 className="mt-2 mb-2 text-2xl font-bold text-gray-700 dark:text-gray-400">
                {statistics?.totalProducts}
              </h2>
              <p className="text-gray-700 dark:text-gray-400">Total Product</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 shadow dark:bg-gray-900 bg-gray-50">
            <div>
              <span className="text-gray-700 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="w-10 h-10 bi bi-tag"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                  <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
                </svg>
              </span>
              <h2 className="mt-2 mb-2 text-2xl font-bold text-gray-700 dark:text-gray-400">
                {statistics?.totalCoupon}
              </h2>
              <p className="text-gray-700 dark:text-gray-400">Total Shop</p>
            </div>
          </div>
        </div>
      </section>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}
