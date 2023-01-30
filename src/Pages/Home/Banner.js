import React from "react";

import bgImg from '../../assets/images/bg-1.jpg'
import chairImg from '../../assets/images/chair.png'
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";


const bannerStyle ={
  // background:' #3A4255',
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%), url(bgImg)",

  color:'#fff'
  
}

const Banner = () => {
  return (
    <div style={bannerStyle}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bgImg}
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">High Innovative Professional Doctors Here</h1>
            <p className="py-6 text-lg ">
             Our specialist are highly compassionate and Professional in with health. They are experienced in total health. They are very helpful for every patient and give friendly discussion.
            </p>
             <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
