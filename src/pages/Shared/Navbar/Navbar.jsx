import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../../../assets/23214909_1164.png";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li className="font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-blue-500" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink
          to="/allToys"
          className={({ isActive }) => (isActive ? "text-blue-500" : "default")}
        >
          All Toys
        </NavLink>
      </li>
      <li className="font-semibold">
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "text-blue-500" : "default")}
        >
          Blogs
        </NavLink>
      </li>
      {user?.email ? (
        <>
          <li className="font-semibold">
            <NavLink
              to="/myToys"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "default"
              }
            >
              My Toys
            </NavLink>
          </li>
          <li className="font-semibold">
            <NavLink
              to="/addToy"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "default"
              }
            >
              Add Toy
            </NavLink>
          </li>
          <li>
            <button className="btn btn-ghost" onClick={handleLogOut}>
              LogOut
            </button>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "default"
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#D6F4FF] h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-12 h-12" src={img} alt="" />
          <span className="lg:text-3xl font-bold">Kid Riders</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
        {user?.email ? (
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-success">Gift Boucher</button>
      </div>
    </div>
  );
};

export default Navbar;
