import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import useDoctor from "../../hooks/useDoctor";

const avatar = "https://i.ibb.co/TYh3jwZ/download.png";

const DashboardProfile = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [doctor] = useDoctor(user);
 

  const [users, setUser] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [faqs, setFaqs] = useState([]);

  // All Users
  useEffect(() => {
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  // All Doctors
  useEffect(() => {
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      });
  }, []);

  // Appointments Total
  useEffect(() => {
    const url = `http://localhost:5000/all/bookings`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, []);

  // Review Total
  useEffect(() => {
    const url = `http://localhost:5000/review`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  // Blogs Total
  useEffect(() => {
    const url = `http://localhost:5000/blog`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  // Faqs Total
  useEffect(() => {
    const url = `http://localhost:5000/faq`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFaqs(data);
      });
  }, []);

  // console.log(user)
  return (
    <div>
      <h2 className="text-3xl text-black-500 font-bold text-center mb-12">
        Welcome to your Dashboard
      </h2>
      {/* ====== */}

      <div className="grid grid-cols-2 gap-4">
        {/* user profile */}
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="text-center my-2 w-32 mx-auto">
              <img src={avatar} className="w-fit mx-auto" alt="" />
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-300 p-2 mb-4 px-4 font-bold">
              <div className="">
                <p>Name: </p>
              </div>
              <div className="">
                <p> {user ? user?.displayName : "Patient Name"} </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-300 p-2 mb-4 px-4 font-bold">
              <div className="">
                <p>Role: </p>
              </div>
              <div className="">
                <p>
                  {(admin && "Admin") || user.role === "admin"
                    ? "Admin"
                    : "Patient"}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-300 p-2 mb-4 px-4 font-bold">
              <div className="">
                <p className="font-bold">Email: </p>
              </div>
              <div className="">
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Admin Profile */}
          <div className="">
            {admin && (
              <div className="overflow-hidden">
                <div className="p-8 px-16 mx-8 rounded-lg bg-emerald-500 font-bold text-center mb-4">
                  <h2 className="text-white text-lg font-bold ">Users</h2>
                  <h5 className="text-3xl font-bold">{users.length}</h5>
                </div>
                <div className="p-8 px-8 mx-8 rounded-lg bg-primary font-bold text-center mb-4">
                  <h2 className="text-white text-lg font-bold">Doctors</h2>
                  <h5 className="text-3xl font-bold">{doctors.length}</h5>
                </div>
                <div className="p-8 px-8 mx-8 rounded-lg bg-primary font-bold text-center mb-4">
                  <h2 className="text-white text-lg font-bold">Blogs</h2>
                  <h5 className="text-3xl font-bold">{blogs.length}</h5>
                </div>
              </div>
            )}
          </div>
          <div>
            {admin && (
              <div className="">
                <div className="p-8 px-8 mx-8 rounded-lg bg-secondary font-bold text-center mb-4 overflow-hidden">
                  <h2 className="text-white text-lg font-bold">Appointments</h2>
                  <h5 className="text-3xl font-bold">{appointments.length}</h5>
                </div>
                <div className="p-8 px-8 mx-8 rounded-lg bg-orange-500 font-bold text-center mb-4">
                  <h2 className="text-white text-lg font-bold">Reviews</h2>
                  <h5 className="text-3xl font-bold">{reviews.length}</h5>
                </div>
                <div className="p-8 px-8 mx-8 rounded-lg bg-orange-500 font-bold text-center mb-4">
                  <h2 className="text-white text-lg font-bold">Faqs</h2>
                  <h5 className="text-3xl font-bold">{faqs.length}</h5>
                </div>
              </div>
            )}
          </div> 
        </div>
      </div>

      {/* User Profile */}
    </div>
  );
};

export default DashboardProfile; 
