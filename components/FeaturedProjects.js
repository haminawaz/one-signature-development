"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "The Reserves",
    image: "/project-1.png",
    strategy: "BTR Townhomes",
    market: "Florence, SC",
    irr: "21",
    comingSoon: true,
  },
  {
    id: 2,
    title: "Vues on Barringer",
    image: "/project-2.png",
    strategy: "BTR Townhomes",
    market: "Charlotte, NC",
    irr: "20",
    comingSoon: true,
  },
  {
    id: 3,
    title: "Sanborn Gardens",
    image: "/project-3.png",
    strategy: "BTS Infill",
    market: "Portsmouth, VA",
    irr: "17",
    comingSoon: true,
  },
  {
    id: 4,
    title: "Stanfield",
    image: "/project-4.png",
    strategy: "Infill Mixed-Use",
    market: "South Bend, IN",
    irr: "23",
    comingSoon: false,
  },
  {
    id: 5,
    title: "Sumter I & II",
    image: "/project-5.png",
    strategy: "BTS SFH",
    market: "Sumter, SC",
    irr: "18-22",
    comingSoon: false,
  },
  {
    id: 6,
    title: "Marion I",
    image: "/project-6.png",
    strategy: "BTS SFH",
    market: "Marion, SC",
    irr: "16",
    comingSoon: false,
  },
];

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="py-5 py-md-6"
      style={{
        background: "#F8F1E5",
      }}
    >
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title centered">Featured Projects</h2>
          <p className="mt-4">
            Proven track record of delivering exceptional returns across diverse
            markets and <br />
            asset classes.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay={`${300 + idx * 100}`}
            >
              <div className="card h-100 shadow-sm">
                <div className="position-relative">
                  {project.comingSoon && (
                    <div
                      className="badge rounded-pill px-3 py-2 position-absolute bg-black z-2"
                      style={{ top: "10px", left: "10px" }}
                      data-aos="zoom-in"
                      data-aos-delay={`${400 + idx * 100}`}
                    >
                      Coming Soon
                    </div>
                  )}
                  <div
                    className="badge rounded-pill px-3 py-2 position-absolute z-2"
                    style={{
                      top: "10px",
                      right: "10px",
                      background: "#B68B5A",
                    }}
                    data-aos="zoom-in"
                    data-aos-delay={`${500 + idx * 100}`}
                  >
                    {project.irr}% IRR
                  </div>
                  <div
                    className="position-relative w-100 z-1"
                    style={{
                      height: "220px",
                    }}
                    data-aos="zoom-in"
                    data-aos-delay={`${600 + idx * 100}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="card-img-top object-fit-cover"
                    />
                  </div>
                </div>
                <div
                  className="card-body p-4"
                  data-aos="fade-in"
                  data-aos-delay={`${500 + idx * 100}`}
                >
                  <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                  <p className="mb-1 d-flex align-items-center justify-content-between">
                    <span>Stragety:</span>
                    <span>{project.strategy}</span>
                  </p>
                  <p className="mb-1 d-flex align-items-center justify-content-between">
                    <span>Market:</span>
                    <span>{project.market}</span>
                  </p>
                </div>
                <div className="card-footer bg-white border-0 pb-4">
                  <Link
                    href="#projects"
                    className="btn btn-dark w-100"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link
            href="#projects"
            className="btn text-white px-4 py-3 btn-view"
            style={{
              background: "#B68B5A",
            }}
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
