import React from "react";

const Hero = () => {
  return (
    <section
      className="hero about-hero position-relative d-flex align-items-center mb-5"
      style={{
        background: "#11221B",
      }}
    >
      <div className="container">
        <div className="row flex align-items-center justify-content-center">
          <div>
            <h1 className="display-3 fw-bold text-white mb-4 text-center">
              About Us
            </h1>
            <p className="about-hero-lead text-white mb-5 fw-light text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed{" "}
              <br />
              do eiusmod tempor incidident uhan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
