"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top position-absolute bg-transparent"
    >
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center gap-3">
          <Image
            src="/logo.png"
            alt="One Signature Logo"
            width={60}
            height={80}
          />
          <Image
            src="/logo-2.png"
            alt="One Signature Logo"
            width={180}
            height={60}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#about" className="nav-link text-white">
                About
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link
                href="#contact"
                className="btn text-white"
                style={{
                  background: "#B68B5A",
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
