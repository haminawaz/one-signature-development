"use client";

import React from "react";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import OurMembers from "./components/OurMembers";
import Ready from "./components/Ready";

export default function About() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <OurMembers />
      <Ready />
    </main>
  );
}
