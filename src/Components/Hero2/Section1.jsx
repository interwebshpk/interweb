import React from "react";
import "./Section1.css";
import { Globe, Server, Wrench, Monitor } from "lucide-react";

const Section1 = () => {
  const services1 = [
    {
      icon: <Globe size={40} color="#3b82f6" />,
      title: "Ndërtim Faqesh Interneti",
      description:
        "Ne krijojmë faqe interneti moderne dhe performante, të personalizuara për nevojat specifike të biznesit tuaj duke përdorur teknologjitë më të fundit.",
    },
    {
      icon: <Monitor size={40} color="#3b82f6" />,
      title: "Web Hosting",
      description:
        "Ofrojmë shërbime hosting të besueshme me 99.9% uptime, shpejtësi optimale dhe mbështetje teknike 24/7 për të garantuar që faqja juaj të jetë gjithmonë online.",
    },
    {
      icon: <Server size={40} color="#3b82f6" />,
      title: "Servera të Dedikuar & VPS",
      description:
        "Serverat VPS të interweb.al ju japin aksesin, stabilitetin dhe kontrollin që ju duhet për të drejtuar me sukses faqen tuaj të internetit ose aplikacionin tuaj.",
    },
    {
      icon: <Wrench size={40} color="#3b82f6" />,
      title: "Mirëmbajtje Faqesh Interneti",
      description:
        "Shërbime të rregullta për azhurnim, siguri dhe optimizim, për të garantuar që faqja juaj të mbetet funksionale dhe e freskët në çdo kohë.",
    },
  ];

  return (
    <section className="services1-section">
      <div className="services1-container">
        <h2>
          Ne ofrojmë shërbime profesionale të dizajnit dhe zhvillimit të faqeve
          interneti, hosting të sigurt dhe sigurie.
        </h2>
        <p className="subtitle">
          Përshtatur për çdo biznes – nga i vogli tek korporatat – ne garantojmë
          cilësi, inovacion dhe rezultate.
        </p>

        <div className="services1-grid">
          {services1.map((service, index) => (
            <div className="service1-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
