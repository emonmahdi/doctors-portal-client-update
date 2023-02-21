import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingsTable = ({ booking, index }) => { 
  const { patientName, date, slot, treatment, phone, _id } = booking;
  const [update, setUpdate] = useState(''); 

  const handlePending = (id, text) => {
    axios.put(`http://localhost:5000/booking/status/${id}`)
    .then(res => {
      // if(res.data.acknowledged){
      //   toast.success('Pending booking!')
      // }
      console.log(res.data)
      setUpdate(res.data)
    })
  }

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{patientName}</td>
      <td>{treatment}</td>
      <td>
        {date} 
        <br /> 
        {slot}
      </td>
      <td>{phone}</td>
      <td>
        <select className="select select-bordered w-full max-w-xs">
          <option>
          Pending
          </option>
          {/* <option onClick={handlePending(_id, "Approved")}>
            Pending
          </option> */}
          <option>Complete</option>
          <option>Cancel</option>
        </select>
      </td>
    </tr>
  );
};

export default BookingsTable;
