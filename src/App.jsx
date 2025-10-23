import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Projekte from "./Pages/Projekte/Projekte";

import Ndertim from "./Pages/Ndertim/Ndertim";
import Mirembajtje from "./Pages/Mirembajtje/Mirembajtje";
import Ecommerce from "./Pages/Ecommerce/Ecommerce";
import Webhosting from "./Pages/WebHosting/Webhosting";
import Kontakte from "./Pages/Kontakte/Kontakte";
import SSL from "./Pages/SSL/SSL";
import HEE from "./Pages/HostedEmailExhchange/HEE";
import Servera from "./Pages/Servera/Servera";
import SEO from "./Pages/SEO/SEO";
import Blogu from "./Pages/Blogu/Blogu";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="#" element={<div>Sherbime</div>} />

        <Route path="/services/ndertim-faqe" element={<Ndertim />} />
        <Route path="/services/mirembajtje" element={<Mirembajtje />} />
        <Route path="/services/ecommerce" element={<Ecommerce />} />
        <Route path="/services/web-hosting" element={<Webhosting />} />
        <Route path="/services/servera" element={<Servera />} />
        <Route path="/services/certifikata-ssl" element={<SSL />} />
        <Route path="/services/email" element={<HEE />} />
        <Route path="/services/te-tjera" element={<SEO />} />

        <Route path="/projects" element={<Projekte />} />
        <Route path="/blog" element={<Blogu />} />
        <Route path="/contact" element={<Kontakte />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
