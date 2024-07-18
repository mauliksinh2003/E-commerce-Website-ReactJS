import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../../Pages/Cart/Cart";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, login, logout } = useAuth0();

  const navigationBar = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: isAuthenticated ? "Logout" : "Login",
      path: isAuthenticated ? "/logout" : "/login",
    },
  ];

  const navigate = useNavigate();

  const gotocart = () => {
    navigate("/cart");
  };

  return (
    <div>
      <header className="text-gray-600 body-font shadow-xl z-999 top-0 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Rathore's e-club</span>
          </a>
          <nav className="md:ml-auto mr-4 flex flex-wrap items-center text-blue-600 text-base justify-center">
            {navigationBar.map((item) => (
              <Link
                to={item.path}
                className="mr-5 text-2xl hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <button
            onClick={gotocart}
            className="inline-flex items-center text-white bg-blue-500 border-0 py-2 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0 px-4"
          >
            Go to cart
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
