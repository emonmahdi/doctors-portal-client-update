import React, { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const avatar = "https://i.ibb.co/TYh3jwZ/download.png";

const DashboardNavBar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [user] = useAuthState(auth); 
  const [admin] = useAdmin(user);

  const [signOut, logOutLoading, logOutError] = useSignOut(auth);

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  }

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-neutral border-b-2 border-sky-500">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-primary text-2xl pr-12 mr-8 border-r-2 border-white-500"
            >
              {" "}
              Dental Care
            </Link>
            <h2 className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              {admin ? (
                <span>Admin Dashboard</span>
              ) : (
                <span>User Dashboard</span>
              )}
            </h2>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <img
                  src={user?.photoURL ? user?.photoURL : avatar}
                  className="rounded-full"
                  width="50px"
                  height="50px"
                  alt=""
                />
              </li>
              <li className="pt-4 text-white px-2 text-sm font-bold">
                {user?.displayName}
              </li>
              <button
                onClick={logOut}
                class="bg-pink-500 hover:bg-pink-700 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Log Out
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardNavBar;
