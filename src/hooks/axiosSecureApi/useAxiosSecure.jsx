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
  // axiosSecure.interceptors.request.use(
  //   function (config) {
  //     const token = localStorage.getItem("access-token");
  //     config.headers.authorization = `Bearer ${token}`;
  //     // console.log('request stop by interceptor');
  //     return config;
  //   },
  //   function (error) {
  //     return Promise.reject(error);
  //   }
  // );

  // interceptor 401 403
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
