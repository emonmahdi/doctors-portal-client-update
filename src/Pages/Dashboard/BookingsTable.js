import React from "react";

const BookingsTable = ({ booking, index }) => {
  console.log(booking);
  const { patientName, date, slot, treatment, phone } = booking;
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
          <option>Complete</option>
          <option>Cancel</option>
        </select>
      </td>
    </tr>
  );
};

export default BookingsTable;
