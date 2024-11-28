"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Homepage.css";
import { useRef, useState } from "react";
import Post from "../ui/Post";

export default function Homepage() {
  type Service = {
    name: string;
    file: string;
    description: string;
    process: string;
    position: string;
  };

  const services = [
    {
      name: "UX/UI Design",
      file: "uxui",
      description:
        "Ignite engagement with tailored UX/UI solutions. Elevate conversions with designs crafted for success. Captivate your audience; let's guide your digital journey towards maximum impact and user satisfaction.",
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      position: "bottom -70px right -80px",
    },
    {
      name: "Digital Artwork",
      file: "artwork",
      description:
        "Ignite engagement with tailored UX/UI solutions. Elevate conversions with designs crafted for success. Captivate your audience; let's guide your digital journey towards maximum impact and user satisfaction.",
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      position: "bottom -70px right -80px",
    },
    {
      name: "Brand Redesign",
      file: "brand",
      description:
        "Ignite engagement with tailored UX/UI solutions. Elevate conversions with designs crafted for success. Captivate your audience; let's guide your digital journey towards maximum impact and user satisfaction.",
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      position: "bottom -70px right -80px",
    },
    {
      name: "Social Media",
      file: "social",
      description:
        "Ignite engagement with tailored UX/UI solutions. Elevate conversions with designs crafted for success. Captivate your audience; let's guide your digital journey towards maximum impact and user satisfaction.",
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      position: "bottom -70px right -80px",
    },
    {
      name: "Package Design",
      file: "packaging",
      description:
        "Ignite engagement with tailored UX/UI solutions. Elevate conversions with designs crafted for success. Captivate your audience; let's guide your digital journey towards maximum impact and user satisfaction.",
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      position: "bottom -70px right -80px",
    },
    {
      name: "Video Editing",
      file: "video",
      description:
        "Ignite engagement with tailored UX/UI solutions. Elevate conversions with designs crafted for success. Captivate your audience; let's guide your digital journey towards maximum impact and user satisfaction.",
      process:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      position: "bottom -70px right -80px",
    },
  ];

  const [service, setService] = useState(services[0]);
  const blur = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLElement[]>([]);
  const titleRefs = useRef<HTMLElement[]>([]);
  const videoRef = useRef<HTMLDivElement>(null);

  function handleTitleChange(service: Service) {
    const video = videoRef.current?.children[0] as HTMLVideoElement;

    blur.current?.classList.remove("active");
    videoRef.current?.classList.add("active");
    video.play();
    imageRefs.current.forEach((image) => {
      image.style.pointerEvents = "none";
    });
    titleRefs.current.forEach((title) => {
      title.classList.remove("opaque");
    });
    setTimeout(() => {
      setService(service);
      titleRefs.current.forEach((title) => {
        title.classList.remove("active");
        void title.offsetWidth;
        title.classList.add("active", "opaque");
      });
    }, 200);
    setTimeout(() => {
      services.forEach((service) => {
        blur.current?.classList.remove(service.file);
      });
      blur.current?.classList.add(service.file, "active");
    }, 1000);
    setTimeout(() => {
      imageRefs.current.forEach((image) => {
        image.style.pointerEvents = "unset";
      });
    }, 2000);
    setTimeout(() => {
      videoRef.current?.classList.remove("active");
    }, 1300);
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
          <div className={`blur uxui active`} ref={blur}></div>
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

      <section className="services">
        <div className="heading dark">
          <h1>What I do</h1>
          <div>
            <h2>
              I'll make your very own <span>Personalized Design</span>
            </h2>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="all-services">
              <div className="title">
                <div className="icon">
                  <Image
                    src="assets/img/svg/compass.svg"
                    height={35}
                    width={35}
                    alt="Compass Icon"
                  />
                </div>
                <h3>Made from scratch, without templates.</h3>
              </div>
              <p className="service-description">
                In the midst of a digital world filled with ready-made and
                adaptable templates, it's easy to become stagnant and end up
                with a generic project. My proposal is to precisely understand
                your needs creating a tailor-made solution.
              </p>
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
                      className={service.name === item.name ? "active" : ""}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
