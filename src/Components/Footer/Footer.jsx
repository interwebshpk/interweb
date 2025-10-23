import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact-box">
          <h3>Na Kontaktoni</h3>
          <p>📍 Pjeter Bogdani, Tirana, Albania</p>
          <p>
            📞 <a href="tel:+355682060333">+355 682060333</a>
          </p>
          <p>
            ✉️ <a href="mailto:info@interweb.al">info@interweb.al</a>
          </p>

          <div className="footer-social">
            <a href="#">
              <img
                alt="Instagram"
                src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              />
            </a>
            <a href="#">
              <img
                alt="Facebook"
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              />
            </a>
            <a href="#">
              <img
                alt="LinkedIn"
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Links</h4>
            <ul>
              <li>
                <a href="#">Kreu</a>
              </li>
              <li>
                <a href="#">Kompania</a>
              </li>
              <li>
                <a href="#">Projekte</a>
              </li>
              <li>
                <a href="#">Blogu Ynë</a>
              </li>
              <li>
                <a href="#">Karriera</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Shërbime Web</h4>
            <ul>
              <li>
                <a href="#">Krijim Website</a>
              </li>
              <li>
                <a href="#">Mirëmbajtje Faqesh</a>
              </li>
              <li>
                <a href="#">E-commerce</a>
              </li>
              <li>
                <a href="#">Integrime me API</a>
              </li>
              <li>
                <a href="#">Optimizim SEO</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Suport & Mirëmbajtje</h4>
            <ul>
              <li>
                <a href="#">Servera të dedikuara</a>
              </li>
              <li>
                <a href="#">Hostim & Domain</a>
              </li>
              <li>
                <a href="#">Serverat VPS</a>
              </li>
              <li>
                <a href="#">Certifikata SSL</a>
              </li>
              <li>
                <a href="#">Rezervime Online</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
        <br />© 2025 Interweb.al. All Rights Reserved.
        <br />
      </div>
    </footer>
  );
};

export default Footer;
