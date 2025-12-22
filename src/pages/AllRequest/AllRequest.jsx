import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllRequest = () => {
  const [requests, setRequests] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/search-request")
      .then(res => {
        setRequests(res.data);
      })
      .catch(err => console.log(err));
  }, [axiosSecure]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">All Blood Requests</h2>

      {requests.length === 0 ? (
        <p className="text-gray-500">No requests found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((req) => (
            <div
              key={req._id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-bold text-red-600">
                  {req.bloodGroup}
                </span>
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium
                  ${
                    req.donationStatus === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {req.donationStatus}
                </span>
              </div>

              {/* Recipient */}
              <h3 className="text-lg font-semibold mb-1">
                {req.recipientName}
              </h3>

              <p className="text-sm text-gray-600 mb-2">
                {req.recipientUpazila}, {req.recipientDistrict}
              </p>

              <p className="text-sm text-gray-600 mb-2">
                Hospital Name: {req.hospitalName}
              </p>

              <p className="text-sm text-gray-500 mb-3">
                Address: {req.fullAddress}
              </p>

              
              <div className=" text-sm text-gray-500">
                <span>Requested by:</span><span> </span> 
                <span className="font-medium">{req.requesterName}</span>
              </div>
              <div className="card-actions mt-4 justify-end">
                <button className="btn btn-outline btn-error">
                  View Details
                </button>
              </div>
            </div>
            
          ))}
          
        </div>
      )}
    </div>
  );
};

export default AllRequest;
