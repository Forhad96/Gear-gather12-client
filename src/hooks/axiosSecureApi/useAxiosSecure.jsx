import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials:true
});
const useAxiosSecure = () => {
  const goTo = useNavigate();
  const { logOut } = useAuth();
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      const status = error.response.status;
      // console.log('status error in the interceptor',status);
      if (status === 401 || status === 403) {
        goTo("/login");
        await logOut();
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
