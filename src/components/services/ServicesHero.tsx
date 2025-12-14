"use client";

import React from "react";
import PageHero from "../PageHero";

interface ServicesHeroProps {
  className?: string;
}

const ServicesHero: React.FC<ServicesHeroProps> = ({ className = "" }) => {
  return (
    <PageHero
      sectionLabel="SERVICES"
      title="Dedicated to empowering clients through reliable accounting, tax and VAT compliance, and end-to-end RJSC and corporate secretarial support."
      highlightedText="Dedicated to"
      imageSrc="/images/services/hero.png"
      imageAlt="Professional accounting services meeting"
      useTextReveal={true}
      className={className}
    />
  );
};

export default ServicesHero;
