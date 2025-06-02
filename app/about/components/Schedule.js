"use client";

import React from "react";
import { InlineWidget } from "react-calendly";
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "";

const Schedule = () => {

  return (
    <div className="schedule about-section px-5">
        <InlineWidget
          url={calendlyUrl}
          open={true}
          rootElement={
            typeof window !== "undefined" ? document.body : undefined
          }
          pageSettings={{
            hideLandingPageDetails: 1,
            hideGdprBanner: 1,
            hideEventTypeDetails: 1,
            hideGdprBanner: 1,
            primaryColor: "#B68B5A",
          }}
        />
    </div>
  );
};

export default Schedule;
