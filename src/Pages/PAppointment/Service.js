import React from "react";

const Service = ({ service, setTreatment }) => {
    
  const { name, slots } = service;
  console.log(setTreatment);
  return (
    <div>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body text-center">
          <h2 class="text-2xl font-bold text-secondary">{name}</h2>
          <p>
            {slots.length < 1 ? (
              <span className="text-red-500">Try Another date</span>
            ) : (
              <>{slots[0]}</>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <div class="card-actions justify-center">
          <label htmlFor="booking-modal-2" disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-secondary uppercase bg-gradient-to-r from-secondary to-primary">
            Book Appointment
          </label>
          </div> 
 
        </div>
      </div>
    </div>
  );
};

export default Service;
