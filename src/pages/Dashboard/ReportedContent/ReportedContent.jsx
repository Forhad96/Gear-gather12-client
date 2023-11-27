import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/axiosSecureApi/useAxiosSecure";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";

const ReportedContent = () => {
    const axiosSecure = useAxiosSecure()
    const {data} = useGetSecure('/allReportedProducts','allReportedProducts')
    console.log(data);
    return (
        <div>
            <p>HELLO I am ReportedContent:{data?.length}</p>
        </div>
    );
};
export default ReportedContent;