import React from "react";
import "./Contact.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <section className="contact-section">
        <div className="contact-container">
          <h2>NA KONTAKTONI!</h2>
          <div className="contact-grid">
            <form className="contact-form">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message" rows="5"></textarea>
              <button type="submit">Dërgo Mesazhin</button>
            </form>

            <div className="contact-info">
              <div>
                <h4>Adresa</h4>
                <p>Rruga Pjetër Bogdani, Tiranë, Shqipëri</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>info@interweb.al</p>
              </div>
              <div>
                <h4>Phone</h4>
                <p>+355 68 20 60 333</p>
              </div>
              <div className="socials">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a
                    href="https://facebook.com/interwebal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://instagram.com/interweb.al"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://linkedin.com/company/interwebal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Interweb.al Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.238869379028!2d19.814286776249843!3d41.31946967131051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031f26b1f1c41%3A0x81214d2d2ac4368b!2sInterweb.al%20shpk!5e0!3m2!1sen!2s!4v1715094793269!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "16px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
