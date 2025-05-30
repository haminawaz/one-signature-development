import React from "react";
import { CircleCheck } from "lucide-react";

const investmentPoints = [
  {
    title: "Partner with top-tier operators",
    description:
      "Collaborate with experienced professionals who have proven track records in their markets.",
  },
  {
    title: "Mix of liquidity + legacy strategies",
    description:
      "Balanced portfolio approach offering both short-term returns and long-term wealth building.",
  },
  {
    title: "Co-investment in every deal",
    description:
      "Management capital alongside investor funds ensures aligned interests and shared commitment.",
  },
  {
    title: "Investor-first transparency",
    description:
      "Regular reporting, open communication, and clear documentation throughout the investment lifecycle.",
  },
  {
    title: "Deep civic + planning relationships",
    description:
      "Strong local connections facilitate smoother approval processes and better project outcomes.",
  },
  {
    title: "Focus on path-of-growth markets",
    description:
      "Strategic positioning in emerging markets with strong fundamentals and growth potential.",
  },
];

const InvestmentHighlights = () => {
  return (
    <section id="invest" className="py-5 py-md-6 bg-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 pe-lg-5">
            <h2 className="section-title">Investment Highlights</h2>
            <div className="mt-5">
              {investmentPoints.map((point, index) => (
                <div
                  key={index}
                  className="d-flex mb-4 align-items-start"
                  data-aos="fade-up"
                  data-aos-delay={`${300 + index * 100}`}
                >
                  <div className="me-2 mt--1">
                    <CircleCheck fill="#B68B5A" color="#fff" size={38} />
                  </div>
                  <div>
                    <h5 className="mb-1">{point.title}</h5>
                    <p className="mb-0 text-muted">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="col-lg-6 mt-5 mt-lg-0"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div
              className="p-3 rounded-3"
              style={{
                background: "#11221B",
              }}
            >
              <h3
                className="mb-4 text-center"
                style={{
                  color: "#B68B5A",
                }}
              >
                Our Brand Values
              </h3>
              <div className="d-flex justify-content-center align-items-center">
                <p className="text-white text-center mb-4 fs-14 col-lg-4">
                  Build With Legacy in Mind <br /> Own It Like It’s Yours <br />{" "}
                  Deliver More Than Promised <br /> Real Relationships Only{" "}
                  <br /> Innovate Intelligently
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentHighlights;
