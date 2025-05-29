"use client";

import React from "react";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import WhatWeDo from "./components/WhatWeDo";
import Ready from "./components/Ready";

export default function About() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <WhatWeDo />
      <Ready />
    </main>
  );
}
