import React from "react";

import img1 from '../../assets/images/people1.png'

const CardDoctor = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <img src={img1} className='w-16 rounded-full mx-auto' alt="" />
        <h2 className="font-bold">John Doly</h2>
        <p className="text-center">Cavity Protection</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default CardDoctor;
