"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    setNavOpen(false);
  };

  const showBg = scrolled || navOpen;

  return (
    <nav
      className={`navbar navbar-expand-lg py-3 w-100 ${
        showBg
          ? "fixed-top bg-dark bg-opacity-75 shadow-sm backdrop-blur"
          : "position-absolute"
      }`}
      style={{ top: 0, transition: "all 0.3s ease-in-out", zIndex: 999 }}
    >
      <div className="container">
        <Link
          href="/"
          onClick={handleNavLinkClick}
          className="navbar-brand d-flex align-items-end"
        >
          <Image src="/logo.svg" alt="Logo" width={60} height={80} />
          <Image src="/logo-2.svg" alt="Logo Text" width={140} height={60} />
        </Link>

        <button
          className="navbar-toggler outline-none shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={navOpen}
          aria-label="Toggle navigation"
          onClick={handleToggle}
          style={{
            borderColor: "#B68B5A",
          }}
        >
          <AlignJustify color="#B68B5A" />
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            navOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center gap-lg-3 text-center">
            <li className="nav-item">
              <Link
                href="/"
                onClick={handleNavLinkClick}
                className="nav-link text-white"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                onClick={handleNavLinkClick}
                className="nav-link text-white"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#contact"
                className="btn text-white px-4 py-2 btn-view"
                style={{ background: "#B68B5A" }}
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
