import React from "react";
import "./Section2.css";

const Section2 = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="about-title">RRETH NESH</h2>

        <div className="about-grid">
          <div className="about-box">
            <h3>
              <span className="blue-line"></span>
              Më shumë se 15 vite eksperiencë
            </h3>
            <p>
              Interweb.al shpk është një shoqëri që ndërton, dizenjon, menaxhon
              faqe interneti, strehim të faqeve “web hosting”. Krijon, menaxhon
              rrjete sociale, si dhe ofron shumë shërbime të teknologjisë së
              informacionit. Interweb.al shpk që prej vitit 2003, ofron gjithë
              cilësinë dhe inovacionin e mundshëm tek klientët e saj, përsa i
              përket strehimit si dhe dizenjimit të faqeve të internetit.
              <br />
              <br />
              Ne ofrojmë zgjidhje të plota për faqet e internetit nëpërmjet
              planeve të përgatitura për individët, bizneset e vogla, të mesme
              dhe korporata.
            </p>
          </div>

          <div className="about-box">
            <h3>
              <span className="blue-line"></span>
              Kreativitet, Siguri dhe Prakticitet
            </h3>
            <p>
              Ne jemi të orientuar drejt cilësisë dhe ne japim më të mirën për
              t’ju ofruar zgjidhje afatgjata. Punimet tona karakterizohen nga
              dizajno kreative dhe elastike, hostim me shpejtësi të lartë dhe të
              sigurt, internet marketing, zgjidhje IT dhe mirëmbajtje 24/7.
              <br />
              <br />
              Ne krijojmë faqe interneti unike për çdo klient, duke ofruar,
              analizën dhe vizion tonë profesional për çdo klient. Ne e bëjmë
              procesin e ndërtimit të faqeve të lehtë dhe të këndshëm. E bëjmë
              atë të thjeshtë për këdo që të kuptojë shërbimet dhe zgjidhjet e
              internetit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
