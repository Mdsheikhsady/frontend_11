import { useContext } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaBoxOpen,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Aside = () => {
  const { user } = useContext(AuthContext);
  const { role } = useContext(AuthContext);

  const handleLogOut = () => {
    signOut(auth);
  };

  const menuItemClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 px-4 py-3 rounded-md bg-indigo-600 text-white"
      : "flex items-center gap-3 px-4 py-3 rounded-md text-gray-300 hover:bg-gray-700";

  return (
    <aside className="w-60 min-h-screen bg-gray-900 text-white fixed left-0 top-0">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-700">
        {/* <h2 className="text-2xl font-bold text-indigo-500">Admin Panel</h2> */}
        <nav className="mt-6 px-4 space-y-2">
          {role == "admin" && (
          <NavLink to="/dashboard/all-users" className={menuItemClass}>
            Admin Panel
          </NavLink>
        )}

          {role == "donor" && (
          <NavLink to="/dashboard/donor-dashboard" className={menuItemClass}>
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
          <NavLink to="/dashboard/add-request" className={menuItemClass}>
            Add Request
          </NavLink>
        )}

        {role == "admin" && (
          <NavLink to="/dashboard/all-users" className={menuItemClass}>
            All Users
          </NavLink>
        )}

        <NavLink to="/dashboard/my-request" className={menuItemClass}>
          My Request
        </NavLink>

        <NavLink to="/dashboard/users" className={menuItemClass}>
          <FaUsers /> Users
        </NavLink>

        <NavLink to="/" className={menuItemClass}>
          <FaHome /> Back to Home
        </NavLink>
      </nav>

      <div className="absolute bottom-20 w-full px-4">
        {user && (
          <NavLink className={menuItemClass} to={"/dashboard/my-profile"}>
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
  );
};

export default Aside;
