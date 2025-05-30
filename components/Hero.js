import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="hero position-relative d-flex align-items-center"
      style={{
        backgroundImage:
          "linear-gradient(#11221B99, #B68B5A33), url(/hero-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="container text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-8 col-lg-10 col-md-11 col-sm-12">
            <h1 className="fw-bold text-white mb-4 display-5 display-sm-4 display-md-3 display-lg-2">
              We Build Communities <br className="d-none d-md-block" />
              Worth Coming Home To
            </h1>
            <p
              className="lead text-white mb-5 px-2 px-md-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Transforming land into lasting communities through strategic{" "}
              <br className="d-none d-md-block" />
              partnerships and innovative development.
            </p>
            <div
              className="d-flex flex-column flex-sm-row justify-content-center gap-3"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <Link
                href="#projects"
                className="btn text-white px-4 py-2 btn-view"
                style={{ background: "#B68B5A" }}
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="btn text-black bg-white px-4 py-2 btn-investors"
              >
                Join The Investors Group
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
