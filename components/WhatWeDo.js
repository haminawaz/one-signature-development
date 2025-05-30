import React from "react";
import {
  Building2,
  Building,
  Map,
  BarChart3,
  Users,
  Handshake,
} from "lucide-react";

const services = [
  {
    icon: <Building2 size={36} />,
    title: "Mixed-Use Urban Centers",
    description: "Walkable, lifestyle-driven spaces for work + living",
  },
  {
    icon: <Building size={36} />,
    title: "Build-to-Sell Communities",
    description: "High-yield flips and duplexes in growth corridors",
  },
  {
    icon: <Map size={36} />,
    title: "Build-to-Rent Neighborhoods",
    description: "Stabilized long-term rental projects",
  },
  {
    icon: <BarChart3 size={36} />,
    title: "Strategic Land Development",
    description: "Acquisitions in path-of-growth markets",
  },
  {
    icon: <Users size={36} />,
    title: "Hospitality & Resort Builds",
    description: "Destination-led luxury experiences",
  },
  {
    icon: <Handshake size={36} />,
    title: "Government & Civic Partnerships",
    description: "Rezoning, tax credits, and impact-aligned growth",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-5 py-md-6">
      <div className="container py-5">
        <div className="text-center mb-5 w-100 flex align-items-center justify-content-center">
          <h2 className="section-title centered">What We Do</h2>
          <p className="mt-4">
            Comprehensive real estate development solutions across multiple
            asset classes <br /> and markets.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4"
              data-aos="flip-left"
              data-aos-delay={`${300 + index * 100}`}
            >
              <div
                className="card h-100 p-4 border-0 shadow-sm"
                style={{
                  background: "#F8F1E5",
                }}
              >
                <div className="card-body">
                  <p
                    style={{
                      color: "#B68B5A",
                    }}
                    className="mb-4"
                  >
                    {service.icon}
                  </p>
                  <p className="fw-bold mb-2">{service.title}</p>
                  <p className="fs-6">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
