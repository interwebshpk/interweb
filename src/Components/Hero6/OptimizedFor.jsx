import React from "react";
import "./OptimizedFor.css";
import wordpress from "../../assets/images/WordPress_blue_logo.svg";
import joomla from "../../assets/images/Untitled-design-5-1.png";
import drumpal from "../../assets/images/Untitled-design-6-1.png";
import magento from "../../assets/images/Untitled-design-7-1.png";
import ecomerce1 from "../../assets/images/1170576.png";

function OptimizedFor() {
  const logos = [
    {
      src: wordpress,
      alt: "WordPress",
      title: "WordPress",
    },
    {
      src: joomla,
      alt: "Joomla",
      title: "Joomla",
    },
    {
      src: drumpal,
      alt: "Drupal",
      title: "Drupal",
    },
    {
      src: magento,
      alt: "Magento",
      title: "Magento",
    },
    {
      src: ecomerce1,
      alt: "eCommerce",
      title: "eCommerce",
    },
  ];

  return (
    <section className="optimized-section">
      <h2>Hosti është i optimizuar për:</h2>

      <div className="platform-logos">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            title={logo.title}
            loading="lazy"
          />
        ))}
      </div>

      <p className="note">
        Të gjitha çmimet e planit të hostimit nuk kanë të përfshirë taksë (TVSH)
      </p>
    </section>
  );
}

export default OptimizedFor;
