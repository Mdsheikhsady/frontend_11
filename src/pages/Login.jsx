import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import auth from "../firebase/firebase.config";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
  const { setUser, handleGoogleSignin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  // console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        navigate(location.state);
        toast.success("Login successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed. please check your credentials");
        return
      });
  };

  const googleSignin = () => {
    handleGoogleSignin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state ? location.state : "/");
        
        toast.success("Login successful");
      })
      .catch((err) => {
        console.log(err);
        toast.error('Google login failed');
      }

    );
  };

  const handleForgot = () => {
    navigate(`/forgot/${email}`);
  };
  const notify = () => toast('Here is your toast!');
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />

                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />

                <div>
                  <button onClick={handleForgot} className="link link-hover">
                    Forgot password?
                  </button>
                </div>
                <button type='button' onClick={googleSignin} className="btn">
                  <FcGoogle /> Continue With Google
                </button>
                <div>
                  <span>Don't have an account?</span>
                  <Link to={"/signup"} className="text-blue-500">
                    {" "}
                    Register
                  </Link>
                </div>

                <button onClick={notify} className="btn btn-neutral mt-4">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
