import React from 'react'
import InfoCard from './InfoCard'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'


const Info = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-4 px-8'>
      <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock} description="8.00 AM to 9.00 AM" />
      <InfoCard cardTitle="Our Location" bgClass="bg-accent" img={marker} className='bg-primary' description="Banani-1230, Dhaka" />
      <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone} description="01712977007, 01908131513" />
    </div>

  )
}

export default Info
