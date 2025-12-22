import { useContext, useState } from "react";

import {
  FaTachometerAlt,
  FaUsers,
  FaBoxOpen,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
  FaHome,
} 
from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Aside = () => {
  const { user, role } = useContext(AuthContext);
  const [ open, setOpen ] = useState(false);

  const handleLogOut = () => {
    signOut(auth);
  };

  const menuItemClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 px-4 py-3 rounded-md bg-indigo-600 text-white"
      : "flex items-center gap-3 px-4 py-3 rounded-md text-gray-300 hover:bg-gray-700";

  return (
    <>
    {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-2 left-2 z-50 bg-gray-500 text-white p-1 rounded"
      >
        ☰
      </button>
    <aside
      className={`fixed top-0 left-0 z-40 h-screen w-60 bg-gray-900 text-white transform transition-transform duration-300
  ${open ? "translate-x-0" : "-translate-x-full"}
  md:translate-x-0`}
    >
      <button
        onClick={() => setOpen(false)}
        className="md:hidden absolute top-4 right-4 text-red text-xl"
      >
        ✕
      </button>
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-700">
        {/* <h2 className="text-2xl font-bold text-indigo-500">Admin Panel</h2> */}
        <nav className="mt-6 px-4 space-y-2">
          {role == "admin" && (
            <NavLink
              onClick={() => setOpen(false)}
              to="/dashboard/all-users"
              className={menuItemClass}
            >
              Admin Panel
            </NavLink>
          )}

          {role == "donor" && (
            <NavLink
              onClick={() => setOpen(false)}
              to="/dashboard/donor-dashboard"
              className={menuItemClass}
            >
              Donor Dashboard
            </NavLink>
          )}
        </nav>
      </div>

      {/* Menu */}
      <nav className="mt-6 px-4 space-y-2">
        {/* <NavLink to="/dashboard" className={menuItemClass}>
          <FaTachometerAlt /> Dashboard
        </NavLink> */}

        {role == "donor" && (
          <NavLink
            onClick={() => setOpen(false)}
            to="/dashboard/add-request"
            className={menuItemClass}
          >
            Add Request
          </NavLink>
        )}

        {role == "admin" && (
          <NavLink
            onClick={() => setOpen(false)}
            to="/dashboard/all-users"
            className={menuItemClass}
          >
            All Users
          </NavLink>
        )}
        {role == "admin" && (
          <NavLink
            onClick={() => setOpen(false)}
            to="/dashboard/add-volunteer"
            className={menuItemClass}
          >
            Add Volunteer
          </NavLink>
        )}

        <NavLink
          onClick={() => setOpen(false)}
          to="/dashboard/my-request"
          className={menuItemClass}
        >
          My Request
        </NavLink>

        <NavLink
          onClick={() => setOpen(false)}
          to="/"
          className={menuItemClass}
        >
          <FaHome /> Back to Home
        </NavLink>
      </nav>

      <div className="absolute bottom-20 w-full px-4">
        {user && (
          <NavLink
            onClick={() => setOpen(false)}
            className={menuItemClass}
            to={"/dashboard/my-profile"}
          >
            {" "}
            <FaCog /> Profile
          </NavLink>
        )}
      </div>
      {/* Logout */}
      <div className="absolute bottom-6 w-full px-4">
        <button
          onClick={handleLogOut}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-md text-red-400 hover:bg-red-500 hover:text-white transition"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
      
      
    </aside>
  </>
  );
};

export default Aside;
