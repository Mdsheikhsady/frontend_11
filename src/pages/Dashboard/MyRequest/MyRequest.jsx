import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyRequest = () => {
  const [myRequest, setMyRequest] = useState([]);
  const [totalRequests, setTotalRequests] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/my-request?page=${currentPage - 1}&size=${itemPerPage}`)
      .then((res) => {
        setMyRequest(res.data.req);
        setTotalRequests(res.data.totalRequest);
      });
  }, [axiosSecure, currentPage, itemPerPage]);

  const numberOfPages = Math.ceil(totalRequests / itemPerPage);
  const pages = [...Array(numberOfPages).keys()].map((e) => e + 1);

  // console.log(pages);
  // console.log('my request:',myRequest);
  // console.log('total request:',totalRequests);
  // console.log('number of pages:',numberOfPages);

  const handlePrev = ()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }

   const handleNext = ()=>{
    if(currentPage<pages.length){
      setCurrentPage(currentPage+1)
    }
  }

  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Hospital Name</th>
              <th>Blood Group</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myRequest.map((r, index) => (
              <tr>
                <th>{(currentPage*10)+(index+1)-10}</th>
                <td>{r.recipientName}</td>
                <td>{r.hospitalName}</td>
                <td>{r.bloodGroup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <div className="flex gap-1 mt-10 justify-center">
            <button onClick={handlePrev} className="btn">Prev</button>
            {
                pages.map(page=>
                    <button onClick={()=> setCurrentPage(page)} 
                    className={`btn ${page === currentPage ? 'bg-[#435585] text-white' : ''}`}>
                        {page}
                    </button>)
            }
            <button onClick={handleNext} className="btn">Next</button>
        </div>
    </div>
  );
};

export default MyRequest;
