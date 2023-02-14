import React from "react";
import { toast } from "react-toastify";

const UserRow = ({user, refetch, index, setDeleteUser}) => {
    const {email, role} = user;

    const makeAdmin = () => {
        fetch(`https://y-silk-zeta.vercel.app/user/admin/${email}`, {
            method: "PUT",
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
          if(res.status === 403){
            toast.error('Failed to make an admin!')
          }
          return res.json()
        })
        .then(data => { 
            if(data.modifiedCount > 0){
              refetch();
            toast.success('Successfully make an Admin')
            }
        })
    }

    const makeDoctor = () => {
      fetch(`https://y-silk-zeta.vercel.app/admin/doctor/${email}`, {
        method: 'PUT', 
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
          refetch();
          toast.success('Make Doctor Successfully!')
        }
      })
    }


  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{role !== 'admin'? <>
      <button onClick={makeAdmin} className="btn btn-xs mx-2">Make Admin</button>
      <span> { role !== 'doctor' ? <button onClick={makeDoctor} className="btn btn-xs">Make Doctor</button> : <span className="font-bold text-primary">Doctor</span> } </span>
      </> 
      : <span className="font-bold text-primary">Admin</span>}</td>
      <td>
        <label onClick={() => setDeleteUser(user) } htmlFor="user-delete-modal" className="btn btn-xs btn-error text-white">Remove User</label>
      </td>
    </tr>
  );
};

export default UserRow;
