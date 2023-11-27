import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetPublicData = ( endpoint, key ) => {
  const axiosPublic = useAxiosPublic();
  const res = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const res = await axiosPublic.get(endpoint);
      return res.data;
    },
  });
  return res;
};

export default useGetPublicData;
