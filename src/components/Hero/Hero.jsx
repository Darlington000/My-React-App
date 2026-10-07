import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home">
      {/* <!-- HERO SECTION --> */}
      <section class="hero">
        <div class="hero-content">
          <h1>Learn digital skills. Build your career.</h1>
          <p>
            Practical training in fullstack development, UI/UX and graphics
            design.
          </p>
          <a href="/register" class="hero-btn">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
