"use client";

import React from 'react';
import Hero from '@/components/Hero';
import AboutSignature from '@/components/AboutSignature';
import AboutChandler from '@/components/AboutChandler';
import WhatWeDo from '@/components/WhatWeDo';
import FeaturedProjects from '@/components/FeaturedProjects';
import InvestmentHighlights from '@/components/InvestmentHighlights';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSignature />
      <AboutChandler />
      <WhatWeDo />
      <FeaturedProjects />
      <InvestmentHighlights />
      <Contact />
    </main>
  );
}