import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { role } = useContext(AuthContext);





  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-\[1000\] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/all-request'}>All request</NavLink>
            </li>
            <li>
              <NavLink to={"/search"} >Search</NavLink>
            </li>
            <li>
              <NavLink to={"/donate"}>Donate</NavLink>
            </li>
            
           
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
            <img className="w-10 h-10" src="/logo.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/all-request'}>All request</NavLink>
            </li>
            <li>
              <NavLink to={"/search"} >Search</NavLink>
            </li>

            {user && (
              <>
                
                <li>
              <NavLink to={"/donate"}>Donate</NavLink>
            </li>
              </>
            )}
            
          
          {/* {user && (
            <>
              <li>
                <NavLink to={"/profile"}>My Profile</NavLink>
              </li>
                  
            </>
          )} */}
        </ul>
      </div>

        
          

      {user ? (
        <div className="navbar-end flex items-center gap-3">
          {/* <Link to={'/dashboard'} className="btn btn-sm">Dashboard</Link> */}
          
          {role == "admin" && (
          <Link to="/dashboard/admin-dashboard" >
            <button className="btn btn-sm"> Admin Dashboard</button>
          </Link>
        )}

          {role == "donor" && (
          <Link to="/dashboard/donor-dashboard" >
            <button className="btn btn-sm">Donor Dashboard</button>
          </Link>
        )}

        {role == "volunteer" && (
          <Link to="/dashboard/volunteer-dashboard" >
            <button className="btn btn-sm">Volunteer Dashboard</button>
          </Link>
        )}
        

          <div
            className="tooltip tooltip-bottom"
            data-tip={user.displayName || "User"}
          >
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                <img src={user.photoURL} alt="User Avatar" />
              </div>
            </div>
          </div>

          <button onClick={handleSignOut} className="btn  btn-sm">
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/login" className="btn btn-sm">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
