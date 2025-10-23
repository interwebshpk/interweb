import React from "react";
import "./HostingPlans.css";

const plans = [
  {
    name: "Plani Individual",
    price: "120",
    features: [
      "10 GB Storage SSD",
      "Trafik i pakufizuar",
      "Email i pakufizuar",
      "MySQL i pakufizuar",
      "cPanel®: Po",
    ],
    server: {
      cpu: "24 vCPU Cores",
      ram: "120 GB RAM",
    },
  },
  {
    name: "Plani Standard",
    price: "200",
    features: [
      "50 GB Storage SSD",
      "Trafik i pakufizuar",
      "Email i pakufizuar",
      "MySQL i pakufizuar",
      "cPanel®: Po",
    ],
    server: {
      cpu: "24 vCPU Cores",
      ram: "120 GB RAM",
    },
  },
  {
    name: "Plani i Avancuar",
    price: "300",
    features: [
      "100 GB Storage SSD",
      "Trafik i pakufizuar",
      "Email i pakufizuar",
      "MySQL i pakufizuar",
      "cPanel®: Po",
    ],
    server: {
      cpu: "24 vCPU Cores",
      ram: "120 GB RAM",
    },
  },
];

function HostingPlans() {
  return (
    <section className="custom-pricing-section">
      <div className="container">
        <h2>Zgjidh Planin e Përshtatshëm për Ty</h2>
        <p className="custom-subtitle">
          Hosting i shpejtë, i sigurt dhe i fuqishëm për çdo faqe interneti.
          Mbështetje teknike falas, gjithmonë pranë jush.
        </p>

        <div className="custom-pricing-grid">
          {plans.map((plan, index) => (
            <div className="custom-pricing-card" key={index}>
              <div className="custom-card-header">
                <h3>{plan.name}</h3>
                <div className="custom-price">
                  {plan.price} EURO
                  <span className="custom-price-period"> / vit</span>
                </div>
              </div>

              <ul className="custom-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className="custom-server-specs">
                <h4>Informacion i serverit</h4>
                <p>CPU - {plan.server.cpu}</p>
                <p>RAM - {plan.server.ram}</p>
              </div>

              <a
                href="https://interweb.al/index.php/kontakto/"
                className="custom-contact-btn"
              >
                Porosit Tani
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HostingPlans;
