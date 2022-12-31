import React from "react";
import { toast } from "react-toastify";

const UserRow = ({user, refetch, index}) => {
    const {email, role} = user;

    const makeAdmin = () => {
        fetch(`https://doctors-portal-app.onrender.com/user/admin/${email}`, {
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

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{role !== 'admin'? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> : <span>Already Admin</span>}</td>
      <td><button class="btn btn-xs">Remove User</button></td>
    </tr>
  );
};

export default UserRow;
