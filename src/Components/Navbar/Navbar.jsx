import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [open, setOpen] = useState({
    sherbime: false,
    faqe: false,
    hosting: false,
  });

  const onResize = useCallback(() => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    if (!mobile) {
      setMenuActive(false);
      setOpen({ sherbime: false, faqe: false, hosting: false });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuActive((p) => !p);
  };

  const toggleMobile = (key, e) => {
    if (!isMobile) return;
    e.preventDefault();
    e.stopPropagation();
    setOpen((prev) => {
      if (key === "sherbime") {
        return { sherbime: !prev.sherbime, faqe: false, hosting: false };
      }
      if (key === "faqe") {
        return { ...prev, faqe: !prev.faqe, hosting: false };
      }
      if (key === "hosting") {
        return { ...prev, hosting: !prev.hosting, faqe: false };
      }
      return prev;
    });
  };

  const hoverOpen = (key) => {
    if (isMobile) return;
    setOpen((prev) => ({ ...prev, [key]: true }));
  };
  const hoverClose = (key) => {
    if (isMobile) return;
    setOpen((prev) => ({ ...prev, [key]: false }));
  };

  useEffect(() => {
    const onDocClick = (e) => {
      if (!isMobile) return;
      const nav = document.getElementById("navMenu");
      const toggle = document.getElementById("menuToggle");
      if (menuActive && nav && !nav.contains(e.target) && e.target !== toggle) {
        setMenuActive(false);
        setOpen({ sherbime: false, faqe: false, hosting: false });
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [menuActive, isMobile]);

  return (
    <header className="header-container">
      <nav className="navbar">
        <Link to="/" className="logo" onClick={() => setMenuActive(false)}>
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

          <li
            className="nav-item dropdown"
            onMouseEnter={() => hoverOpen("sherbime")}
            onMouseLeave={() => hoverClose("sherbime")}
          >
            <button
              type="button"
              className={`nav-link has-dropdown ${
                open.sherbime ? "active" : ""
              }`}
              onClick={(e) => toggleMobile("sherbime", e)}
              aria-expanded={open.sherbime}
              aria-haspopup="true"
            >
              Shërbime <i className="bx bx-chevron-down"></i>
            </button>

            <ul className={`dropdown-menu ${open.sherbime ? "active" : ""}`}>
              <li
                className="dropdown-item has-submenu"
                onMouseEnter={() => hoverOpen("faqe")}
                onMouseLeave={() => hoverClose("faqe")}
              >
                <button
                  type="button"
                  className={`has-submenu ${open.faqe ? "active" : ""}`}
                  onClick={(e) => toggleMobile("faqe", e)}
                  aria-expanded={open.faqe}
                >
                  Faqe Interneti <i className="bx bx-chevron-right"></i>
                </button>

                <ul
                  className={`sub-dropdown-menu ${open.faqe ? "active" : ""}`}
                >
                  <li>
                    <Link
                      to="/services/ndertim-faqe"
                      className="nav-link"
                      onClick={() => setMenuActive(false)}
                    >
                      Ndërtim faqe interneti
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/mirembajtje"
                      className="nav-link"
                      onClick={() => setMenuActive(false)}
                    >
                      Mirëmbajtje faqesh interneti
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/ecommerce"
                      className="nav-link"
                      onClick={() => setMenuActive(false)}
                    >
                      Zgjidhje E-commerce
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className="dropdown-item has-submenu"
                onMouseEnter={() => hoverOpen("hosting")}
                onMouseLeave={() => hoverClose("hosting")}
              >
                <button
                  type="button"
                  className={`has-submenu ${open.hosting ? "active" : ""}`}
                  onClick={(e) => toggleMobile("hosting", e)}
                  aria-expanded={open.hosting}
                >
                  Domaine & Web Hosting <i className="bx bx-chevron-right"></i>
                </button>

                <ul
                  className={`sub-dropdown-menu ${
                    open.hosting ? "active" : ""
                  }`}
                >
                  <li>
                    <Link
                      to="/services/web-hosting"
                      className="nav-link"
                      onClick={() => setMenuActive(false)}
                    >
                      Web Hosting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/servera"
                      className="nav-link"
                      onClick={() => setMenuActive(false)}
                    >
                      Servera të dedikuar dhe VPS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/certifikata-ssl"
                      className="nav-link"
                      onClick={() => setMenuActive(false)}
                    >
                      Certifikata SSL
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/email"
                      className="nav-link"
                      onClick={() => setMenuActive(false)}
                    >
                      Hosted Email Exchange
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  to="/services/te-tjera"
                  className="nav-link"
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

          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => setMenuActive(false)}
            >
              KONTAKTO
            </Link>
          </li>
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
