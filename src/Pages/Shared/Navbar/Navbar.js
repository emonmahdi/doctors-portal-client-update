import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const listColor = {
  color: '#fff'
}

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, logOutLoading, logOutError] = useSignOut(auth);

  const navigate = useNavigate(); 
  const [appointments, setAppointments] = useState([]);

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };



  useEffect(() => { 
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            navigate("/");
            signOut(auth);
            localStorage.removeItem("accessToken");
          }
          return res.json();
        })
        .then((data) => {
          setAppointments(data);
        });
    }
  }, [user]);


  const menuItems = (
    <>
      <li style={listColor}>
        <NavLink to="/" activeClassName="menuActiveClass">Home</NavLink>
      </li>
      <li style={listColor}>
        <NavLink to="/about" activeClassName="menuActiveClass">About</NavLink>
      </li>
      <li style={listColor}>
        <NavLink to="/appointment" activeClassName="menuActiveClass">Appointment {appointments.length ? <span style={{background:'black', padding: '5px', color: '#fff', border: '1px solid #fff',  textAlign: 'center', marginLeft: '-10px', marginTop: '-15px', borderRadius: '30px', fontSize: '9px'}}>{appointments.length }</span>  : "" }  </NavLink>
      </li>
      <li style={listColor}>
        <NavLink to="/blog" activeClassName="menuActiveClass">Blogs</NavLink>
      </li>
      {user && (
        <li style={listColor}>
          <NavLink to="/dashboard" activeClassName="menuActiveClass">Dashboard </NavLink>
        </li>
      )}
      <li style={listColor}>
        {user ? (
          <button onClick={logOut} className="btn btn-ghost">
            Sign Out
          </button>
        ) : (
          <NavLink to="/login" activeClassName="menuActiveClass">Login</NavLink>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              {menuItems}
              <Link to="/ask">
                <PrimaryButton> Ask a Question</PrimaryButton>
                {/* <button className="btn bg-primary px-6 py-2 text-black rounded-lg mx-2 hover:text-white">
                 
                </button> */}
              </Link>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-bold text-gradient-to-r from-secondary to-primary text-white">
            Dental Care
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          <Link to="/ask">
              <PrimaryButton> Ask a Question</PrimaryButton>
          </Link>
        </div>
        <div className="navbar-end">
          <label
            tabIndex="1"
            htmlFor="dashboard-sidebar"
            className="btn btn-ghost lg:hidden"
          >
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
