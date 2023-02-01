import React from "react";

const InfoCard = ({img, cardTitle, bgClass, description}) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl text-white ${bgClass} px-4`}>
      <figure className="pl-5  pt-4">
        <img src={img} alt="Clock Image Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{description}</p> 
      </div>
    </div>
  );
};

export default InfoCard;
