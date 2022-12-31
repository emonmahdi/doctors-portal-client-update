import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";

const PAppointmentBanner = ({date, setDate}) => {
  

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={chair} className="lg:max-w-lg rounded-lg shadow-2xl" />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate} 
          /> 
        </div>
      </div>
    </div>
  );
};

export default PAppointmentBanner;
