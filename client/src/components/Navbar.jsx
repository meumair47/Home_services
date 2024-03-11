import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleMenuItem = () => {
    setOpen(!open);
  };

  return (
    <nav className="layout bg-white shadow-lg py-3 mx-auto">
      <div className="flex items-center justify-between px-4 py-1">
        {/* logo */}
        <div>
          <NavLink
            to="/"
            className="flex items-center gap-1 font-bold text-xl md:text-3xl"
          >
            <h1 className="text-gray-500">AU</h1>
            <span className="text-orange-400">Services</span>
          </NavLink>
        </div>

        {/* menu for large devices */}
        <div className="md:flex items-center gap-6 font-semibold hidden ">
          <ul className="flex items-center gap-4 ">
            <li>
              <NavLink to="/" className="hover:text-blue-500">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-blue-500">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-blue-500">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-blue-500">
                Contact
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/logout" className="hover:text-blue-500">
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/register" className="hover:text-blue-500">
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="hover:text-blue-500">
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* menu for small devices */}

        <div className="md:hidden">
          {open ? (
            <VscClose
              onClick={() => setOpen(false)}
              className="text-gray-500 cursor-pointer"
            />
          ) : (
            <RiMenu2Fill
              onClick={() => setOpen(true)}
              className="text-gray-500 cursor-pointer"
            />
          )}
        </div>

        <ul
          className={
            open
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900] bg-white ease-in-out duration-500 flex flex-col gap-4 font-semibold px-5 z-50"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <li>
            <NavLink to="/" onClick={handleMenuItem}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleMenuItem}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={handleMenuItem}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleMenuItem}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" onClick={handleMenuItem}>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={handleMenuItem}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
