import React, { useEffect, useState } from 'react'
import { format } from "date-fns";
import Service from './Service';
import BookingModal from './BookingModal';

const PAvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

  return (
    <div className='py-14'>
      <h3 className='text-secondary text-center text-2xl underline mb-3'>Available Appointment on {format(date, 'PP')} </h3>
      <div className='grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
      {
        services.map(service => <Service
        key={service._id}
        service={service}
        setTreatment={setTreatment}
        > 
        </Service>)
      }
      {treatment && <BookingModal
      treatment={treatment} 
      ></BookingModal>}
      </div>
    </div>
  )
}

export default PAvailableAppointment
