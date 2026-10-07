import React from "react";
import pix from "../../assets/pix.jpg";
import piq from "../../assets/piq.jpg";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div>
      {/* <!-- TESTIMONIALS --> */}
      <section class="testimonials" id="testimonials">
        <div class="testimonials-container">
          <div class="testimonials-heading">
            <span class="testimonials-label">Testimonials</span>
            <h2>What our students say</h2>
          </div>

          <div class="testimonials-grid">
            <article class="testimonial-card">
              <img src={pix} alt="Student 1" class="testimonial-img" />
              <div class="stars" aria-label="5 out of 5 stars">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <p class="testimonial-text">
                Write what this student said about the academy here. Keep it
                short, honest and specific about what they learned.
              </p>
              <h3 class="testimonial-name">Student 1</h3>
              <span class="testimonial-course">Fullstack Development</span>
            </article>

            <article class="testimonial-card">
              <img src={piq} alt="Student 2" class="testimonial-img" />
              <div class="stars" aria-label="5 out of 5 stars">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <p class="testimonial-text">
                Write what this student said about the academy here. Keep it
                short, honest and specific about what they learned.
              </p>
              <h3 class="testimonial-name">Student 2</h3>
              <span class="testimonial-course">UI/UX Design</span>
            </article>

            <article class="testimonial-card">
              <img src={piq} alt="Student 3" class="testimonial-img" />
              <div class="stars" aria-label="5 out of 5 stars">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <p class="testimonial-text">
                Write what this student said about the academy here. Keep it
                short, honest and specific about what they learned.
              </p>
              <h3 class="testimonial-name">Student 3</h3>
              <span class="testimonial-course">Graphics Design</span>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
