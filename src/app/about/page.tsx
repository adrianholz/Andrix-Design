"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutPage from "@/components/pages/AboutPage";
import { ContactContextProvider } from "../ContactContext";
import { ServiceContextProvider } from "../ServiceContext";
import Marquee from "@/components/ui/Marquee";

export default function About() {
  return (
    <>
      <ContactContextProvider>
        <ServiceContextProvider>
          <Marquee
            gap="10px"
            page="About me"
            title="Andrix Design"
            time="30s"
          />
          <Header />
          <AboutPage />
          <Footer />
          <Marquee
            gap="10px"
            page="About me"
            title="Andrix Design"
            time="30s"
          />
        </ServiceContextProvider>
      </ContactContextProvider>
    </>
  );
}
