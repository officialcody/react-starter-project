import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">React Practice</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            className={
              location.pathname === "/"
                ? "mr-5 text-gray-900 hover:text-gray-600"
                : "mr-5 text-gray-600 hover:text-gray-900"
            }
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              location.pathname === "/todo"
                ? "mr-5 text-gray-900 hover:text-gray-600"
                : "mr-5 text-gray-600 hover:text-gray-900"
            }
            to="/todo"
          >
            Todo App
          </Link>
          <Link
            className={
              location.pathname === "/resizewindow"
                ? "mr-5 text-gray-900 hover:text-gray-600"
                : "mr-5 text-gray-600 hover:text-gray-900"
            }
            to="/resizewindow"
          >
            Window Resize
          </Link>
          <Link
            className={
              location.pathname === "/realtimesearch"
                ? "mr-5 text-gray-900 hover:text-gray-600"
                : "mr-5 text-gray-600 hover:text-gray-900"
            }
            to="/realtimesearch"
          >
            Realtime Search
          </Link>
          <Link
            className={
              location.pathname === "/useEffect"
                ? "mr-5 text-gray-900 hover:text-gray-600"
                : "mr-5 text-gray-600 hover:text-gray-900"
            }
            to="/useEffect"
          >
            UseEffect
          </Link>
        </nav>
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
  );
};

export default Header;
