import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  console.log(slots)
  return (
    <div className="card lg:max-w-lg bg-slate-800 border-2 border-teal-300 shadow-xl">
      <div className="card-body text-center text-white">
        <h2 className="text-2xl font-bold text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">
             Try another date
            </span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p className="text-2xl font-bold"><small>Price: ${price}</small></p>
        <div className="card-actions justify-center"> 
          <label htmlFor="booking-modal" 
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-secondary uppercase bg-gradient-to-r from-secondary to-primary">
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
