import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, handleSignout } = useContext(AuthContext);
  const handleLogout = () => {
    handleSignout();
  };

  return (
    <div>
      <div className="navbar  text-black  font-semibold">
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
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/all-toys">All Toys</NavLink>
              </li>
              <li>
                <NavLink to="/my-toys">My Toys</NavLink>
              </li>
              <li>
                <NavLink to="/add-toys">Add A Toy</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blogs</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img
              className="h-12 w-36 md:w-36 md:h-12 md:ml-10"
              src="https://www.cornmillcentre.co.uk/wp-content/uploads/2020/03/00011111177.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center mx-50% hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 ">
            <li>
              <NavLink to="/all-toys">All Toys</NavLink>
            </li>
            <li>
              <NavLink to="/my-toys">My Toys</NavLink>
            </li>
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add-toys">Add A Toy</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blogs</NavLink>
            </li>
          </ul>
        </div>
        <div className=" md:mr-16 mr-5 md:ml-80">
          <>
            {user ? (
              <>
                {user.photoURL && (
                  <img
                    title={user.displayName}
                    className="w-14 h-14 rounded-full border-2 border-yellow-300"
                    src={user?.photoURL}
                    alt=""
                  />
                )}
                <button
                  onClick={handleLogout}
                  className="ml-5 border-none btn text-white bg-gradient-to-r from-yellow-400 to-blue-300 hover:bg-gradient-to-bl  focus:outline-none  font-medium  text-sm  text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="ml-5 border-none btn text-white bg-gradient-to-r from-yellow-400 to-blue-300 hover:bg-gradient-to-bl  focus:outline-none  font-medium  text-sm  text-center">
                  Login
                </button>
              </Link>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
