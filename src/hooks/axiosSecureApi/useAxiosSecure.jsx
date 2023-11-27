import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const goTo = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        const status = error.response.status;
        // console.log('status error in the interceptor',status);
        //  console.log("error tracked in the interceptor", error.response);
        if (status === 401 || status === 403) {
          goTo("/login");
          await logOut();
        }
        return Promise.reject(error);
      }
    );
  }, [goTo, logOut]);

  return axiosSecure;
};

export default useAxiosSecure;
