"use client";

import { ContactContextProvider } from "@/app/ContactContext";
import { ServiceContextProvider } from "@/app/ServiceContext";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { projects } from "@/data/home-data";
import { use } from "react";

type ProjectParams = {
  project: string;
};

export default function Project({
  params,
}: {
  params: Promise<ProjectParams>;
}) {
  const { project } = use(params);

  const projectMatch = projects.filter((item) => {
    const fullName = item.title.secondName
      ? `${item.title.name.toLowerCase()}-${item.title.secondName.toLowerCase()}`
      : item.title.name.toLowerCase();

    return fullName.includes(project);
  });

  const projectData = projectMatch[0];

  return (
    <ContactContextProvider>
      <ServiceContextProvider>
        <Header type={projectData.type} />
        <h1>{projectData.title.name}</h1>
        <Footer type={projectData.type} />
      </ServiceContextProvider>
    </ContactContextProvider>
  );
}
