import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const AddVolunteer = () => {
  const { registerWithEmailPassword, setUser, user, handleGoogleSignin } =
    useContext(AuthContext);

  const [upazilas, setUpazilas] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [upazila, setUpazila] = useState("");
  const [district, setDistrict] = useState("");

  useEffect(() => {
    axios.get("/upazila.json").then((res) => {
      setUpazilas(res.data.upazilas);
    });
    axios.get("/district.json").then((res) => {
      setDistricts(res.data.districts);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl;
    const file = photoUrl.files[0];
    const blood = e.target.blood.value;

    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;

    if (pass.length < 6) {
      return alert("less than 6 character");
    }
    if (!upperCase.test(pass)) {
      return alert("need a upper case");
    }

    if (!lowerCase.test(pass)) {
      return alert("need a lower case");
    }

    const res = await axios.post(
      `https://api.imgbb.com/1/upload?&key=67905ca052a449f8cf0df9ddbb9e9818`,
      { image: file },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const mainPhotoUrl = res.data.data.display_url;

    const formData = {
      email,
      name,
      mainPhotoUrl,
      blood,
      district,
      upazila,
      role: "volunteer",
    };

    if (res.data.success == true) {
      registerWithEmailPassword(email, pass)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: mainPhotoUrl,
          })
            .then(() => {
              setUser(userCredential.user);
              toast.success("Register successful");
              axios
                .post("https://backend11-two.vercel.app/users", formData)
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((error) => {
              console.log(error);
              toast.error(e.message);
            });
        })
        .catch((err) => {
          console.log(err);
          toast.error(e.message);
        });
    }
  };

  const googleSignup = () => {
    handleGoogleSignin()
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => console.log(err));
  };

  // console.log(user);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Your Full Name"
              />
              <label className="label">PhotoUrl</label>
              <input
                name="photoUrl"
                type="file"
                className="input"
                placeholder="Enter your PhotoUrl"
              />
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

              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <button onClick={googleSignup} className="btn">
                <FcGoogle /> Continue With Google
              </button>

              <div>
                <span>Already have an account?</span>
                <Link to={"/login"} className="text-blue-500">
                  {" "}
                  Login
                </Link>
              </div>

              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVolunteer;
