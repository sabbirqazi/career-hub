import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="bg-gray-100">
      <div className="navbar my-container ">
        <div className="navbar-start ">
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
               
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li >
                <NavLink
                  to="/statistics"
                  aria-label="Statistics"
                  title="Statistics"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
               
                <NavLink
                  to="/appliedjob"
                  aria-label="Applied Job"
                  title="Applied Job"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Applied Job
                </NavLink>
              </li>
              <li>
               
                <NavLink
                  to="/blog"
                  aria-label="Blog"
                  title="Blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            aria-label="GlassWall"
            title="GlassWall"
            className=" normal-case text-xl"
          >
            GlassWall
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink
                to="/statistics"
                aria-label="Statistics"
                title="Statistics"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              
              <NavLink
                to="/appliedjob"
                aria-label="Applied Job"
                title="Applied Job"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Applied Job
              </NavLink>
            </li>
            <li>
              
              <NavLink
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'>Start Applying</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
