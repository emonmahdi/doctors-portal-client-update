import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const avatar = 'https://i.ibb.co/TYh3jwZ/download.png'

const Review = ({ review }) => { 
  const {photo, name, description, address} = review;
  // console.log(photo);
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{description}</p>
        <div className="flex items-center mt-4">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4 ">
               
             <img src={avatar} className='w-16' alt='avatar' />
              
            </div>
          </div>
          <div>
            <h3 className="text-2xl">{name}</h3>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
