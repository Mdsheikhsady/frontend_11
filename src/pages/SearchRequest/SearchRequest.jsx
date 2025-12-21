import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";

const SearchRequest = () => {
  const [upazilas, setUpazilas] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [upazila, setUpazila] = useState("");
  const [district, setDistrict] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const axiosInstance = useAxios();

  useEffect(() => {
    axios.get("/upazila.json").then((res) => {
      setUpazilas(res.data.upazilas);
    });
    axios.get("/district.json").then((res) => {
      setDistricts(res.data.districts);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const bloodGroupSrc = e.target.blood.value;
    console.log(bloodGroupSrc);
    axiosInstance
      .get(
        `/search-request?bloodGroupSrc=${encodeURIComponent(bloodGroupSrc)}&district=${district}&upazila=${upazila}`
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="min-h-screen ">
      <form onSubmit={handleSearch} className="flex fieldset">
        <select
          name="blood"
          defaultValue="Choose Blood Group"
          className="select"
        >
          <option disabled={true}>Choose Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        {/* District */}
        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="select"
        >
          <option disabled selected value="">
            Choose District
          </option>
          {districts?.map((d) => (
            <option value={d?.name} key={d?.id}>
              {d?.name}
            </option>
          ))}
        </select>
        {/* Upazila */}
        <select
          value={upazila}
          onChange={(e) => setUpazila(e.target.value)}
          className="select"
        >
          <option disabled selected value="">
            Choose Upazila
          </option>
          {upazilas?.map((u) => (
            <option value={u?.name} key={u?.id}>
              {u?.name}
            </option>
          ))}
        </select>

        <button className="btn">Search</button>
      </form>
      {loading && (
        <p className="text-center text-lg font-semibold">Searching...</p>
      )}

      {!loading && results.length === 0 && (
        <p className="text-center text-gray-500">
          No matching donor requests found.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.map((item) => (
          <div
            key={item._id}
            className="card bg-white shadow-lg border border-red-100"
          >
            <div className="card-body">
              <h2 className="card-title text-red-600">
                Blood Group: {item.bloodGroup}
              </h2>

              <p>
                <strong>District:</strong> {item.district}
              </p>
              <p>
                <strong>Upazila:</strong> {item.upazila}
              </p>
              <p>
                <strong>Date:</strong> {item.date}
              </p>

              <div className="card-actions justify-end mt-4">
                <button className="btn btn-outline btn-error">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRequest;
