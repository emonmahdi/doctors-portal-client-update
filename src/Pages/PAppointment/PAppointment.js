import React, { useState } from 'react'
import PAppointmentBanner from './PAppointmentBanner'
import PAvailableAppointment from './PAvailableAppointment'

const PAppointment = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div>
       <PAppointmentBanner date={date} setDate={setDate} />
       <PAvailableAppointment date={date} />
    </div>
  )
}

export default PAppointment
