"use client";

import Image from "next/image";
import "./Homepage.css";
import { useRef, useState } from "react";

export default function Homepage() {
  const icons = [
    {
      name: "UX/UI Design",
      file: "uxui",
    },
    {
      name: "Digital Artwork",
      file: "artwork",
    },
    {
      name: "Brand Redesign",
      file: "brand",
    },
    {
      name: "Social Media",
      file: "social",
    },
    {
      name: "Package Design",
      file: "packaging",
    },
    {
      name: "Video Editing",
      file: "video",
    },
  ];

  const [icon, setIcon] = useState(icons[0]);
  const blur = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLImageElement[]>([]);
  const titleRefs = useRef<HTMLElement[]>([]);

  function handleTitleChange(name: string, file: string) {
    blur.current?.classList.remove("active");
    imageRefs.current.forEach((image) => {
      image.style.pointerEvents = "none";
    });
    titleRefs.current.forEach((title) => {
      title.classList.remove("opaque");
    });
    setTimeout(() => {
      setIcon({ name: name, file: file });
      titleRefs.current.forEach((title) => {
        title.classList.remove("active");
        void title.offsetWidth;
        title.classList.add("active", "opaque");
      });
    }, 200);
    setTimeout(() => {
      icons.forEach((icon) => {
        blur.current?.classList.remove(icon.file);
      });
      blur.current?.classList.add(file, "active");
    }, 1000);
    setTimeout(() => {
      imageRefs.current.forEach((image) => {
        image.style.pointerEvents = "unset";
      });
    }, 2000);
  }

  return (
    <>
      <main className="hero">
        <div className="container">
          <span>Andrix is</span>
          <h1>
            <span>
              <i
                className="opaque"
                ref={(el) => {
                  if (el) {
                    titleRefs.current[0] = el;
                  }
                }}
              >
                {icon.name.split(" ")[0]}
              </i>
            </span>
            <span
              className="separator opaque"
              ref={(el) => {
                if (el) {
                  titleRefs.current[1] = el;
                }
              }}
            ></span>
            <span
              className="opaque"
              ref={(el) => {
                if (el) {
                  titleRefs.current[2] = el;
                }
              }}
            >
              {icon.name.split(" ")[1]}
            </span>
          </h1>
          <div className="orbit">
            <Image
              src="/assets/img/png/orbit.png"
              height={650}
              width={650}
              alt="Orbit Decorator"
              className="orbit-rings"
            />
            {icons.map((item, index) => (
              <Image
                src={`/assets/img/svg/${item.file}.svg`}
                height={50}
                width={50}
                alt={`${item.name} Icon`}
                className={`orbit-image ${
                  item.name === icon.name ? "active" : ""
                }`}
                ref={(el) => {
                  if (el) {
                    imageRefs.current[index] = el;
                  }
                }}
                style={
                  {
                    "--start-angle": `${60 * index}deg`,
                  } as React.CSSProperties
                }
                onMouseOver={() => {
                  handleTitleChange(item.name, item.file);
                }}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className={`blur uxui active`} ref={blur}></div>
      </main>
      <h2>{icon.name}</h2>
    </>
  );
}
