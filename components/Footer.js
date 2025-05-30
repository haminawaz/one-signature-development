import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="text-white py-5"
      style={{
        background: "#11221B",
      }}
    >
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-7 pe-lg-8">
            <h5 className="mb-3">One Signature Developments</h5>
            <p className="mb-4 small opacity-75">
              Transforming land into legacy through strategic real estate
              development.
            </p>
            <div className="d-flex gap-3 mb-4">
              <a
                href="https://linkedin.com"
                className="text-white opacity-75 hover-opacity-100"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} color="#B68B5A" />
              </a>
              <a
                href="https://twitter.com"
                className="text-white opacity-75 hover-opacity-100"
                aria-label="Twitter"
              >
                <Twitter size={24} color="#B68B5A" />
              </a>
              <a
                href="https://instagram.com"
                className="text-white opacity-75 hover-opacity-100"
                aria-label="Instagram"
              >
                <Instagram size={24} color="#B68B5A" />
              </a>
            </div>
          </div>

          <div className="col-sm-6 mb-md-0 mb-5 col-lg-2">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <Link
                  href="/#about"
                  className="text-white opacity-75 text-decoration-none"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/#services"
                  className="text-white opacity-75 text-decoration-none"
                >
                  Services
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/#projects"
                  className="text-white opacity-75 text-decoration-none"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white opacity-75 text-decoration-none"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-2">
            <h6 className="mb-3">Investor Resources</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-white opacity-75 text-decoration-none"
                >
                  Investor Portal
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-white opacity-75 text-decoration-none"
                >
                  Market Reports
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-white opacity-75 text-decoration-none"
                >
                  Due Diligence
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-white opacity-75 text-decoration-none"
                >
                  Legal Documents
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4 opacity-25" />

        <div className="row align-items-center">
          <div className="col-12 text-center">
            <span className="small opacity-75">
              © 2025 One Signature Developments. All rights reserved. |
            </span>
            <span className="small opacity-75 ms-1">
              <Link
                href="/privacy"
                className="text-white text-decoration-none me-2"
              >
                Privacy Policy
              </Link>
              |
              <Link
                href="/terms"
                className="text-white text-decoration-none ms-2"
              >
                Terms of Service
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
