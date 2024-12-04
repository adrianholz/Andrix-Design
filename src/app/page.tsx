"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Marquee from "@/components/ui/Marquee";
import Homepage from "@/components/pages/Homepage";
import { ServiceContextProvider } from "./ServiceContext";
import { ContactContextProvider } from "./ContactContext";

export default function Home() {
  return (
    <>
      <Marquee gap="10px" page="Homepage" title="Andrix Design" time="30s" />
      <ContactContextProvider>
        <ServiceContextProvider>
          <Header />
          <Homepage />
          <Footer />
        </ServiceContextProvider>
      </ContactContextProvider>
      <Marquee gap="10px" page="Homepage" title="Andrix Design" time="30s" />
    </>
  );
}
