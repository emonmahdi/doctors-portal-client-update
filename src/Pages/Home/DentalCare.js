import React from "react";

import img from '../../assets/images/treatment.png'

const DentalCare = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={img}
          className="lg:max-w-md rounded-lg shadow-2xl"
        />
        <div className="lg:px-24">
          <h1 className="text-4xl font-bold">The Procedure for a Check-up at Denteeth</h1>
          <p className="py-6">
          Follow the procedure to have your mouth & oral health thoroughly checked with an assigned specialist. The doctor will give a thorough check of your mouth to find potential risks.
          </p>
          <button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
