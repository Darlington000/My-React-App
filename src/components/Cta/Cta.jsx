import React from "react";
import "./Cta.css";

const Cta = () => {
  return (
    <div>
      {/* <!-- CALL TO ACTION SECTION --> */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Start your Learning Journey</h2>
          <p>
            Join us today and start learning practical digital skills that can
            transform your future
          </p>
          <a href="#top" className="cta-button">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Cta;
