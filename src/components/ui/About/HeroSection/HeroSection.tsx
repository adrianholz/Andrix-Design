import Image from "next/image";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <main id="about">
      <div className="container about-inner">
        <span>Adrian</span>
        <div className="intro">
          <h1>
            Adrian <span>Holzschuh</span>
          </h1>
          <h2>UX/UI & Digital Designer</h2>
          <div className="calls">
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
          </div>
        </div>
        <Image
          width={513}
          height={748}
          alt="Adrian Holzschuh"
          src="/assets/img/png/no-picture.png"
        />
      </div>
      <div className="blur uxui active"></div>
    </main>
  );
}
