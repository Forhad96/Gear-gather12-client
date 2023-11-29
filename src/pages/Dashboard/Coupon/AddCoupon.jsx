const AddCoupon = () => {
    return (
      <div className="relative m-10 max-w-lg rounded-md border text-gray-800 shadow-lg">
        <p className="mt-4 pl-4 text-xl font-bold">Add new user</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-0 m-3 h-6 w-6 cursor-pointer text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div className="flex flex-col items-center px-8 py-10">
          <label className="block w-full" htmlFor="name">
            <p className="mb-1 text-sm text-gray-600">Name</p>
            <input
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="text"
              placeholder="Enter name"
            />
          </label>
          <label className="mt-4 block w-full" htmlFor="name">
            <p className="mb-1 text-sm text-gray-600">Email Address</p>
            <input
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="email"
              placeholder="Enter email"
            />
          </label>
          <label className="mt-4 block w-full" htmlFor="name">
            <p className="mb-1 text-sm text-gray-600">Assign Team</p>
            <select
              className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
              type="email"
            >
              <option value="Marketing">Marketing</option>
              <option value="Designing">Designing</option>
            </select>
          </label>
          <div className="mt-8 flex flex-col justify-center space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
            <button className="whitespace-nowrap rounded-md bg-blue-500 px-4 py-3 font-medium text-white">
              Add User
            </button>
            <button className="whitespace-nowrap rounded-md bg-gray-200 px-4 py-3 font-medium">
              Cancel Operation
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Password will be sent to their email
          </p>
        </div>
      </div>
    );
};
export default AddCoupon;