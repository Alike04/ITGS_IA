import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Link as RouteLink, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { BsInstagram } from "react-icons/bs";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  };

  const [isShrunk, setShrunk] = useState(false);
  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (!isShrunk && document.documentElement.scrollTop > 20) {
          return true;
        }

        if (isShrunk && document.documentElement.scrollTop < 10) {
          return false;
        }
        return isShrunk;
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        height: isShrunk ? "60px" : "80px",
        backgroundColor: isShrunk ? "rgba(0,0,0,0.8)" : "transparent",
      }}
    >
      <NavLink to="/" className="logo"></NavLink>
      <nav className="nav" ref={navRef}>
        <ul className="menu">
          <li>
            <ScrollLink
              className="link"
              smooth={true}
              offset={-75}
              duration={500}
              to="services"
              onClick={showNavbar}
            >
              Услуги
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="link"
              smooth={true}
              offset={-75}
              duration={500}
              to="about"
              onClick={showNavbar}
            >
              Обо мне
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="link"
              smooth={true}
              offset={-75}
              duration={500}
              to="clients"
              onClick={showNavbar}
            >
              Клиенты
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="link"
              smooth={true}
              offset={-75}
              duration={500}
              to="contacts"
              onClick={showNavbar}
            >
              Контакты
            </ScrollLink>
          </li>
          <li>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes color="white" />
            </button>
          </li>
        </ul>
        <ul className="socials">
          <li>
            <a href="https://www.instagram.com/akhmetov_doka/">
              <BsInstagram color="white" size={25} />
            </a>
          </li>
        </ul>
      </nav>
      <button className="nav-btn open-nav-btn" onClick={showNavbar}>
        <FaBars color="white" />
      </button>
    </header>
  );
};

export default Navbar;
