"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building, Home } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Reserves",
    image: "/project-1.png",
    strategy: "BTR Townhomes",
    market: "Florence, SC",
    holdPeriod: "5 Years",
    irr: "21",
    comingSoon: true,
  },
  {
    id: 2,
    title: "Vues on Barringer",
    image: "/project-2.png",
    strategy: "BTR Townhomes",
    market: "Charlotte, NC",
    holdPeriod: "18 months",
    irr: "20",
    comingSoon: true,
  },
  {
    id: 3,
    title: "Sanborn Gardens",
    image: "/project-3.png",
    strategy: "BTS Infill",
    market: "Portsmouth, VA",
    holdPeriod: "24 months",
    irr: "17",
    comingSoon: true,
  },
  {
    id: 4,
    title: "Stanfield",
    image: "/project-4.png",
    strategy: "Infill Mixed-Use",
    market: "South Bend, IN",
    holdPeriod: "12 months",
    irr: "23",
    comingSoon: false,
  },
  {
    id: 5,
    title: "Sumter I & II",
    image: "/project-5.png",
    strategy: "BTS SFH",
    market: "Sumter, SC",
    holdPeriod: "6-9 months",
    irr: "18-22",
    comingSoon: false,
  },
  {
    id: 6,
    title: "Marion I",
    image: "/project-6.png",
    strategy: "BTS SFH",
    market: "Marion, SC",
    holdPeriod: "6-9 months",
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
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="position-relative">
                  {project.comingSoon && (
                    <div
                      className="badge rounded-pill px-3 py-2 position-absolute bg-black z-2"
                      style={{ top: "10px", left: "10px" }}
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
                  >
                    {project.irr}% IRR
                  </div>
                  <div
                    className="position-relative w-100 z-1"
                    style={{
                      height: "220px",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="card-img-top object-fit-cover"
                    />
                  </div>
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                  <p className="mb-1 d-flex align-items-center justify-content-between">
                    <span>Stragety:</span>
                    <span>{project.strategy}</span>
                  </p>
                  <p className="mb-1 d-flex align-items-center justify-content-between">
                    <span>market:</span>
                    <span>{project.market}</span>
                  </p>
                  <p className="mb-1 d-flex align-items-center justify-content-between">
                    <span>Hold Price:</span>
                    <span>{project.holdPeriod}</span>
                  </p>
                </div>
                <div className="card-footer bg-white border-0 pb-4">
                  <Link
                    href={`#project-${project.id}`}
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
            href="#all-projects"
            className="btn text-white px-4 py-3"
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
