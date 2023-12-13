import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <h1 className="site-title">My Blog</h1>
      <nav>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RiArrowDownSLine size="2rem" /> : <FaBars size="2rem" />}
        </div>
        <ul className={isOpen ? "nav-active" : ""}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
