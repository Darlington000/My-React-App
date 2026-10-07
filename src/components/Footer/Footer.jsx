import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        {/* <!-- ABOUT --> */}
        <div className="footer-box">
          <h2>Our Digital Skills Academy</h2>

          <p>
            Empowering students with practical digital skills for a better
            future
          </p>
        </div>

        {/* <!-- QUICK LINKS --> */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#testimonials">Courses</a>
          <a href="#contact">Contact</a>
        </div>

        {/* <!-- CONTACT --> */}
        <div className="footer-box">
          <h3>Contact Us</h3>

          <p>Email: darlingben@gmail.com</p>
          <p>Phone: +234 813 817 7632</p>
          <p>Location: Owerri, Imo State</p>
        </div>
      </div>

      {/* <!-- COPYRIGHT --> */}
      <div className="copyright">
        <p>&copy; 2026 Our Digital Skills Academy. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
