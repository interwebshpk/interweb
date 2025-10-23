import React from "react";
import "./Pjesa2.css";
import pjesa2 from "../../assets/images/e-commerce.jpg";

function Pjesa2() {
  return (
    <div className="pjesa2">
      <div className="pjesa2-left">
        <h3>Jeni në vendin e duhur!</h3>
        <p>
          Ekipi ynë mund të punojnë për të siguruar ju me praktikat më të mira
          për planifikimin e dyqanit tuaj të ardhshëm. Përveç kësaj, ne përdorim
          njohuritë e avancuara praktike për të ndërtuar funksionalitete të
          sofistikuara dhe aplikime për sistemin tuaj të menaxhimit të faqes
          web. Sic evolon tregu , kështu duhet të evoloj dhe faqja juaj e
          internetit. Me zgjidhjet tona, ju vazhdimisht mund të zhvilloni faqen
          tuaj të bazuar në reagimet e konsumatorëve. Trendet e reja,
          teknologjitë dhe funksionalitetet e ndryshme. Shërbimi ynë i
          përditësimit është një mënyrë e shkëlqyer për të mbajtur dyqan tuaj
          web up-to-date dhe në formë të përsosur. Duke i mbajtur shpenzimet
          tuaja në minimum.
        </p>
        <br />
      </div>

      <div className="pjesa2-right">
        <img src={pjesa2} alt="" className="pjesa2-img" />
      </div>
    </div>
  );
}

export default Pjesa2;
