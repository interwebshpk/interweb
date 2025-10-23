import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Zhvillim faqe webi",
      description:
        "Ne krijojmë faqe interneti moderne, funksionale dhe plotësisht responsive.",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="service-icon">
          <path d="M9.4 16.6 5.8 13l3.6-3.6L8 8l-5 5 5 5 1.4-1.4zm5.2 0 3.6-3.6-3.6-3.6L16 8l5 5-5 5-1.4-1.4zM13.8 4l-3.6 16 1.9.4 3.6-16-1.9-.4z" />
        </svg>
      ),
      link: "/services/website",
    },
    {
      title: "Hostim i Shpejtë & Servera të Sigurtë",
      description:
        "Sigurojmë shpejtësi të lartë, performancë maksimale dhe mbrojtje të avancuar.",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="service-icon">
          <path d="M19 18H7a5 5 0 010-10 6 6 0 0111.31 1.93A4.5 4.5 0 1119 18z" />
        </svg>
      ),
      link: "/services/hosting",
    },
    {
      title: "Mirëmbajtje & Suport",
      description:
        "Ofrojmë mirëmbajtje të vazhdueshme dhe suport teknik profesional, duke mbajtur platformën tuaj të përditësuar.",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="service-icon">
          <path d="M12 3a9 9 0 00-9 9v5a3 3 0 003 3h2v-8H6a7 7 0 0114 0h-2v8h2a3 3 0 003-3v-5a9 9 0 00-9-9z" />
        </svg>
      ),
      link: "/services/support",
    },
    {
      title: "Zhvillim Aplikacionesh dhe Platformash",
      description:
        "Zhvillojmë aplikacione mobile, sisteme ERP dhe platforma të personalizuara.",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="service-icon">
          <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 3v14h10V5H7zm5 13a1.25 1.25 0 110 2.5A1.25 1.25 0 0112 18z" />
        </svg>
      ),
      link: "/services/apps",
    },
  ];

  return (
    <section aria-label="Shërbimet tona" className="services-section">
      {services.map((service, index) => (
        <article className="service-card" key={index}>
          {service.icon}
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <a
            href={service.link}
            aria-label={`Mëso më shumë për ${service.title}`}
            className="arrow-btn"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path
                d="M13 5l7 7-7 7-1.41-1.41L16.17 13H4v-2h12.17l-4.58-4.59L13 5z"
                fill="currentColor"
              />
            </svg>
          </a>
        </article>
      ))}
    </section>
  );
};

export default Services;
