import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import "boxicons/css/boxicons.min.css";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});

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
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuActive(false);
        setDropdownStates({});
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header-container">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img
            src="https://interweb.al/wp-content/uploads/2025/08/logo.webp"
            alt="InterWeb Logo"
          />
        </Link>

        <ul className={`nav-menu ${menuActive ? "active" : ""}`} id="navMenu">
          <NavbarItem link="/" name="Kreu" setMenuActive={setMenuActive} />
          <NavbarItem
            link="/about"
            name="Rreth Nesh"
            setMenuActive={setMenuActive}
          />

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
                  <NavbarItem
                    link="/services/ndertim-faqe"
                    name="Ndërtim faqe interneti"
                    setMenuActive={setMenuActive}
                  />
                  <NavbarItem
                    link="/services/mirembajtje"
                    name="Mirëmbajtje faqesh interneti"
                    setMenuActive={setMenuActive}
                  />
                  <NavbarItem
                    link="/services/ecommerce"
                    name="Zgjidhje E-commerce"
                    setMenuActive={setMenuActive}
                  />
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
                  <NavbarItem
                    link="/services/web-hosting"
                    name="Web Hosting"
                    setMenuActive={setMenuActive}
                  />
                  <NavbarItem
                    link="/services/servera"
                    name="Servera të dedikuar dhe VPS"
                    setMenuActive={setMenuActive}
                  />
                  <NavbarItem
                    link="/services/certifikata-ssl"
                    name="Certifikata SSL"
                    setMenuActive={setMenuActive}
                  />
                  <NavbarItem
                    link="/services/email"
                    name="Hosted Email Exchange"
                    setMenuActive={setMenuActive}
                  />
                </ul>
              </li>

              <NavbarItem
                link="/services/te-tjera"
                name="Shërbime të tjera"
                setMenuActive={setMenuActive}
              />
            </ul>
          </li>

          <NavbarItem
            link="/projects"
            name="Projekte"
            setMenuActive={setMenuActive}
          />
          <NavbarItem
            link="/blog"
            name="Blogu Ynë"
            setMenuActive={setMenuActive}
          />

          <NavbarItem
            link="/contact"
            name="KONTAKTO"
            setMenuActive={setMenuActive}
          />
        </ul>

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
