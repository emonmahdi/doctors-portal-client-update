import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, NavLink } from "react-router-dom";
import  * as FaIcon from 'react-icons/fa'; 
import { RiMapPinAddFill } from "react-icons/ri"; 
import * as MdIcon from "react-icons/md";

import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import useDoctor from "../../hooks/useDoctor";
import DashboardNavBar from "./DashboardNavBar";


const sideBarStyle = {
  background: '#1A3758',
  color:'#fff',
  fontSize: '16px',
  width:'220px',
  position: 'relative',
  top:'0px',
  left:'0px',
  borderRadius: '10px'
}

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [doctor] = useDoctor(user);

  const [classState, setClassState] = useState(false)
   

  const handleToggleClass = (e) => {
    setClassState(classState => !classState)
  }

  let toggleClassCheck = classState ? 'menuActiveClass' : null;


  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item selection
  /* function handleItemClick(item) {
    setSelectedItem(item);
  }

  const userItems = [
    {
      id: 1,
      title: 'My Profile',
      route: '/dashboard'
    },
    {
      id: 2,
      title: 'My Appointment',
      route: '/dashboard/myappoinment'
    },
    {
      id: 3,
      title: 'My Review',
      route: '/dashboard/review'
    },
  ] */


  return (
    <>
    <DashboardNavBar />
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-4 bg-gray-300"> 
      
        <Outlet />
        {/* <!-- Page content here --> */}
        
      </div> 
      <div className={"drawer-side"} style={sideBarStyle}>
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-auto text-white">
          {/* <!-- Sidebar content here --> */}
         { !admin ?  <> 

          <li>
            <NavLink to='/dashboard/profile' activeClassName="menuActiveClass"> <span> <FaIcon.FaUserCircle />  </span>  My Profile</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/myappoinment' activeClassName="menuActiveClass"> <span><MdIcon.MdBorderColor /></span> My Appointment</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/review' activeClassName="menuActiveClass"><span><FaIcon.FaStar /></span> My Review</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/history' activeClassName="menuActiveClass"><span><MdIcon.MdHistory /></span> My History</NavLink>
          </li>
         </>
         : 
         <li>
            <>
            <NavLink to='/dashboard/profile' activeClassName="menuActiveClass"> <span> <FaIcon.FaUserCircle />  </span> Profile</NavLink>
            <NavLink to='/dashboard/users' activeClassName="menuActiveClass"> <span><FaIcon.FaUsers /></span> Users</NavLink>
            <NavLink to='/dashboard/addDoctor' activeClassName="menuActiveClass"><span><RiMapPinAddFill /></span> Add a Doctor</NavLink>
            <NavLink to='/dashboard/blog' activeClassName="menuActiveClass"><span><MdIcon.MdPostAdd /></span> Add Blog</NavLink>
            <NavLink to='/dashboard/faq' activeClassName="menuActiveClass"><span><MdIcon.MdOutlinePlaylistAdd /></span> Add FAQ</NavLink>
            <NavLink to='/dashboard/manageDoctor' activeClassName="menuActiveClass"><span><FaIcon.FaPollH /></span> ManageDoctor</NavLink>
            <NavLink to='/dashboard/allbooking' activeClassName="menuActiveClass"><span><MdIcon.MdCalendarViewWeek/></span> All Bookings</NavLink>
            </>
          </li>} 
          
          {doctor && <li>
            <>
            <Link to='/dashboard/patients'>Patient List</Link> 
            </>
          </li>}
        </ul>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
