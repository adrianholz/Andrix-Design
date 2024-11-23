import Image from "next/image";
import "./Footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <Link href="/">
            <Image
              src="/assets/img/svg/Andrix.svg"
              height={124.8}
              width={160}
              alt="Andrix Logo"
            />
          </Link>
          <div className="footer-contact">
            <h2>Contact</h2>
            <a href="tel:+17789554167">+1 (778) 955-4167</a>
            <a href="mailto:contato@andrix.design">contato@andrix.design</a>
            <span></span>
            <address>
              Vancouver, BC <br />
              Canada
            </address>
            <span></span>
            <ul className="social-media">
              <li>
                <a href="https://github.com/adrianholz" target="_blank">
                  <Image
                    src="/assets/img/svg/github.svg"
                    height={35}
                    width={35}
                    alt="Github Logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adrianholzschuh/"
                  target="_blank"
                >
                  <Image
                    src="/assets/img/svg/linkedin.svg"
                    height={35}
                    width={35}
                    alt="LinkedIn Logo"
                  />
                </a>
              </li>
              <li>
                <a href="https://dribbble.com/adrianholzschuh" target="_blank">
                  <Image
                    src="/assets/img/svg/dribbble.svg"
                    height={35}
                    width={35}
                    alt="Dribbble Logo"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h2>Andrix</h2>
            <ul>
              <li>
                <Link href="/">Homepage</Link>
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
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>Andrix Design © All rights reserved.</p>
        </div>
      </div>
      <div className="blur"></div>
    </footer>
  );
}
