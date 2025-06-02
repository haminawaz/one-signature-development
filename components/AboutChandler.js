import React from "react";
import Image from "next/image";

const AboutChandler = () => {
  return (
    <section
      className="py-5 py-md-6"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div
            className="col-lg-6 mb-5 mb-lg-0 order-lg-2 text-center text-lg-start"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2 className="section-title">About Chandler Chase</h2>
            <p className="mb-4">
              Chandler Chase is the founder of One Signature Developments, where
              he leads the creation of walkable, community-centered projects
              across emerging markets. From build-to-rent neighborhoods to
              mixed-use destinations, his work blends design, strategy, and
              legacy. Inspired by his father’s passing and a family home
              renovation, Chandler builds with purpose—turning overlooked land
              into places worth coming home to.
            </p>
          </div>
          <div
            className="col-lg-6 order-lg-1"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="ratio ratio-16x9 shadow-lg rounded-3">
              <div style={{ background: "#C4C4C4" }} className="rounded-3">
                <Image
                  src="/owner.png"
                  alt="Chandler Chase Community"
                  fill
                  style={{ objectFit: "cover", background: "#C4C4C4" }}
                  className="img-fluid rounded-3"
                />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChandler;
