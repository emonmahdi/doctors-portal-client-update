import React from "react";

import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{ background: `url(${footer})`, backgroundColor:'#000', color:'#fff', backgroundSize: "cover" }}
      className="text-dark-content"
    >
      <div className="footer p-10">
      <div>  
        <span className="footer-title">Services</span>
        <a className="link link-hover">Fluoride Treatment</a>
        <a className="link link-hover">Cavity Filling</a>
        <a className="link link-hover">Teeth Whitening</a>
        <a className="link link-hover">Teeth Cleaning</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      </div>
      <div className="text-center">
        <p>Copyright © 2022 - All right reserved by Dental Care</p>
      </div>
    </footer>
  );
};

export default Footer;
