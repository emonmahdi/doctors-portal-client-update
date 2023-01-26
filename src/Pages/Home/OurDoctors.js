import React from 'react'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorCard from './DoctorCard';

const OurDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
        method: "GET",
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );
  console.log(doctors);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='my-24 px-8'>
      <div className='text-center'>
        <h3 className='text-primary text-xl font-bold'>Our Doctors</h3>
        <h2 className='text-4xl'>Professors, Doctors and Other Specialists</h2>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
        {
            doctors?.map(doctor => <DoctorCard
            key={doctor._id}
            doctor={doctor}
            ></DoctorCard>)
        }
      </div>
    </div>
  )
}

export default OurDoctors
