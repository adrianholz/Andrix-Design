import Image from "next/image";
import "./InfoSection.css";

export default function InfoSection() {
  const birthDate = new Date("2002-07-17");

  const calculateAge = () => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const isBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());
    if (!isBirthdayPassed) {
      age--;
    }
    return age;
  };

  return (
    <section className="about-me">
      <div className="container">
        <div className="summary">
          <h1>About me</h1>
          <div className="info">
            <div className="quote">
              <Image
                width={230}
                height={230}
                alt="Adrian Holzschuh"
                src={"/assets/img/webp/adrianholzschuhpf.webp"}
              />
              <div>
                <span>How'd you describe your work?</span>
                <p>
                  “My goal is to deliver satisfaction not only to my clients
                  through meaningful results, but also to the users of my
                  projects through great experiences”.
                </p>
              </div>
            </div>
            <p>
              Hello! My name is <strong>Adrian Holzschuh</strong>, and I am the
              and designer responsible for projects here at{" "}
              <strong>Andrix Design</strong>. <br />
              <br />
              Having been interested in technology from a young age, I’ve always
              been fascinated by the ability to bring my creativity to life
              through digital media. Over the past ten years, I’ve worked in
              graphic and digital design, helping clients turn their ideas into
              meaningful and effective digital experiences. Through Andrix, I
              can bring together the skills and experience I’ve developed over
              the years to help you build the strongest digital presence
              possible.
            </p>
          </div>
        </div>
        <div className="information">
          <h1>Information</h1>
          <div className="information-inner">
            <div>
              <span>Specializations</span>
              <p>
                Graphic, Digital <br />
                and UX/UI Design
              </p>
            </div>
            <div>
              <div>
                <span>Born</span>
                <p>July 17th</p>
                <span>Age</span>
                <p>{`${calculateAge()} years`}</p>
              </div>
              <div>
                <span>From</span>
                <p>São Paulo, SP</p>
                <span>Currently in</span>
                <p>Victoria, BC</p>
              </div>
            </div>
            <div>
              <span>E-mail</span>
              <p>
                <a href="mailto:adrian.holzschuh@gmail.com">
                  adrian.holzschuh@gmail.com
                </a>
              </p>
              <span>Phone</span>
              <p>
                <a href="tel:16046792058">+55 (11) 92158-7707</a>
              </p>
            </div>
            <div>
              <a
                href="https://www.facebook.com/andrix.holzschuh/"
                target="_blank"
              >
                <img src="/assets/img/svg/facebook.svg" alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/adrianholzschuh/"
                target="_blank"
              >
                <img src="/assets/img/svg/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://www.youtube.com/@andrixdesign" target="_blank">
                <img src="/assets/img/svg/youtube.svg" alt="YouTube" />
              </a>
              <a
                href="https://discordapp.com/users/315615727031943168"
                target="_blank"
              >
                <img src="/assets/img/svg/discord.svg" alt="Discord" />
              </a>
              <a
                href="https://www.linkedin.com/in/adrianholzschuh/"
                target="_blank"
              >
                <img src="/assets/img/svg/linkedin.svg" alt="Linkedin" />
              </a>
              <a href="https://github.com/adrianholz" target="_blank">
                <img src="/assets/img/svg/github.svg" alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
