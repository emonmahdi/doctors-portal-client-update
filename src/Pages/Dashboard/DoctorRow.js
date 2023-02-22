import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
  const { name, specialty, img , email , _id } = doctor;
 
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
      <label onClick={() => setDeletingDoctor(doctor)} for="doctor-delete-modal" className="btn btn-xs btn-error">
        Delete
      </label>
      <Link to={`/dashboard/update/${_id}`}>
        <label className="btn btn-xs btn-primary ml-2">
          Update
        </label>
      </Link>
        
        </td>
    </tr>
  );
};

export default DoctorRow;
