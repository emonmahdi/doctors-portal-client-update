import React from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import DentalCare from "./DentalCare";
import Footer from "../Shared/Footer";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";
import OurDoctors from "./OurDoctors";
import Faq from "./Faq";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Info />
      <DentalCare />
      <OurDoctors />
      <MakeAppointment />
      <Testimonials />
      <Faq />
      <ContactUs />
      <Footer />
      <Services />
    </div>
  );
};

export default Home;
