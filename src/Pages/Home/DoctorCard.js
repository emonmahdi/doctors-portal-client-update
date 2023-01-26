import React from "react";
import * as FaIcons from 'react-icons/fa';

const DoctorCard = ({doctor}) => {
    console.log(doctor);
    const {name, img, specialty, description} = doctor;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body text-start">
        <h2 className="card-title">{name}</h2>
        <span className="text-secondary">{specialty}</span>
        <p>{ description ? description : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minus molestiae mollitia aut ipsam? Veniam ipsam asperiores soluta suscipit quos!</p> }</p>
        <div className="social-link flex items-center justify-center gap-4 text-2xl my-2">
            <span><FaIcons.FaFacebook /></span>
            <span><FaIcons.FaTwitter /></span>
            <span><FaIcons.FaInstagram /></span>
        </div>
      </div>
      
    </div>
  );
};

export default DoctorCard;
