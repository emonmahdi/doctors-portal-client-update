import React from "react";

const BookingModal = ({ treatment }) => {
    const {name, slots} = treatment; 
  return (
    <div>
      <input type="checkbox" id="booking-modal-2" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
      
        <div className="modal-box">
        <label for="booking-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">
            Booking for: {name}
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p> 
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
