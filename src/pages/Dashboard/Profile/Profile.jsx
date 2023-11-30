import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import useAuth from "../../../hooks/useAuth";
import useCheckRole from "../../../hooks/useCheckRole";
import Modal from "../../../shared/Modal/Modal";
import Payment from "../Payment/Payment";

const Profile = () => {
  const {user} = useAuth()
  const {userInfo} = useCheckRole()
  

    return (
      <div className="m-10 max-w-sm mx-auto h-[70vh]">
        <div className=" rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
          <div className="relative mx-auto w-36 rounded-full">
            <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2" />
            <img
              className="mx-auto h-auto w-full rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
            {user?.displayName}
          </h1>
          <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
            Email {user?.email}
          </h3>
          <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Architecto, placeat!
          </p>
          <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
            <li className="flex items-center py-3 text-sm">
              <span>Status</span>
              <span className="ml-auto">
                <span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
                  {userInfo?.subscription === "premium"? 'Verified':'Normal user'}
                </span>
              </span>
            </li>
            <li className="flex items-center py-3 text-sm">
              <span>Joined On</span>
              <span className="ml-auto">Apr 08, 2022</span>
            </li>
          </ul>
          {/* subscription button */}
          <div className="text-center mt-6">
            {userInfo?.subscription === "free" && (
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="btn btn-primary text-white hover:btn-neutral"
              >
                Subscribe
              </button>
            )}
            <Modal>
              <Payment></Payment>
            </Modal>
          </div>
        </div>
      </div>
    );
};
export default Profile;