import React from 'react'

const AboutCounter = () => {
  return (
    <div className='container mx-auto flex justify-around items-center my-8 py-8 shadow border-2 border-orange-200 rounded-lg p-8'>
       <div className='text-center'>
        <h2 className='font-bold text-primary text-5xl'>30</h2>
        <p className='text-black font-bold text-xl my-2'>Specializations</p>
       </div> 
       <div className='text-center'>
        <h2 className='font-bold text-primary text-5xl'>16</h2>
        <p className='text-black font-bold text-xl my-2'>Services</p>
       </div> 
       <div className='text-center'>
        <h2 className='font-bold text-primary text-5xl'>6</h2>
        <p className='text-black font-bold text-xl my-2'>Doctors</p>
       </div> 
       <div className='text-center'>
        <h2 className='font-bold text-primary text-5xl'>230</h2>
        <p className='text-black font-bold text-xl my-2'> Satisfied Patient</p>
       </div> 
    </div>
  )
}

export default AboutCounter
