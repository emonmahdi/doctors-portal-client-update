import React, { useState } from "react";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; 
import chair from '../../assets/images/chair.png'


const AppointmentBanner = ({date, setDate}) => {
    
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:max-w-lg rounded-lg shadow-2xl"
          alt="Chair image dental"
        />
        <div>
            <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            />
        <p>You have select date: </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
