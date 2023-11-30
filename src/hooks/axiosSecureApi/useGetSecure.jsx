import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "../useAuth";

const useGetSecure = (endpoint, key) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const res = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const res = await axiosSecure.get(endpoint);
      return res.data;
    },
  });
  return res;
};
export default useGetSecure;
