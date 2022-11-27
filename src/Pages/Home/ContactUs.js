import React from "react";

import bg from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <section
      style={{ background: `url(${bg})` }}
      className="my-24 py-16 text-center"
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
            class="input w-full max-w-xs mb-4"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            class="input w-full max-w-xs mb-4"
          />
        </div>
        <div>
          <textarea class="textarea w-full max-w-xs mb-4" placeholder="Your Message"></textarea>
        </div>
        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </section>
  );
};

export default ContactUs;
