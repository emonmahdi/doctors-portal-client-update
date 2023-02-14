import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import PAppointment from './Pages/PAppointment/PAppointment';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';
import PatientsList from './Pages/Dashboard/PatientsList';
import TotalBooking from './Pages/Dashboard/TotalBooking';
import Profile from './Pages/Dashboard/Profile';
import Blogs from './Pages/Blog/Blogs';
import AddBlog from './Pages/Dashboard/AddBlog';
import SingleBlog from './Pages/Blog/SingleBlog';
import AddFAQ from './Pages/Dashboard/AddFAQ';

function App() {
  return (
    <div className='lg:max-w-9xl mx-auto'> 
       <Navbar />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='blog' element={<Blogs />} />
          <Route path='blog/:Id' element={<SingleBlog />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='appointment' element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          } />
          <Route path='/dashboard' element={ <RequireAuth>  <Dashboard /> </RequireAuth> }>
            <Route index element={<RequireAuth><Profile /></RequireAuth>} /> 
            <Route path='myappoinment' element={<MyAppointment />}> </Route>
            <Route path='review' element={<MyReview />}> </Route>
            <Route path='history' element={<MyHistory />}> </Route>
            <Route path='payment/:id' element={<Payment />}> </Route>
            <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>}> </Route>
            <Route path='addDoctor' element={<RequireAdmin><AddDoctor /></RequireAdmin>}> </Route> 
            <Route path='manageDoctor' element={<RequireAdmin><ManageDoctors /></RequireAdmin>}> </Route> 
            <Route path='patients' element={<PatientsList />}> </Route>
            <Route path='allbooking' element={<RequireAdmin><TotalBooking /></RequireAdmin>}> </Route> 
            <Route path='blog' element={<RequireAdmin><AddBlog /></RequireAdmin>}> </Route> 
            <Route path='faq' element={<RequireAdmin><AddFAQ /></RequireAdmin>}> </Route> 
          </Route>
          {/* <Route path='pappointment' element={
            <RequireAuth>
              <PAppointment />
            </RequireAuth>
          } /> */}
       </Routes>
       <ToastContainer />
    </div>
  );
}

export default App;
