import React, { useState } from 'react'
import Footer from '../Shared/Footer'
import Navbar from '../Shared/Navbar/Navbar';
import AppointmentBanner from './AppointmentBanner'
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

  return (
    <div>
        <Navbar />
        <AppointmentBanner date={date} setDate={setDate} />
        <AvailableAppointments date={date} />
        <Footer />
    </div>
  )
}

export default Appointment
