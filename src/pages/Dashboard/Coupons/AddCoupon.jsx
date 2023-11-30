// const AddCoupon = () => {
//     return (
//       <div className="relative m-10 max-w-lg rounded-md border text-gray-800 shadow-lg">
//         <p className="mt-4 pl-4 text-xl font-bold">Add new user</p>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="absolute right-0 top-0 m-3 h-6 w-6 cursor-pointer text-gray-400"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//         <div className="flex flex-col items-center px-8 py-10">
//           <label className="block w-full" htmlFor="name">
//             <p className="mb-1 text-sm text-gray-600">Name</p>
//             <input
//               className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
//               type="text"
//               placeholder="Enter name"
//             />
//           </label>
//           <label className="mt-4 block w-full" htmlFor="name">
//             <p className="mb-1 text-sm text-gray-600">Email Address</p>
//             <input
//               className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
//               type="email"
//               placeholder="Enter email"
//             />
//           </label>
//           <label className="mt-4 block w-full" htmlFor="name">
//             <p className="mb-1 text-sm text-gray-600">Assign Team</p>
//             <select
//               className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
//               type="email"
//             >
//               <option value="Marketing">Marketing</option>
//               <option value="Designing">Designing</option>
//             </select>
//           </label>
//           <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
//             <button className="whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white">
//               Add User
//             </button>
//             <button className="whitespace-nowrap rounded-md bg-gray-200 px-4 py-3 font-medium">
//               Cancel Operation
//             </button>
//           </div>
//           <p className="text-sm text-gray-600 mt-4">
//             Password will be sent to their email
//           </p>
//         </div>
//       </div>
//     );
// };
// export default AddCoupon;



import { useState } from "react";

const AddCoupon = () => {
  const [couponCode, setCouponCode] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [description, setDescription] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [error, setError] = useState("");
console.log(couponCode,expiryDate,description,discountAmount);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields here

    // Add logic to handle the coupon submission
    // For example, you can send the coupon details to the server
  };

  return (
    <div className="h-[75vh] mt-8">
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
            id="couponCode"
            className="input input-primary input-md w-full"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
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
            type="text"
            id="expiryDate"
            className="input input-primary input-md w-full"
            placeholder="Enter expiry date"
            value={expiryDate}
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
            className="input input-primary input-md w-full"
            placeholder="Enter coupon description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            className="input input-primary input-md w-full"
            placeholder="Enter discount amount"
            value={discountAmount}
            onChange={(e) => setDiscountAmount(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary text-white font-bold"
          >
            Add Coupon
          </button>
        </div>

        <p className="text-red-500 font-bold mt-2">{error}</p>
      </form>
    </div>
  );
};

export default AddCoupon;
