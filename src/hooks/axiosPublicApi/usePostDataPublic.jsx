import useAxiosPublic from "./useAxiosPublic";
import { useMutation } from '@tanstack/react-query'

const usePostDataPublic = () => {
  const axiosPublic = useAxiosPublic();
  const postData = async (endpoints, data) => {
    const res = await axiosPublic.post(endpoints, data);
    return res.data
  };

  const {mutate} = useMutation(postData)

  return {postData: mutate}
};
export default usePostDataPublic;
