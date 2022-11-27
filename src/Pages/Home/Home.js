import React from 'react'
import Banner from './Banner'
import ContactUs from './ContactUs'
import DentalCare from './DentalCare'
import Info from './Info'
import MakeAppointment from './MakeAppointment'
import Services from './Services'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div className='px-12'>
      <Banner />
      <Info />
      <Services />
      <DentalCare />
      <MakeAppointment />
      <Testimonials />
      <ContactUs />
    </div>
  )
}

export default Home
