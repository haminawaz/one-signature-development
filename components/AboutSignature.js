import React from "react";
import Link from "next/link";

const AboutSignature = () => {
  return (
    <section
      id="about"
      className="py-5 py-md-6"
      style={{
        background: "#F8F1E5",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-5 text-center text-lg-start">
            <h2 className="section-title">About One Signature</h2>
            <p className="fs-5 mb-3">
              At <span className="fw-semibold">One Signature Developments</span>
              , we transform land into legacy.
            </p>
            <p className="mb-3">
              We partner with experienced operators and capital partners to
              develop iconic, high-impact real estate: from build-to-sell
              townhomes to mixed-use epicenters.
            </p>
            <p className="fs-6 mb-3">
              Each project is a carefully crafted story of place, people, and
              purpose.
            </p>
            <p
              className="mb-3 fw-medium"
              style={{
                color: "#B68B5A",
              }}
            >
              We {`don't`} pitch. We partner. We deliver.
            </p>
            <Link
              href="#projects"
              className="btn btn-dark px-4 py-2"
              style={{
                fontSize: "14px",
              }}
            >
              Learn Our Story
            </Link>
          </div>

          <div className="col-lg-6">
            <div
              className="position-relative w-100"
              style={{
                backgroundImage: "url(/about-signature.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh",
              }}
            >
              <div
                className="absolute-signature-box position-absolute absolute-signature-box"
                style={{
                  background: "#B68B5A",
                  padding: "1rem",
                  minWidth: "160px",
                  zIndex: 2,
                  boxShadow: "0 0.25rem 1rem rgba(0, 0, 0, 0.1)",
                  borderRadius: "0.5rem",
                }}
              >
                <p className="mb-1 text-white fw-bold fs-5">$500M+</p>
                <p className="mb-0 text-white small">Development Portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSignature;
