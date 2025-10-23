import React from "react";
import "./Packages.css";

const Packages = () => {
  const packageData = [
    {
      name: "Paketë Bazike",
      features: [
        "Temë të personalizuar",
        "5 faqe interneti",
        "Integrim me Google Maps, Google My Business",
        "Responsive Design (Desktop, tablet, mobile)",
        "Optimizim për performancë",
        "Skanim ditor dhe parandalim i viruseve dhe malware",
      ],
      link: "https://interweb.al/index.php/kontakto/",
      type: "basic",
    },
    {
      name: "Paketë Standarde",
      features: [
        "Temë të personalizuar",
        "10 faqe interneti",
        "Integrim me Google Maps, Google My Business",
        "Chat Bubble për WhatsApp, Messenger, etj.",
        "Optimizim për performancë",
        "Skanim ditor dhe parandalim i viruseve dhe malware",
        "Responsive Design (Desktop, tablet, mobile)",
        "Manual përdorimi në dy gjuhë (Shqip ose Anglisht)",
      ],
      link: "https://interweb.al/index.php/kontakto/",
      type: "standard",
      badge: "Më e Kërkuar",
    },
    {
      name: "Paketë e Avancuar",
      features: [
        "Temë të personalizuar",
        "Implementim E-Commerce me WooCommerce",
        "Krijimi i 40 produkteve demo për arsye demonstrimi",
        "Implementimi i mënyrës së pagesave online",
        "Konfigurim i plotë i dyqanit për të filluar shitjet online",
        "Chat Bubble për WhatsApp, Messenger, etj.",
        "Skanim ditor dhe parandalim i viruseve dhe malware",
        "Responsive Design (Desktop, tablet, mobile)",
        "Manual përdorimi i detajuar në dy gjuhë",
        "Konfigurim i faqes për dy gjuhë",
      ],
      link: "https://interweb.al/index.php/kontakto/",
      type: "advanced",
    },
  ];

  return (
    <div className="container">
      <h1>Paketat e Shërbimeve Web</h1>
      <div className="packages">
        {packageData.map((pkg, i) => (
          <div key={i} className={`package ${pkg.type}`}>
            {pkg.badge && <div className="popular-badge">{pkg.badge}</div>}
            <div className="package-header">
              <div className="header-bg"></div>
              <div className="package-name">{pkg.name}</div>
            </div>
            <div className="package-content">
              <ul className="features">
                {pkg.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a href={pkg.link} className="btn">
                Zgjidh Paketën
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
