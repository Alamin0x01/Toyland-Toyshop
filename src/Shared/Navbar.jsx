import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        console.log("log out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const menuLinks = (
    <>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/allToys"> All Toys</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/myToys"> My Toys</Link>
          </li>
          <li>
            <Link to="/addAToy"> Add A Toy</Link>
          </li>
        </>
      )}
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-pink-50">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              {menuLinks}
            </ul>
          </div>
          <Link className="">
            <img
              className="h-12"
              src="https://www.brunswickshopping.com/wp-content/uploads/2017/10/toylmnd.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {menuLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              {user?.photoURL && (
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <img
                    src={user?.photoURL}
                    className="h-12 w-12 rounded-full border-2 border-orange me-3"
                    alt=""
                  />
                </div>
              )}

              <button
                className="p-2 rounded-xl border-orange border-2 font-semibold hover:bg-pink-500 hover:text-white"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              className="border p-2 rounded-xl border-orange font-semibold hover:bg-sky-400 hover:text-white"
              to="/signin"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
