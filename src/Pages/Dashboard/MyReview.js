import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
  // const [reviews, setReviews] = useState('');
  const [user, loading, error] = useAuthState(auth);
   
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');

  
 


  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const reviews = {
      description: description, 
      address:address,
      name:user?.displayName,
      photo:user?.photoURL
    }

    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
        'content-type': "application/json",
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(reviews)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      if(data.insertedId){
        toast.success("Review add Successfully");
        e.target.reset();
      }
    })
    console.log(reviews);
  }


  return (
    <div className='border-2 border-teal-400 bg-white rounded-lg w-2/4 p-4 my-4'>
      <h2 className='my-4 font-bold text-xl px-4'>My Review </h2>
      <form onSubmit={handleReviewSubmit} className="grid grid-cols-1 gap-2 p-4 w-full  "> 
          <textarea onChange={(e) => setDescription(e.target.value)} className="textarea lg:w-full max-w-xs mb-2 h-36 input input-bordered w-full" placeholder="Your Message"></textarea> 
          <input
              type="text" 
              name="name"
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Address'
              className="input input-bordered w-full max-w-xs mb-1"
            />
            <input type="submit" className='btn btn-md btn-primary w-fit' value='Submit' />
      </form>
    </div>
  )
}

export default MyReview
