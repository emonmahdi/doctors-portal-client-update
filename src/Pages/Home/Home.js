import React from 'react'
import Banner from './Banner'
import ContactUs from './ContactUs'
import DentalCare from './DentalCare'
import Footer from '../Shared/Footer'
import Info from './Info'
import MakeAppointment from './MakeAppointment'
import Services from './Services'
import Testimonials from './Testimonials'
import OurDoctors from './OurDoctors'

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <DentalCare />
      <OurDoctors />
      <MakeAppointment />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
