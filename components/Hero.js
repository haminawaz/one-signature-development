import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="hero position-relative d-flex align-items-center vh-100"
      style={{
        backgroundImage:
          "linear-gradient(#11221B99, #B68B5A33), url(/hero-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "700px",
      }}
    >
      <div className="container">
        <div className="row w-100 flex align-items-center justify-content-center">
          <div className="col-lg-10 col-md-10">
            <h1 className="display-3 fw-bold text-white mb-4 text-center">
              We Build Communities <br />
              Worth Coming Home To
            </h1>
            <p className="lead text-white mb-5 text-center">
              Transforming land into lasting communities through strategic{" "}
              <br />
              partnerships and innovative development.
            </p>
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
              <Link
                href="#projects"
                className="btn text-white"
                style={{
                  background: "#B68B5A",
                }}
              >
                View Projects
              </Link>
              <Link href="#contact" className="btn text-black bg-white">
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
