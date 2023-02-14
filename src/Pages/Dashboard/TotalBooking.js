import React, { useEffect, useState } from "react";
import BookingsTable from "./BookingsTable";

const TotalBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const url = `https://y-silk-zeta.vercel.app/all/bookings`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-black-500 font-bold text-center">
        All Bookings{" "}
      </h2>
      <h1 className="text-xl font-bold text-right text-secondary">
        Total Bookings: {bookings.length}
      </h1>
      <div className="my-4">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Treatment</th>
                <th>Time & Date</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <BookingsTable
                  key={booking._id}
                  booking={booking}
                  index={index}
                ></BookingsTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TotalBooking;
