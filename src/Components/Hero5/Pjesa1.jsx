import React from "react";
import "./Pjesa1.css";
import { Phone } from "lucide-react";
import sectin1 from "../../assets/images/3-commerce.jpg";

function Pjesa1() {
  return (
    <div className="pjesa1">
      <div className="pjesa1-left">
        <img src={sectin1} alt="E-commerce" className="pjesa1-img" />
      </div>

      <div className="pjesa1-right">
        <h3>Ju duhet një dyqan online?</h3>
        <br />
        <p>
          E-Commerce është një nga tendencat kryesore e viteve të fundit. Shumë
          individ kanë ndërtuar dyqanet e tyre në internet. Ata shesin produktet
          e tyre në rrjetin ndërkombëtar në të gjithë botën. Ju mund të zgjidhni
          çfarë do të shisni dhe faqen tuaj të internetit jua realizon shoqëria
          jonë. Ne ju ofrojmë sigurinë që i duhet dyqanit, dizajn kreativ dhe
          funksionalitetin për të siguruar shitje. Ekipi ynë mund t’ju ndihmojë
          që të ndërtoni zgjidhje të përsosur e-commerce për biznesin tuaj. Me
          blerje me kartat e kreditit ose PayPal, Stripe etj. Nga konsultimi,
          zhvillimin, zbatimin dhe shërbimet e optimizuara të programeve të
          trajnimit. Ne do t’ju ndihmojmë për të maksimizuar fuqinë e
          e-commerce.
        </p>
      </div>
    </div>
  );
}

export default Pjesa1;
