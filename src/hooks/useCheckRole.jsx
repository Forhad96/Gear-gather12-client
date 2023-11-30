import { useQuery } from "@tanstack/react-query";
import useGetSecure from "./axiosSecureApi/useGetSecure";
import useAuth from "./useAuth";
import useAxiosSecure from "./axiosSecureApi/useAxiosSecure";
import { useEffect, useState } from "react";

const useCheckRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userInfo, setUerInfo] = useState({});
  const [loading, setLoading] = useState(true);
  // if(user?.email){
  //   return
  // }
  // const { data, isLoading } = useGetSecure(
  //   `/users/checkRole/${user?.email}`,
  //   user?.email,
  // );

  useEffect(() => {
    if (user?.email) {
      const fetchData = async () => {
        const res = await axiosSecure.get(`/users/checkRole/${user?.email}`);
        setUerInfo(res.data);
        setLoading(false);
      };
      fetchData();
    }
  }, [user?.email, axiosSecure]);

  // return { data, isLoading,isError } || {};
  return { userInfo, loading };
};
export default useCheckRole;
