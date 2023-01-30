import React from 'react'
import CardDoctor from './CardDoctor'

const OurDoctor = () => {
  return (
    <div className='container mx-auto py-8'>
      <div className='text-center'>
        <h2 className="title-header text-lg text-primary ">OUR DOCTOR</h2>
        <p className='text-3xl font-bold '>Meet Best Doctors</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-4 px-8'>
        <CardDoctor />
        <CardDoctor />
        <CardDoctor />
      </div>
    </div>
  )
}

export default OurDoctor
