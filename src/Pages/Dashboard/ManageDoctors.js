import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState('');
  const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
    fetch("https://y-silk-zeta.vercel.app/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl mb-3">Manage Doctor {doctors.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow 
              key={doctor._id} 
              doctor={doctor} 
              refetch={refetch} 
              index={index}
              setDeletingDoctor={setDeletingDoctor}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && <DeleteConfirmModal
      deletingDoctor={deletingDoctor}
      refetch={refetch}
      setDeletingDoctor={setDeletingDoctor}
      ></DeleteConfirmModal>}
    </div>
  );
};

export default ManageDoctors;
