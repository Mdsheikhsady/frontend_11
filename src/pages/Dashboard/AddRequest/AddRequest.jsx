import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddRequest = () => {
  const { user } = useContext(AuthContext);

  const [upazilas, setUpazilas] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [upazila, setUpazila] = useState("");
  const [district, setDistrict] = useState("");

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axios.get("/upazila.json").then((res) => {
      setUpazilas(res.data.upazilas);
    });
    axios.get("/district.json").then((res) => {
      setDistricts(res.data.districts);
    });
  }, []);

  const handleRequest = (e) => {
    e.preventDefault();
    const form = e.target;

    const requesterName = form.requesterName.value;
    const requesterEmail = form.requesterEmail.value;
    const recipientName = form.recipientName.value;
    const recipientDistrict = district;
    const recipientUpazila = upazila;
    const hospitalName = form.hospitalName.value;
    const fullAddress = form.fullAddress.value;
    const bloodGroup = form.bloodGroup.value;

    const formData = {
      requesterName,
      requesterEmail,
      recipientName,
      recipientDistrict,
      recipientUpazila,
      hospitalName,
      fullAddress,
      bloodGroup,
      donationStatus:'pending',
    };
    
    axiosSecure.post('/requests', formData)
    .then(res=>{
      alert(res.data.insertedId)
    }).catch(err=>console.log(err))
  };


  return (
    <div className="max-w-4xl mx-auto bg-base-100 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Create Donation Request
      </h2>

      <form onSubmit={handleRequest} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Requester Name */}
        <div>
          <label className="label">Requester Name</label>
          <input
            type="text"
            name="requesterName"
            value={user?.displayName}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* Requester Email */}
        <div>
          <label className="label">Requester Email</label>
          <input
            type="email"
            name="requesterEmail"
            value={user?.email}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* Recipient Name */}
        <div>
          <label className="label">Recipient Name</label>
          <input
            type="text"
            name="recipientName"
            placeholder="Recipient Full Name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Blood Group */}
        <div>
          <label className="label">Blood Group</label>
          <select
            name="bloodGroup"
            className="select select-bordered w-full"
            required
          >
            <option disabled selected>
              Select Blood Group
            </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        {/* District */}
        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          name="recipientDistrict"
          required
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
          name="recipientUpazila"
          required
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

        {/* Hospital */}
        <div className="md:col-span-2">
          <label className="label">Hospital Name</label>
          <input
            type="text"
            name="hospitalName"
            placeholder="Hospital Name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Full Address */}
        <div className="md:col-span-2">
          <label className="label">Full Address</label>
          <input
            type="text"
            name="fullAddress"
            placeholder="Full Address"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Donation Date */}
        <div>
          <label className="label">Donation Date</label>
          <input type="date" className="input input-bordered w-full" required />
        </div>

        {/* Donation Time */}
        <div>
          <label className="label">Donation Time</label>
          <input type="time" className="input input-bordered w-full" required />
        </div>

        {/* Request Message */}
        <div className="md:col-span-2">
          <label className="label">Request Message</label>
          <textarea
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Explain why blood is needed..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center">
          <button type="submit" className="btn btn-error px-10 text-white">
            Request Blood
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRequest;
