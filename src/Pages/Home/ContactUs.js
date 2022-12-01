import React from "react";

import bg from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <section
      style={{ background: `url(${bg})` }}
      className="py-16 text-center"
    >
      <div>
        <h4 className="text-xl text-primary">Contact Us</h4>
        <h5 className="text-3xl text-white">Stay connected with us</h5>
      </div>
      <form className="mt-12">
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="input lg:w-full max-w-xs mb-4"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="input lg:w-full max-w-xs mb-4"
          />
        </div>
        <div className="">
          <textarea  className="textarea lg:w-full max-w-xs mb-4" placeholder="Your Message"></textarea>
        </div>
        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </section>
  );
};

export default ContactUs;
