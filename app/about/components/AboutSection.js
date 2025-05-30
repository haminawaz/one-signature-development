import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="position-relative about-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="mb-5" data-aos="fade-up" data-aos-delay="400">
            <Image
              src="/about/about-hero.jpg"
              alt="About Image"
              fill
              style={{ objectFit: "cover", background: "#C4C4C4" }}
              className="position-relative rounded-4"
            />
          </div>
          <div className="col-lg-11 text-center">
            <p className="mb-4 about-section-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p className="mb-4 about-section-text">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
