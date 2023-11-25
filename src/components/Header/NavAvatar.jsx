import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const NavAvatar = () => {
const {logOut} = useAuth()
  const handleLogout =async()=>{
try {
 await logOut()
toast.success('Logout successful')
} catch (error) {
  console.log(error);
  toast.error(error.message)
}
  }
    return (
      <div className="dropdown dropdown-end">
        <div tabIndex={0} className="avatar">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://www.svgrepo.com/show/129839/avatar.svg" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>FORHAD</a>
          </li>
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
    );
};
export default NavAvatar;


