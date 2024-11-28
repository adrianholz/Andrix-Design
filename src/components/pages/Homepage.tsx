"use client";

import "swiper/css";
import ServicesSection from "../ui/Homepage/ServicesSection/ServicesSection";
import HeroSection from "../ui/Homepage/HeroSection/HeroSection";
import AboutSection from "../ui/Homepage/AboutSection/AboutSection";
import { useContext } from "react";
import { ServiceContext } from "@/app/ServiceContext";

export default function Homepage() {
  const {
    titleRefs,
    imageRefs,
    service,
    handleTitleChange,
    blurRefs,
    videoRef,
    activeIndex,
  } = useContext(ServiceContext)!;

  return (
    <>
      <HeroSection />

      <ServicesSection />

      <AboutSection />
    </>
  );
}
