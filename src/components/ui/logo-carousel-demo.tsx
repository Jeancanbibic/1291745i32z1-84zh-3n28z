"use client";

import React from "react";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import {
  LinkedInIcon,
  XingIcon,
  IndeedIcon,
  StepStoneIcon,
  MonsterIcon,
} from "@/components/ui/icons";

// Logos für unsere Nische
const allLogos = [
  { name: "LinkedIn", id: 1, img: LinkedInIcon },
  { name: "Xing", id: 2, img: XingIcon },
  { name: "Indeed", id: 3, img: IndeedIcon },
  { name: "StepStone", id: 4, img: StepStoneIcon },
  { name: "Monster", id: 5, img: MonsterIcon }
];

export function LogoCarouselDemo() {
  return (
    <div className="bg-beige-50 py-24">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
        <div className="text-center">
          <h3 className="mb-2 text-xl font-medium text-turquoise-600">
            Unsere Partner
          </h3>
          <h2 className="mb-4 text-4xl font-bold">
            Präsent auf allen wichtigen{" "}
            <span className="bg-gradient-to-r from-turquoise-600 to-turquoise-400 bg-clip-text text-transparent">
              Karriere-Plattformen
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Wir vernetzen Sie mit den führenden Plattformen für Ihre berufliche Entwicklung
          </p>
        </div>

        <LogoCarousel columnCount={3} logos={allLogos} />
      </div>
    </div>
  );
} 