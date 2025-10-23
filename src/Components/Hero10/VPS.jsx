import React from "react";
import "./VPS.css";

const VPS = () => {
  return (
    <div className="servers-wrapper">
      <div className="servers-container">
        <article className="server-card">
          <div className="server-header">
            <h2 className="server-title">
              <i className="fas fa-cloud"></i> Serverat VPS
            </h2>
            <p className="server-description">
              Performancë e garantuar në një mjedis virtual të izoluar, ideal
              për projekte me nevoja specifike dhe trafik të lartë.
            </p>
          </div>

          <div className="server-body">
            <div className="features-grid">
              <div className="feature-section">
                <h3 className="feature-title">
                  <i className="fas fa-sliders-h"></i> Karakteristikat
                </h3>
                <ul className="feature-list">
                  {[
                    "Root SSH Access",
                    "Domaine Pa Limit",
                    "MySQL të Optimizuara",
                    "CentOS/Windows Server/OS të tjera",
                    "100% Uptime Guarantee",
                    "WHM/cPanel Control Panel",
                    "PHP5 Support",
                    "Full CGI Access",
                    "Unix Shell Access",
                    "Rrjeti Izolimi",
                  ].map((item, i) => (
                    <li key={i} className="feature-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="feature-section">
                <h3 className="feature-title">
                  <i className="fas fa-lightbulb"></i> Përdorimet
                </h3>
                <ul className="feature-list">
                  {[
                    "Hosting faqesh me trafik të lartë",
                    "Aplikacione të specializuara",
                    "Hosting për klientë të shumtë",
                    "Platforma E-Commerce",
                    "Zhvillim dhe testim aplikacionesh",
                    "Aplikacione të personalizuara",
                    "Server privat për ekip",
                    "Backend për aplikacione mobile",
                  ].map((item, i) => (
                    <li key={i} className="feature-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="highlight-box">
              <p className="highlight-text">
                Ne ofrojmë konfigurim të personalizuar sipas nevojave tuaja
                specifike. Pas konfigurimit, ju ofrohen të gjitha detajet për
                akses të menjëhershëm në serverin tuaj virtual.
              </p>
              <a href="#" className="btn">
                Porositni <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </article>

        <article className="server-card">
          <div className="server-header dark">
            <h2 className="server-title">
              <i className="fas fa-server"></i> Servera të Dedikuar
            </h2>
            <p className="server-description">
              Fuqi e pastër hardware për projekte kritike ku performanca,
              siguria dhe kontrolli janë absolutisht thelbësorë.
            </p>
          </div>

          <div className="server-body">
            <div className="features-grid">
              <div className="feature-section">
                <h3 className="feature-title">
                  <i className="fas fa-sliders-h"></i> Përfshirë në çdo server
                </h3>
                <ul className="feature-list">
                  {[
                    "Deri në 1TB RAID-1 Storage",
                    "Server Grade CPU",
                    "Full Root Access",
                    "Multi-Core Processors",
                    "Backups Automatike",
                    "100% Uptime SLA",
                    "Monitorim 24/7/365",
                    "Mbështetje Teknike",
                    "Konfigurim Personalizuar",
                  ].map((item, i) => (
                    <li key={i} className="feature-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="feature-section">
                <h3 className="feature-title">
                  <i className="fas fa-lightbulb"></i> Përfitimet
                </h3>
                <ul className="feature-list">
                  {[
                    "Performancë maksimale",
                    "Siguri e plotë e të dhënave",
                    "Kontroll i plotë mbi serverin",
                    "Zgjidhje për bizneset e mëdha",
                    "Infrastrukturë e besueshme",
                    "Skalueshmëri e lehtë",
                    "Izolim fizik",
                    "Burime të dedikuara 100%",
                  ].map((item, i) => (
                    <li key={i} className="feature-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="highlight-box">
              <p className="highlight-text">
                Konfigurojmë serverin tuaj dedikuar sipas specifikimeve që
                kërkoni. Pas instalimit dhe konfigurimit, ju japim akses të
                plotë në infrastrukturën tuaj të dedikuar.
              </p>
              <a href="#" className="btn">
                Porositni <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default VPS;
