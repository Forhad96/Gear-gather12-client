import useGetSecure from "./axiosSecureApi/useGetSecure";
import useAuth from "./useAuth";

const useCheckRole = () => {
    const {user} =useAuth()
    const {data,isLoading} = useGetSecure(`/users/checkRole/${user?.email}`)
    return {data,isLoading}
};
export default useCheckRole;