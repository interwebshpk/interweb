import React from "react";
import "./Mision.css";
import section2 from "../../assets/images/2.webp";

function Mision() {
  return (
    <div className="fullSection">
      <div className="section2">
        <div className="section2-left">
          <h2>Misioni Ynë ​</h2>
          <h3>Përkushtim në çdo hap për rezultate të shkëlqyera. ​</h3>
          <p>
            Çdo projekt ndjek një proces të strukturuar dhe të detajuar që nis
            me një analizë të thelluar të kërkesave dhe qëllimeve të klientit,
            duke garantuar që çdo aspekt i faqes së internetit të jetë i
            përshtatur sipas nevojave specifike të biznesit. Më tej, hartohet
            një plan strategjik dhe i qartë që përfshin dizajnin, zhvillimin dhe
            integrimin e funksionaliteteve, me synim krijimin e një platforme të
            fuqishme, intuitive dhe lehtësisht të përdorshme. Gjatë fazës së
            zhvillimit, çdo komponent optimizohet për performancë maksimale,
            ndërsa përmes një procesi rigoroz testimi sigurohet cilësia dhe
            funksionaliteti. Në përfundim, faqja lançohet në ambientin e
            prodhimit, duke garantuar një zgjidhje që përmbush në mënyrë të
            plotë kërkesat dhe pritshmëritë e klientit.​
          </p>
          <br />
        </div>

        <div className="section2-right">
          <img src={section2} alt="4stages" className="section2-img" />
        </div>
      </div>
    </div>
  );
}

export default Mision;
