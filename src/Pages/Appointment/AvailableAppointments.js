import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'; 
import Service from './Service';
import BookingModal from './BookingModal';


const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

  return (
    <div>
        <h2 className='text-xl text-secondary text-center underline'>Available Appointment on {format(date, 'PP')}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                services.map(service => <Service
                key={service._id}
                service={service}
                setTreatment={setTreatment}
                ></Service>)
            }
        </div>
        {treatment && <BookingModal 
        date={date} 
        treatment={treatment} 
        setTreatment={setTreatment}
        ></BookingModal>}
    </div>
  )
}

export default AvailableAppointments
