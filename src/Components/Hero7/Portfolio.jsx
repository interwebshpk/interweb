import React from "react";
import "./Portfolio.css";
import discover from "../../assets/images/discoverillyria-1.webp";
import drardi from "../../assets/images/drardi.png";
import govan from "../../assets/images/govani.png";
import dental from "../../assets/images/travel-1.webp";
import worldflex from "../../assets/images/Untitled-design-3-1.png";
import glozheni from "../../assets/images/Untitled-design-3.png";
import info from "../../assets/images/Untitled-design-4.png";
import fafa from "../../assets/images/Untitled-design-5.png";
import davinci from "../../assets/images/Untitled-design-6.png";
import newshipping from "../../assets/images/Untitled-design-7.png";
import zavoli from "../../assets/images/Untitled-design.png";
import naf from "../../assets/images/Untitled-design-8.png";

const projects = [
  {
    name: "Discover Illyria",
    url: "https://staging.discoverillyria.com/",
    img: discover,
  },
  {
    name: "Govan.al",
    url: "https://govan.al/",
    img: govan,
  },
  {
    name: "Nef Company",
    url: "https://www.nefcompany.al/",
    img: naf,
  },
  {
    name: "NewShipping",
    url: "https://www.newshipping.net/",
    img: newshipping,
  },
  {
    name: "Klinika Davinci",
    url: "https://davinci.al/",
    img: davinci,
  },
  {
    name: "Dr Ardi Prushi",
    url: "https://drardi.com/",
    img: drardi,
  },
  {
    name: "Wordflex",
    url: "https://world-flex.com/en/home-en/",
    img: worldflex,
  },
  {
    name: "Zavoli",
    url: "https://www.zavoli.com/en/",
    img: zavoli,
  },
  {
    name: "Dental Travel Albania",
    url: "https://www.dentaltravellingalbania.com/",
    img: dental,
  },
  {
    name: "Fafa Resort",
    url: "https://www.fafa.al/",
    img: fafa,
  },
  {
    name: "Klinika Glozheni",
    url: "https://www.klinikagliozheni.com/",
    img: glozheni,
  },
  {
    name: "InfoSoft",
    url: "https://infosoftgroup.com.al/",
    img: info,
  },
];

const Portfolio = () => {
  return (
    <section className="section-portfolio">
      <div className="portfolio-container">
        <p>
          Portofoli ynë përfshin një shumëllojshmëri projektesh të realizuara me
          profesionalizëm dhe kreativitet. Nga platformat turistike që
          promovojnë bukuritë natyrore dhe trashëgiminë kulturore të rajonit,
          tek faqet e shërbimeve profesionale që ofrojnë zgjidhje të
          personalizuara për klientët e tyre. Projektet tona përfshijnë
          gjithashtu platforma ndërkombëtare që shërbejnë audienca globale me
          produkte dhe shërbime.
        </p>

        <div className="portfolio-grid">
          {projects.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="portfolio-item"
            >
              <div
                className="item-image"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="corner-arrow">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="#888888"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="item-info">
                <h3>{item.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
