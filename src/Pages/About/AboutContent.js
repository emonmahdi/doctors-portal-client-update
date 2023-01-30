import React from "react";

import img1 from "../../assets/images/infycare1.jpeg";
import img2 from "../../assets/images/infycare2.jpeg";
import img3 from "../../assets/images/infycare3.jpeg";

const AboutContent = () => {
  return (
    <div className="container mx-auto py-12 px-8">
      <div className="grid grid-cols-2 gap-4">
        <div>
            <div className="flex gap-2 items-center justify-around mb-4">
                <div className="">
                    <img src={img1} className="lg:max-w-sm rounded-lg shadow-2xl  border-4 border-primary" />
                </div>
                <div className="">
                    <img src={img2} className="lg:max-w-sm rounded-lg shadow-2xl border-4 border-primary" />
                </div>
            </div> 
            <div className="flex gap-4 items-center justify-around">
                <div className="w-full">
                    <div className="flex justify-center items-center card shadow-md rounded-xl h-72 bg-primary p-4 ">
                        <h2 className="text-black text-2xl font-bold">10 YEARS <br /> EXPERIENCED</h2>
                    </div>
                </div>
                <div className="w-full"><img src={img3} className="lg:max-w-sm w-full rounded-lg shadow-2xl border-4 border-primary" /></div>
            </div> 
          
        </div>
        <div>
          <div className="lg:px-24">
            <h2 className="text-primary font-bold">ABOUT US</h2>
            <h1 className="text-4xl font-bold">
            Book your clinic appointment with an ease
            </h1>
            <p className="py-6">
            A feature rich and comprehensive medical appointment scheduling software solution to deliver fast and reliable appointment booking experience to patients.
            </p>
            <button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-secondary to-primary">
              Get Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
