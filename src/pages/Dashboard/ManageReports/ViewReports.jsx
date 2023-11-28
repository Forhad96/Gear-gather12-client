import { useParams } from "react-router-dom";
import useGetSecure from "../../../hooks/axiosSecureApi/useGetSecure";

const ViewReports = () => {
  const { id } = useParams();
  const { data: reports } = useGetSecure(`/reports/${id}`, "reports");

  return (
    <div>
      {reports?.map((report) => (
        <div
          className="card lg:card-side mb-5 bg-base-100 shadow-xl"
          key={report?._id}
        >
          <div className="card-body">
            <h3>
              <span className="text-lg font-semibold">Reporter Email:</span>
              {report?.email}
            </h3>
            <p>
              <span className="text-lg font-semibold">Report subject:</span>
              {report?.subject}
            </p>

            <p>
              <span className="text-lg font-semibold">Report Details:</span>
              {report?.message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ViewReports;
