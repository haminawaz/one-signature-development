import React from "react";
import { Mail, MapPin, Globe, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-5 py-md-6"
      style={{
        background: "#F8F1E5",
      }}
    >
      <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
        <div className="row col-8">
          <div className="d-flex flex-column justify-content-center align-items-center container py-4 text-center">
            <div
              className="rounded-circle bg-secondary mb-5"
              style={{
                backgroundImage: "url(/owner.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "120px",
                height: "120px",
              }}
            ></div>
            <p
              className="fs-4 fst-italic mb-2"
              style={{ fontFamily: "Playfair Display" }}
            >
              “We don’t just build—we create destinations. Live. Work. Play.
              That’s the future of community!”
            </p>
            <p className="fw-bold">— Chandler Chase, Founder & CEO</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="col-lg-10 bg-white rounded-4 p-3">
              <p className="lead fw-bold text-center">Get In Touch</p>

              <div className="d-flex align-items-center justify-content-between mb-3">
                <p className="fs-14 mb-0">
                  <Mail size={20} color="#B68B5A" />{" "}
                  info@onesignaturedevelopments.com
                </p>
                <p className="fs-14 mb-0">
                  <Globe size={20} color="#B68B5A" />{" "}
                  www.onesignaturedevelopments.com
                </p>
              </div>
              <div className="mb-3">
                <p className="fs-14 mb-0">
                  <MapPin size={20} color="#B68B5A" /> Based in Charlotte |
                  Projects across SC, NC, VA, IN
                </p>
              </div>
              <div className="mb-3">
                <p className="fs-14 mb-0">
                  <Linkedin size={20} color="#B68B5A" /> Connect on LinkedIn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
