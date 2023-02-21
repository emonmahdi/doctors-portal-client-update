import React from 'react'
import { useQuery } from 'react-query';
import Slider from "react-slick";
import Loading from '../Shared/Loading';
import DoctorCard from './DoctorCard';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const OurDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
    fetch("http://localhost:5000/all/doctor")
    .then((res) => res.json())
  ); 
  if (isLoading) {
    return <Loading />;
  }


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='my-24 px-8 our-doctors'>
      <div className='text-center mb-8'>
        <h3 className='text-primary text-xl font-bold'>Our Doctors</h3>
        <h2 className='text-4xl'>Professors, Doctors and Other Specialists</h2>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10 mt-10 doctor-slider'>
      <Slider {...settings}>
        {
           doctors && doctors?.map(doctor =>  
            <>
         
            <DoctorCard
              key={doctor._id}
              doctor={doctor}
              ></DoctorCard> 
          
            </>
            )
        }
    </Slider>
      </div>
    </div>
  )
}

export default OurDoctors
