import { Link } from "react-router-dom";
import img from "../../../assets/23214909_1164.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to='/' className={({ isActive }) => isActive ? "text-blue-600" : "default"}>Home</Link>
      </li>
      <li>
        <Link to='/allToys' className={({ isActive }) => isActive ? "text-blue-600" : "default"}>All Toys</Link>
      </li>
      <li>
        <Link to='/blog' className={({ isActive }) => isActive ? "text-blue-600" : "default"}>Blogs</Link>
      </li>
      <li>
        <Link to='/myToys' className={({ isActive }) => isActive ? "text-blue-600" : "default"}>My Toys</Link>
      </li>
      <li>
        <Link to='/addToy' className={({ isActive }) => isActive ? "text-blue-600" : "default"}>Add Toy</Link>
      </li>
      <li>
        <Link to='/login' className={({ isActive }) => isActive ? "text-blue-600" : "default"}>Login</Link>
      </li>
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
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Gift Boucher</button>
      </div>
    </div>
  );
};

export default Navbar;
