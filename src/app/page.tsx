"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Marquee from "@/components/ui/Marquee";
import Homepage from "@/components/pages/Homepage";
import { ServiceContextProvider } from "./ServiceContext";

export default function Home() {
  return (
    <>
      <ServiceContextProvider>
        <Marquee gap="10px" page="Homepage" title="Andrix Design" time="30s" />
        <Header />
        <Homepage />
        <Footer />
        <Marquee gap="10px" page="Homepage" title="Andrix Design" time="30s" />
      </ServiceContextProvider>
    </>
  );
}
