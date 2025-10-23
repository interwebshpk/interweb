import React from "react";
import "./HostedEmailExchange.css";

const HostedEmailExchange = () => {
  return (
    <div className="exchange-wrapper">
      <div className="exchange-container">
        <div className="exchange-intro">
          <p>
            Sistemi e-mail Exchange Server është i përdorur nga kompanitë më të
            mëdha nëpër botë. Është një sistem i cili është i sigurt, fleksibël
            në përdorim si dhe mjaft ekonomik. Planet që interweb.al sh.p.k.
            ofron, janë të studiuara sipas nevojave të tregut dhe të çdo
            konsumatori për përdorim personal dhe biznes.
          </p>

          <p>
            Çdo plan ka të përfshirë backup automatik të çdo mailbox-i, garantim
            të lidhjes 100% si dhe fleksibilitet në menaxhimin e përdoruesve.
            Sistemi është i ndërtuar nga "servera redundant" — çdo hallkë e
            sistemit është e dublikuar për të garantuar funksionim pa ndërprerje
            edhe në rast defekti të mundshëm.
          </p>

          <p>
            Çdo mailbox që ne ofrojmë për klientin është me hapësirë dhe trafik
            të pa-limituar.
          </p>
        </div>

        <div className="exchange-features">
          <h2>Avantazhet e Exchange Server kundrejt POP/IMAP</h2>

          <div className="exchange-grid">
            {[
              {
                title: "Akses nga smartphone/tablet",
                desc: "E-maili në lëvizje nuk është më një luks — është domosdoshmëri. Ky sistem funksionon në çdo aparat celular dhe tablet pa kufizime, në çdo sistem operimi (Blackberry OS, iOS, Windows Phone, Android, etj).",
              },
              {
                title: "Kalendari dhe Kontaktet",
                desc: "Sinkronizim total ndërmjet të gjitha pajisjeve si në Microsoft Outlook ashtu dhe në webmail. Mos humbisni takime apo kontakte — çdo ndryshim ruhet automatikisht.",
              },
              {
                title: "Të dhënat ruhen në server",
                desc: "Emailet, kontaktet, kalendari dhe detyrat ruhen në serverin qendror dhe sinkronizohen automatikisht në çdo pajisje që përdorni.",
              },
              {
                title: "Kalendarë dinamik",
                desc: "Të gjithë punonjësit mund të aksesojnë, editojnë dhe shtojnë evente në një kalendar të përbashkët sipas lejeve të përcaktuara për secilin.",
              },
              {
                title: "Detyra (Tasks)",
                desc: "Krijoni, shpërndani dhe menaxhoni detyra midis kolegëve. Çdo ndryshim sinkronizohet automatikisht në pajisjet e të gjithëve.",
              },
              {
                title: "Shpërndarje dinamike kontaktesh",
                desc: "Listat e kontakteve ruhen dhe përditësohen në kohë reale, duke reflektuar menjëherë ndryshimet në të gjitha pajisjet e lidhura.",
              },
              {
                title: "Arkivë dhe Antispam",
                desc: "Të gjitha të dhënat arkivohen dhe mbrohen me backup automatik. Sistemi përfshin mbrojtje të avancuar antispam nga McAfee.",
              },
              {
                title: "Opsione të avancuara",
                desc: 'Funksione si "Recall Email" për tërheqje të mesazheve të dërguara gabimisht dhe "Out of Office" që sinkronizohet në të gjitha pajisjet.',
              },
            ].map((feature, index) => (
              <div className="exchange-card" key={index}>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostedEmailExchange;
