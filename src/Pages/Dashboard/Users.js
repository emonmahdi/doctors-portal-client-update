import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteUserModal from "./DeleteUserModal";
import UserRow from "./UserRow";

const Users = () => {
  const [deleteUser, setDeleteUser] = useState('')
  const { data: users, isLoading, refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
        method: "GET",
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-3xl text-black-500 font-bold text-center">Users </h2> 
      <h2 className="text-xl font-bold text-right">Total Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Make Admin</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {
               users && users?.map((user, index) => <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
                setDeleteUser={setDeleteUser}
                ></UserRow>)
            }
          </tbody>
        </table>{
          deleteUser && <DeleteUserModal
          deleteUser={deleteUser}
          setDeleteUser={setDeleteUser}
          refetch={refetch}
          ></DeleteUserModal>
        }
      </div>
    </div>
  );
};

export default Users;
