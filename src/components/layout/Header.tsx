import "./Header.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </nav>

          <div>
            <p>toggle</p>
          </div>
        </div>
      </header>
    </>
  );
}
