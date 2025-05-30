// components/Schedule.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

const Schedule = () => {
  const calendlyRef = useRef(null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.Calendly &&
      calendlyRef.current
    ) {
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/hkmnoon787/30-mins-interview",
        parentElement: calendlyRef.current,
        prefill: {},
        utm: {},
      });
      setWidgetLoaded(true);
    }
  }, [calendlyRef]);

  return (
    <section
      id="booking"
      className="py-5 py-md-6 about-section"
      data-aos="fade-up"
    >
      <div className="container">
        <h2 className="section-title text-center mb-4">
          Schedule a 30-Minute Call
        </h2>

        <div
          className="d-flex justify-content-center px-3 px-lg-5 py-5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            ref={calendlyRef}
            className="calendly-container"
            style={{
              width: "100%",
              maxWidth: "700px",
              height: "85vh",
              minHeight: "400px",
              borderRadius: "0.5rem",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            {!widgetLoaded && (
              <p className="text-center text-muted mt-5">
                Loading scheduler...
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
