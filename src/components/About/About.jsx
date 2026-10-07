import React from "react";
import pro from "../../assets/pro.jpg";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      {/* <!-- ABOUT SECTION --> */}
      <section class="about" id="about">
        <div class="about-container">
          <div class="about-text">
            <span class="about-label">About us</span>
            <h2>Meet The Owner</h2>

            <p>
              Write two or three sentences here about who you are, why you
              started the academy, and what students can expect when they learn
              with you.
            </p>

            <ul class="about-points">
              <li>Hands-on, project-based classes</li>
              <li>Small groups with personal feedback</li>
              <li>Practical skills students can use right away</li>
            </ul>

            <a href="/Aboutus" class="about-btn">
              Know More
            </a>
          </div>

          <div class="about-photo">
            <img src={pro} alt="pic" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
