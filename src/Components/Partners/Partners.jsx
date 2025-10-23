import React, { useEffect, useRef } from "react";
import "./Partners.css";

const Partners = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const logos = [
      "https://interweb.al/wp-content/uploads/2025/08/iliria-removebg-preview-1.webp",
      "https://interweb.al/wp-content/uploads/2025/08/dentaltravel.webp",
      "https://interweb.al/wp-content/uploads/2025/08/govan.webp",
      "https://interweb.al/wp-content/uploads/2025/08/drardiprushi.webp",
      "https://interweb.al/wp-content/uploads/2025/08/motorsport-removebg-preview-1.webp",
      "https://interweb.al/wp-content/uploads/2025/08/newshipping.webp",
      "https://interweb.al/wp-content/uploads/2025/08/wordflex-1.webp",
      "https://interweb.al/wp-content/uploads/2025/08/zavoli.webp",
      "https://interweb.al/wp-content/uploads/2025/08/aquatiq.webp",
      "https://interweb.al/wp-content/uploads/2025/08/Untitled-design-4-1.webp",
      "https://interweb.al/wp-content/uploads/2025/08/kglogo.webp",
    ];

    const track = trackRef.current;

    const createSlide = (url) => {
      const slide = document.createElement("div");
      slide.className = "logo-slide";

      const img = document.createElement("img");
      img.src = url;
      img.alt = "Logo";
      img.className = "logo-slide-img";
      img.loading = "lazy";

      img.onerror = function () {
        this.src =
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='60' viewBox='0 0 120 60'%3E%3Crect width='120' height='60' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ELogo%3C/text%3E%3C/svg%3E";
      };

      slide.appendChild(img);
      return slide;
    };

    logos.forEach((url) => {
      track.appendChild(createSlide(url));
    });

    const slides = Array.from(track.children);
    slides.forEach((slide) => {
      track.appendChild(slide.cloneNode(true));
    });
    slides.forEach((slide) => {
      track.appendChild(slide.cloneNode(true));
    });
  }, []);

  return (
    <div className="logo-slider-container">
      <div className="logo-slider-track" ref={trackRef}></div>
    </div>
  );
};

export default Partners;
