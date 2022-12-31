import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({deletingDoctor, refetch, setDeletingDoctor}) => {
  const {name, email} = deletingDoctor;

  const handleDelete = () => {
    fetch(`https://doctors-portal-app.onrender.com/doctor/${email}`, {
        method: "DELETE",
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount){
            toast.success(`Doctor ${name} is deleted`);
            setDeletingDoctor(null);
            refetch();
        }
    })
  }

  return (
    <div> 

      <input type="checkbox" id="doctor-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete ${name}!
          </h3>
          <p class="py-4">
            If you one time delete then are not backup your doctor. So be carefully delete!
          </p>
          <div class="modal-action">
          <button onClick={() => handleDelete()} class="btn btn-xs btn-error text-white">Delete</button>
            <label for="doctor-delete-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
