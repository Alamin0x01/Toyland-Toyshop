import { Navbar, Avatar, Dropdown, Button } from "flowbite-react";

import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const AppNavbar = () => {
  const { user, logOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Navbar className="container mx-auto px-4 py-1" fluid={true} rounded={true}>
      <Link to="/">
        <img
          className="h-12 w-36 md:w-36 md:h-12 md:ml-10"
          src="https://www.cornmillcentre.co.uk/wp-content/uploads/2020/03/00011111177.png"
          alt="logo"
        />
      </Link>

      <div className="flex md:order-2">
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User profile"
                img={`${user?.photoURL}`}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Link to="/">
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Link>
            <Link to="/">
              <Dropdown.Item> Settings</Dropdown.Item>
            </Link>

            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to={"/signin"}>
            <Button size={"sm"}>Get started</Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/toys">All Toys</NavLink>
        <NavLink to="/mytoys">My Toys</NavLink>
        <NavLink to="/addtoy">Add Toys</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
