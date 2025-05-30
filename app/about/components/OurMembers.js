"use client";

import React from "react";
import Image from "next/image";

const members = [
  {
    id: 1,
    name: "Jhon Smith",
    image: "/about/team-1.jpg",
    position: "Founder and Lead Agent",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
  },
  {
    id: 2,
    name: "Emily Devis",
    image: "/about/team-2.jpg",
    position: "Senior Sales Agent",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
  },
  {
    id: 3,
    name: "Sarah Jhonson",
    image: "/about/team-3.jpg",
    position: "Property Specialist",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
  },
  {
    id: 4,
    name: "Michael Brown",
    image: "/about/team-4.jpg",
    position: "Investment Expert",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
  },
  {
    id: 5,
    name: "Jane",
    image: "/about/team-5.jpg",
    position: "Communication Specialist",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
  },
  {
    id: 6,
    name: "Zara",
    image: "/about/team-6.jpg",
    position: "Property Specialist",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae",
  },
];

const OurMembers = () => {
  return (
    <section id="projects" className="py-5 py-md-6 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title centered">What We Do</h2>
          <p className="mt-4 about-section-text">
            Comprehensive real estate development solutions across multipe
            assests classes <br /> and markets
          </p>
        </div>

        <div className="row g-4">
          {members.map((member, index) => (
            <div key={member.id} className="col-md-6 col-lg-4 mb-4"
            data-aos="flip-left"
              data-aos-delay={`${500 + index * 100}`}>
              <div className="card h-100 bg-transparent h-100 border-0 cursor-pointer shadow-none">
                <div
                  className="card-img-top position-relative w-100"
                  style={{
                    height: "300px",
                  }}
                  data-aos="zoom-in"
                    data-aos-delay={`${500 + index * 100}`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="card-img-top object-fit-cover"
                  />
                </div>
                <div className="card-body p-0 mt-3">
                  <h5 className="card-title fw-bold">{member.name}</h5>
                  <p className="card-title mb-3">{member.position}</p>
                  <p className="fs-14 mb-3">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMembers;
