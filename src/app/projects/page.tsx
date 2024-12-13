"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ContactContextProvider } from "../ContactContext";
import { ServiceContextProvider } from "../ServiceContext";
import Marquee from "@/components/ui/Marquee";
import ProjectsPage from "@/components/pages/ProjectsPage";

export default function About() {
  return (
    <>
      <ContactContextProvider>
        <ServiceContextProvider>
          <Marquee
            gap="10px"
            page="Projects"
            title="Andrix Design"
            time="30s"
          />
          <Header />
          <ProjectsPage />
          <Footer />
          <Marquee
            gap="10px"
            page="Projects"
            title="Andrix Design"
            time="30s"
          />
        </ServiceContextProvider>
      </ContactContextProvider>
    </>
  );
}
