import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';


const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, "PP");

  const handleBooking =(e)=> {
    e.preventDefault();
    const slot = e.target.slot.value; 

    const booking = {
      treatmentId: _id,
      treatment: name,
      date:formattedDate,
      slot,
      price,
      patient:user.email,
      patientName: user.displayName, 
      phone: e.target.phone.value
    }

    fetch('http://localhost:5000/booking',{
      method:"POST",
      headers:{
        'content-type': "application/json"
      },
      body: JSON.stringify(booking)
    }) 
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.success){
        toast(`Appointment is set ${formattedDate} on ${slot}`);
      }
      else{
        toast.error(`Already have an appointment ${data.booking?.date} on ${data.booking?.slot}`)
      } 
      refetch();
      // close the modal data
      setTreatment(null);
    })

   

  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary mb-2">
            Booking for: {name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-2 justify-items-center">
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs mb-1"
            />
            <select name="slot" className="select select-bordered w-full max-w-xs">
                {
                    slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                } 
            </select>
            <input 
              type="text"
              disabled
              value={user.displayName || ""}
              name="name"
              className="input input-bordered w-full max-w-xs mb-1"
            />
            <input
              type="text"
              disabled
              value={user.email || ""}
              name="email"
              className="input input-bordered w-full max-w-xs mb-1"
            />
            <input
              type="text"
              placeholder="Your Phone"
              name="phone"
              className="input input-bordered w-full max-w-xs mb-1"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
