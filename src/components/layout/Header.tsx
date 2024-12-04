import { useContext, useEffect, useRef } from "react";
import "./Header.css";
import Image from "next/image";
import Link from "next/link";
import "atropos/css";
import Atropos from "atropos/react";
import { ContactContext } from "@/app/ContactContext";
import { ServiceContext } from "@/app/ServiceContext";

export default function Header() {
  const { contact, setContact } = useContext(ContactContext)!;
  const contactRef = useRef<HTMLDivElement>(null);
  const { blurRefs } = useContext(ServiceContext)!;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target as Node)
      ) {
        setContact(false);
      }
    };

    if (contact) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [contact, setContact]);

  return (
    <>
      <header>
        <div className="container">
          <Link href="/">
            <Image
              src="/assets/img/svg/Andrix.svg"
              width={100}
              height={78}
              alt="Andrix Logo"
            />
          </Link>

          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Projects</Link>
              </li>
              <li>
                <Link href="/">About me</Link>
              </li>
              <li>
                <Link href="/">News</Link>
              </li>
              <li>
                <p onClick={() => setContact(true)}>Contact</p>
              </li>
            </ul>
          </nav>

          <a
            href="/assets/files/pdf/Adrian Holzschuh Resume.pdf"
            target="_blank"
            className="resume"
          >
            <img src="/assets/img/svg/resume.svg" alt="Resume" />
            <p>My Resume</p>
            <div
              className="blur uxui active"
              ref={(el) => {
                if (el && blurRefs.current) {
                  blurRefs.current[4] = el;
                }
              }}
            ></div>
          </a>
        </div>
      </header>

      <div
        className="contact-card"
        style={
          contact
            ? { opacity: "1", pointerEvents: "unset" }
            : { opacity: "0", pointerEvents: "none" }
        }
      >
        <Atropos
          shadowScale={1.05}
          rotateYMax={10}
          rotateXMax={10}
          className="contact-atropos"
          style={
            contact ? { transform: "scale(1)" } : { transform: "scale(0)" }
          }
        >
          <div className="card-inner" ref={contactRef}>
            <div>
              <div className="title">
                <Image
                  src="/assets/img/webp/adrianholzschuhpf.webp"
                  height={140}
                  width={140}
                  alt="Adrian Holzschuh"
                  data-atropos-offset="1"
                />
                <div className="info">
                  <h1 data-atropos-offset="4">
                    Adrian <span>Holzschuh</span>
                  </h1>
                  <h2 data-atropos-offset="3">
                    UX/UI Designer & Front-End Developer
                  </h2>
                  <span data-atropos-offset="1">
                    Aiming to bring outstanding user experience, one project at
                    a time.
                  </span>
                </div>
              </div>
              <div className="links">
                <Link href="tel:+16046792058">
                  <img src="/assets/img/svg/phone.svg" alt="Phone Icon" />
                </Link>
                <Link href="mailto:adrian.holzschuh@gmail.com">
                  <img src="/assets/img/svg/email.svg" alt="Email Icon" />
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=16046792078"
                  target="_blank"
                >
                  <img src="/assets/img/svg/whatsapp.svg" alt="Whatsapp Icon" />
                </Link>
                <Link href="sms:+16046792058">
                  <img src="/assets/img/svg/message.svg" alt="Message Icon" />
                </Link>
              </div>
            </div>
            <Image
              src={"/assets/img/svg/Andrix.svg"}
              width={400}
              height={312}
              alt="Andrix Logo"
              data-atropos-offset="-5"
            />
            <div
              className="blur uxui active"
              data-atropos-offset="-5"
              ref={(el) => {
                if (el && blurRefs.current) {
                  blurRefs.current[5] = el;
                }
              }}
            ></div>
          </div>
        </Atropos>
      </div>
    </>
  );
}
