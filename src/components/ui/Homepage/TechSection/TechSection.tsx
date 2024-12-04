import Link from "next/link";
import Heading from "../Heading/Heading";
import "./TechSection.css";
import { CSSProperties } from "react";

const tools = [
  {
    name: "Photoshop",
    blur: "#75b2df",
    drop: "#0091ff70",
    link: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "Illustrator",
    blur: "#e04e39",
    drop: "#ff620070",
    link: "https://www.adobe.com/ca/products/illustrator.html",
  },
  {
    name: "InDesign",
    blur: "#fd4684",
    drop: "#fd468470",
    link: "https://www.adobe.com/ca/products/indesign.html",
  },
  {
    name: "Premiere Pro",
    blur: "#6f53fc",
    drop: "#6f53fc70",
    link: "https://www.adobe.com/products/premiere.html",
  },
  {
    name: "After Effects",
    blur: "#6f53fc",
    drop: "#6f53fc70",
    link: "https://www.adobe.com/products/aftereffects.html",
  },
  {
    name: "Lightroom",
    blur: "#75b2df",
    drop: "#0091ff70",
    link: "https://www.adobe.com/ca/products/photoshop-lightroom.html",
  },
  {
    name: "Adobe XD",
    blur: "#fd4684",
    drop: "#ff3bf270",
    link: "https://www.adobe.com/products/xd.html",
  },
  {
    name: "Vegas Pro",
    blur: "#4297ff",
    drop: "#4297ff70",
    link: "https://www.vegascreativesoftware.com/us/vegas-pro/",
  },
  {
    name: "Figma",
    blur: "#75b2df",
    drop: "#0091ff70",
    link: "https://www.figma.com",
  },
  {
    name: "Axure RP",
    blur: "#75b2df",
    drop: "#2be04070",
    link: "https://www.axure.com",
  },
  {
    name: "Coreldraw",
    blur: "#75b2df",
    drop: "#ffef0070",
    link: "https://www.coreldraw.com",
  },
  {
    name: "Davinci Resolve",
    blur: "#75b2df",
    drop: "#ffffff70",
    link: "https://www.blackmagicdesign.com/products/davinciresolve/",
  },
];

export default function TechSection() {
  return (
    <>
      <Heading
        theme="dark"
        heading="Technologies"
        subheading="These are the design tools"
        highlight="I have worked with"
      />
      <section className="techs">
        <div className="container">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.link}
              target="_blank"
              className="tech"
              style={
                {
                  "--blur-color": tool.blur,
                  "--drop-color": tool.drop,
                } as CSSProperties
              }
            >
              <img
                src={`/assets/img/svg/tech-${tool.name
                  .toLowerCase()
                  .replaceAll(" ", "-")}.svg`}
                alt={`${tool.name} Icon`}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
