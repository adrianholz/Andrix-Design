import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { services } from "@/data/home-data";
import "swiper/css";
import Post from "../Post/Post";
import { useContext } from "react";
import "./HeroSection.css";
import { ServiceContext } from "@/app/ServiceContext";

export default function HeroSection() {
  const { titleRefs, imageRefs, service, handleTitleChange, blurRefs } =
    useContext(ServiceContext)!;

  return (
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
              {service.name.split(" ")[0]}
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
            {service.name.split(" ")[1]}
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
          {services.map((item, index) => (
            <Image
              src={`/assets/img/svg/${item.file}.svg`}
              height={50}
              width={50}
              alt={`${item.name} Icon`}
              className={`orbit-image ${
                item.name === service.name ? "active" : ""
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
                handleTitleChange(item);
              }}
              key={index}
            />
          ))}
        </div>
        <div
          className={`blur uxui active`}
          ref={(el) => {
            if (el && blurRefs.current) {
              blurRefs.current[1] = el;
            }
          }}
        ></div>
      </div>
      <Swiper
        spaceBetween={0}
        speed={800}
        slidesPerView="auto"
        centeredSlides
        grabCursor={true}
      >
        <SwiperSlide>
          <Post
            title="New Website"
            image="/assets/img/webp/logo.webp"
            alt="Andrix Logo"
            preview="Testing, testing… Hey, how are you? Welcome to Andrix Design’s new website! This project, which took over two months to complete (phew), was conceived as a solution to centralize all the projects I’ve created so far in my journey as a developer..."
            author="Adrian H."
            time="1.5min"
            link="/"
          />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
