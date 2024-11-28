"use client";

import Image from "next/image";
import { MutableRefObject, RefObject } from "react";

type ServicesProps = {
  videoRef: RefObject<HTMLDivElement>;
  service: Service;
  services: Service[];
  activeIndex: number;
  handleTitleChange: (arg: Service) => void;
  imageRefs: MutableRefObject<HTMLElement[]>;
};

export default function Services({
  videoRef,
  service,
  services,
  activeIndex,
  handleTitleChange,
  imageRefs,
}: ServicesProps) {
  return (
    <div className="services-wrapper">
      <div className="window">
        <div className="video-transition" ref={videoRef}>
          <video muted src="/assets/video/intro.mp4"></video>
        </div>
        <div
          style={{
            background: `var(--b1) url(/assets/img/svg/${service.file}-dark.svg) no-repeat ${service.position} / 500px`,
          }}
          className="window-inner"
        >
          <div className="title">
            <div>
              <Image
                src={`assets/img/svg/${service.file}.svg`}
                width={130}
                height={130}
                alt={`${service.name} Icon`}
              />
            </div>
            <h2>
              {service.name.split(" ")[0]} <br />
              <span>{service.name.split(" ")[1]}</span>
            </h2>
          </div>
          <p>{service.description}</p>
          <div className="process">
            <video
              muted
              autoPlay
              loop
              src={`assets/video/${service.file}.mp4`}
            ></video>
            <div>
              <span>Design Process</span>
              <p>{service.process}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="nav">
        {services.map((item, index) => (
          <div
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleTitleChange(item)}
            ref={(el) => {
              if (el) {
                imageRefs.current[index + 6] = el;
              }
            }}
          >
            <h2>
              {item.name.split(" ")[0]} <br />
              {item.name.split(" ")[1]}
            </h2>
            <span>{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
