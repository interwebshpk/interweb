import React from "react";
import "./HostingFeatures.css";

const HostingFeatures = () => {
  const features = [
    { icon: "fa-clock", text: "99.9% Uptime" },
    { icon: "fa-envelope", text: "POP & IMAP Akses" },
    { icon: "fa-mouse-pointer", text: "Instalime 1 Click" },
    { icon: "fa-globe", text: "Domain" },
    { icon: "fa-headset", text: "24/7 Suport Real" },
    { icon: "fa-cogs", text: "Aktivizim" },
    { icon: "fa-share", text: "Email Forwarding" },
    { icon: "fa-paper-plane", text: "SMTP Akses" },
    { icon: "fa-laptop", text: "Web Email Akses" },
    { icon: "fa-user-cog", text: "Client Configuration" },
  ];

  return (
    <section className="features-section">
      <h2>Siguri / Shpejtësi / Performancë</h2>
      <p>
        Interweb.al shpk ofron cilësinë më të lartë web hosting dhe shërbime me
        çmime më të ulëta të mundshme. Ne ofrojmë shërbimin web hosting me
        servera të besueshëm. Ne krenohemi me cilësinë tonë të jashtëzakonshme,
        përgjigjet e shpejta të mbështetjes online, performancën e lartë të
        serverëve dhe shërbimin e kujdesit ndaj klientit. Paketat tona janë të
        dizajnuara për të strehuar pothuajse çdo klient, por nëse keni nevojë
        për një paketë të avancuar ju lutem <a href="#">na kontaktoni</a>.
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-box" key={index}>
            <i className={`fas ${feature.icon}`}></i>
            <span>{feature.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HostingFeatures;
