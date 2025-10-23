import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuActive((prev) => !prev);
  };

  const handleDropdownToggle = (key) => {
    if (window.innerWidth <= 768) {
      setDropdownStates((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuActive(false);
        setDropdownStates({});
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth <= 768 && menuActive) {
        const nav = document.getElementById("navMenu");
        const toggle = document.getElementById("menuToggle");
        if (!nav.contains(e.target) && e.target !== toggle) {
          setMenuActive(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuActive]);

  return (
    <header className={`header-container ${scrolled ? "hidden" : ""}`}>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img
            src="https://interweb.al/wp-content/uploads/2025/08/logo.webp"
            alt="InterWeb Logo"
          />
        </Link>

        <ul className={`nav-menu ${menuActive ? "active" : ""}`} id="navMenu">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              onClick={() => setMenuActive(false)}
            >
              Kreu
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link"
              onClick={() => setMenuActive(false)}
            >
              Rreth Nesh
            </Link>
          </li>

          <li className="nav-item dropdown">
            <button
              className="nav-link has-dropdown"
              onClick={() => handleDropdownToggle("sherbime")}
            >
              Shërbime <i className="bx bx-chevron-down"></i>
            </button>

            <ul
              className={`dropdown-menu ${
                dropdownStates["sherbime"] ? "active" : ""
              }`}
            >
              <li className="dropdown-item">
                <button
                  className="has-submenu"
                  onClick={() => handleDropdownToggle("faqe")}
                >
                  Faqe Interneti <i className="bx bx-chevron-right"></i>
                </button>
                <ul
                  className={`sub-dropdown-menu ${
                    dropdownStates["faqe"] ? "active" : ""
                  }`}
                >
                  <li>
                    <Link
                      to="/services/ndertim-faqe"
                      onClick={() => setMenuActive(false)}
                    >
                      Ndërtim faqe interneti
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/mirembajtje"
                      onClick={() => setMenuActive(false)}
                    >
                      Mirëmbajtje faqesh interneti
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/ecommerce"
                      onClick={() => setMenuActive(false)}
                    >
                      Zgjidhje E-commerce
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown-item">
                <button
                  className="has-submenu"
                  onClick={() => handleDropdownToggle("hosting")}
                >
                  Domaine & Web Hosting <i className="bx bx-chevron-right"></i>
                </button>
                <ul
                  className={`sub-dropdown-menu ${
                    dropdownStates["hosting"] ? "active" : ""
                  }`}
                >
                  <li>
                    <Link
                      to="/services/web-hosting"
                      onClick={() => setMenuActive(false)}
                    >
                      Web Hosting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/servera"
                      onClick={() => setMenuActive(false)}
                    >
                      Servera të dedikuar dhe VPS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/certifikata-ssl"
                      onClick={() => setMenuActive(false)}
                    >
                      Certifikata SSL
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/email"
                      onClick={() => setMenuActive(false)}
                    >
                      Hosted Email Exchange
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="dropdown-item">
                <Link
                  to="/services/te-tjera"
                  onClick={() => setMenuActive(false)}
                >
                  Shërbime të tjera
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link
              to="/projects"
              className="nav-link"
              onClick={() => setMenuActive(false)}
            >
              Projekte
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              className="nav-link"
              onClick={() => setMenuActive(false)}
            >
              Blogu Ynë
            </Link>
          </li>
        </ul>

        <Link
          to="/contact"
          className="contact-btn"
          onClick={() => setMenuActive(false)}
        >
          KONTAKTO
        </Link>

        <button
          className="menu-toggle"
          id="menuToggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuActive ? "✕" : "☰"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
