import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);

  const handleBooking =(e)=> {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null)
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
