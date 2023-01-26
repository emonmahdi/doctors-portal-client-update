import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";


const sideBarStyle = {
  background: '#3A4255',
  color:'#fff',
  fontSize: '14px',
  width:'200px',
  position: 'relative',
  top:'0px',
  left:'0px'
}

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-4 bg-green-100">
        <h2 className="text-3xl text-purple-500 font-bold">Welcome to your Dashboard</h2>
        <Outlet />
        {/* <!-- Page content here --> */}
        
      </div> 
      <div className="drawer-side" style={sideBarStyle}>
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-auto text-white">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to='/dashboard/myappoinment'>My Appointment</Link>
          </li>
          <li>
            <Link to='/dashboard/review'>My Review</Link>
          </li>
          <li>
            <Link to='/dashboard/history'>My History</Link>
          </li>
          {admin &&<li>
            <>
            <Link to='/dashboard/users'>Users</Link>
            <Link to='/dashboard/addDoctor'>Add a Doctor</Link>
            <Link to='/dashboard/manageDoctor'>ManageDoctor</Link>
            </>
          </li>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
