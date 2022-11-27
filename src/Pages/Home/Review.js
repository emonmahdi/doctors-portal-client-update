import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="flex items-center mt-4">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4 ">
              <img src={review.img} className='w-16' alt='avatar' />
            </div>
          </div>
          <div>
            <h3 className="text-2xl">{review.name}</h3>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
