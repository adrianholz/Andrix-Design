"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ContactContextProvider } from "../ContactContext";
import { ServiceContextProvider } from "../ServiceContext";
import Marquee from "@/components/ui/Marquee";
import NewsPage from "@/components/pages/NewsPage";

export default function News() {
  return (
    <>
      <ContactContextProvider>
        <ServiceContextProvider>
          <Marquee
            gap="10px"
            page="Blog & News"
            title="Andrix Design"
            time="30s"
            reverse={false}
          />
          <Header />
          <NewsPage />
          <Footer />
          <Marquee
            gap="10px"
            page="Blog & News"
            title="Andrix Design"
            time="30s"
            reverse={true}
          />
        </ServiceContextProvider>
      </ContactContextProvider>
    </>
  );
}
