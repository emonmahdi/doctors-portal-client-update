import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'; 
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';


const AvailableAppointments = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, "PP")
    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], () => fetch(`https://doctors-portal-app.onrender.com/available?data=${formattedDate}`)
    .then(res => res.json()) )

    if(isLoading){
        return <Loading />
    }

  /*   useEffect(() => {
        fetch(`https://doctors-portal-app.onrender.com/available?data=${formattedDate}`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [formattedDate]) */

  return (
    <div>
        <h2 className='text-xl text-secondary text-center underline'>Available Appointment on {format(date, 'PP')}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                services?.map(service => <Service
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
        refetch={refetch}
        ></BookingModal>}
    </div>
  )
}

export default AvailableAppointments
