import React from "react";
import "./Cssl.css";

const Cssl = () => {
  return (
    <div className="ssl-wrapper">
      <div className="ssl-container">
        <div className="ssl-info">
          <p>
            SSL (Secure Sockets Layer) është një teknologji e standardeve të
            sigurisë për krijimin e një lidhje të koduar në mes të një server
            dhe një klient — tipike një server web (website) dhe një shfletues;
            ose një server postë dhe një klient email (p.sh. Outlook). SSL lejon
            që informata të ndjeshme të tilla si numrat e kartës së kreditit,
            numrat e sigurimeve shoqërore, dhe kredencialet që identifikoheni
            për t’i transmetuar ato në mënyrë të sigurt.
          </p>

          <p>
            Normalisht, të dhënat e dërguara midis shfletuesit dhe serverave të
            internetit dërgohen në formë “plain text” — duke ju lënë të
            pambrojtur ndaj përgjimit. Nëse një hacker është në gjendje të
            ndërpresë të gjitha të dhënat që janë dërguar në mes një shfletuesi
            dhe një web serveri, ata mund të shohin dhe të përdorin këtë
            informacion.
          </p>

          <p>
            Më konkretisht, SSL është një protokoll sigurie. Protokollet
            përshkruajnë se si duhet të përdoren algoritmet; në këtë rast,
            protokolli SSL përcakton variablat e enkriptimit për të dy lidhjet
            dhe të dhënat që janë duke u transmetuar.
          </p>
        </div>

        <div className="ssl-cards">
          <div className="ssl-card">
            <div className="ssl-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.2v3.5c0 .7-.6 1.3-1.2 1.3h-5.5c-.7 0-1.3-.6-1.3-1.2v-3.5c0-.7.6-1.3 1.2-1.3V9.5C9.2 8.1 10.6 7 12 7zm0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3z"
                  fill="#00adef"
                />
              </svg>
            </div>
            <h2>Pse duhen Certifikatat?</h2>
            <p>
              Të gjithë shfletuesit kanë aftësi për të bashkëvepruar me serverat
              e internetit të sigurt duke përdorur protokollin SSL. Sidoqoftë,
              shfletuesit dhe serverët duhet të kenë një Certifikatë SSL që të
              jenë në gjendje për të krijuar një lidhje të sigurt.
            </p>
          </div>

          <div className="ssl-card">
            <div className="ssl-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm.5-9.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S13.17 6.5 14 6.5s1.5.67 1.5 1.5zm-5 0c0 .83-.67 1.5-1.5 1.5S7 8.83 7 8s.67-1.5 1.5-1.5S10 7.17 10 8z"
                  fill="#00adef"
                />
              </svg>
            </div>
            <h2>Çfarë ofron interweb.al?</h2>
            <p>
              Ne ofrojmë gjithçka që ju duhet për të konfiguruar certifikatën
              tuaj në aplikim, serverin, VPS, serverin tuaj të dedikuar dhe
              shërbime të tjera. Ne ju ndihmojmë të gjeni certifikatën që ju
              përshtatet, e blejmë atë në emrin tuaj me çmimet më të mira, bëjmë
              konfigurimin dhe e instalojmë për ju.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cssl;
