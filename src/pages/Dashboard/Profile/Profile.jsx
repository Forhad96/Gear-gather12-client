import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../shared/Loader/Loader";
import Modal from "../../../shared/Modal/Modal";
import Payment from "../Payment/Payment";

const Profile = () => {
  const {user} = useAuth()

  const {data,isLoading,refetch} =useGetSecure(`/users/checkRole/${user?.email}`,'roleInfo')
  const subscription = data?.subscription;
  // console.log(subscription);
  if(isLoading){
    return <Loader></Loader>
  }
  

    return (
      <div className="m-10 max-w-sm mx-auto h-[70vh]">
        <div className=" rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
          <div className="flex items-center justify-center">
            <div className="avatar online ">
              <div className="w-24 rounded-full">
                <img src={user?.photURL} />
              </div>
            </div>
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
                  {subscription === "premium"
                    ? "Verified"
                    : "Normal user"}
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
            {subscription === "free" && (
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
              <Payment refetch={refetch}></Payment>
            </Modal>
          </div>
        </div>
      </div>
    );
};
export default Profile;