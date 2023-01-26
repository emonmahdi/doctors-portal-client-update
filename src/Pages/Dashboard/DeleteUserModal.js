import React from "react";
import { toast } from "react-toastify";

const DeleteUserModal = ({deleteUser, setDeleteUser, refetch}) => { 
    const {email} = deleteUser;
    

    const handleDeleteUser = () => {
        fetch(`https://y-silk-zeta.vercel.app/user/${email}`, {
            method: 'DELETE',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
        .then(result => {
            console.log(result);
            if(result.deletedCount){
                toast.success('User delete successfully');
                setDeleteUser(null);
                refetch();
            }
        })
    }

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="user-delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative"> 
          <h3 className="text-lg font-bold">
            Are You Sure Delete User! - <span className="text-primary">{email}</span> 
          </h3> 
          <div className="modal-action">
            <button onClick={() => handleDeleteUser()} className="btn btn-xs btn-error text-white">Delete</button>
            <label htmlFor="user-delete-modal" className="btn btn-xs">
            Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
