import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [signOut] = useSignOut(auth);

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

  return (
    <div>
       <h2 className="text-3xl text-black-500 font-bold text-center">
        My Appointment {" "}
      </h2>
      <h2 className="text-md font-bold text-right mb-3">Total Appointments: {appointments.length}</h2> 
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments &&
              appointments?.map((app, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{app.patientName}</td>
                  <td>{app.date}</td>
                  <td>{app.slot}</td>
                  <td>{app.treatment}</td>
                  <td>
                    {(app.price && !app.paid) && <Link to={`/dashboard/payment/${app._id}`}> <button className="btn btn-xs btn-info">Pay</button> </Link>}
                    {(app.price && app.paid) && <div>
                      <p><span className="text-success font-bold">Paid</span></p>  
                      <p>Transaction id: <span className="text-success font-bold">{app.transactionId}</span></p>

                    </div> }
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
