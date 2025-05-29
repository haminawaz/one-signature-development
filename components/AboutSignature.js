import React from "react";
import Image from "next/image";
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
          <div className="col-lg-6 mb-5 mb-lg-0 pe-5">
            <h2 className="section-title">About One Signature</h2>
            <p className="fs-5 mb-4">
              At <span className="fw-semibold">One Signature Developments</span>
              , we transform land into legacy.
            </p>
            <p className="mb-4">
              We partner with experienced operators and capital partners to
              develop iconic, high-impact real estate: from build-to-sell
              townhomes to mixed-use epicenters.
            </p>
            <p className="fs-6 mb-4">
              Each project is a carefully crafted story of place, people, and
              purpose.
            </p>
            <p
              className="mb-3  fw-medium"
              style={{
                color: "#B68B5A",
              }}
            >
              We {`don't`} pitch. We partner. We deliver.
            </p>
            <Link
              href="#projects"
              className="btn btn-dark px-3 py-2"
              style={{
                fontSize: "14px",
              }}
            >
              Learn Our Story
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <div
                className="position-absolute bottom-0 end-0 p-4 shadow"
                style={{ zIndex: 2, width: "180px", background: "#B68B5A" }}
              >
                <p className="mb-1 text-white fw-bold">$500M+</p>
                <p className="mb-0 small text-white">Development Portfolio</p>
              </div>
              <div className="ratio ratio-4x3 shadow-lg">
                <Image
                  src="/about-signature.png"
                  alt="Modern Signature Living Space"
                  fill
                  className="img-fluid object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSignature;
