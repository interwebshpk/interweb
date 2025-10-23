import React from "react";
import "./BlogPage.css";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import blog4 from "../../assets/images/blog4.png";
import blog5 from "../../assets/images/blog5.webp";
import blog6 from "../../assets/images/blog6.png";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      image: blog1,
      title: "Çfarë është SEO dhe pse është kaq e rëndësishme për faqen tënde?",
      date: "May 26, 2025",
      description:
        "SEO (Search Engine Optimization) është procesi për të bërë faqen tënde sa më të dukshme në rezultatet e Google dhe motorëve të tjerë të kërkimit.",
    },
    {
      id: 2,
      image: blog2,
      title: "Çfarë duhet të përmbajë një faqe web e suksesshme në 2025?",
      date: "May 15, 2025",
      description:
        "Në 2025, një faqe interneti nuk është më vetëm 'bukuri vizuale'. Ajo duhet të jetë funksionale, e shpejtë, e aksesueshme dhe e sigurt.",
    },
    {
      id: 3,
      image: blog3,
      title: "Pse është i rëndësishëm responsiviteti i faqes së internetit?",
      date: "May 10, 2025",
      description:
        "Çfarë është responsiviteti i faqes? Responsiviteti i faqes i referohet aftësisë së një faqeje interneti për t’u përshtatur në çdo pajisje.",
    },
    {
      id: 4,
      image: blog4,
      title: "Si të mbrosh faqen tënde nga sulmet kibernetike",
      date: "April 20, 2025",
      description:
        "Mënyra më e mirë për të mbrojtur faqen tënde nga sulmet kibernetike është përditësimi i vazhdueshëm dhe implementimi i masave të sigurisë.",
    },
    {
      id: 5,
      image: blog5,
      title: "Trendet më të rinj në dizajnin e faqeve web për 2025",
      date: "April 15, 2025",
      description:
        "Zbuloni trendet më të rinj në dizajnin e faqeve web për vitin 2025 – minimalizëm, ngjyra të guximshme dhe fokus në përvojën e përdoruesit.",
    },
    {
      id: 6,
      image: blog6,
      title: "5 mënyra për të përmirësuar SEO-n e faqes tuaj",
      date: "April 10, 2025",
      description:
        "Optimizimi për motorët e kërkimit (SEO) është një nga faktorët më të rëndësishëm për suksesin e një faqeje web. Ja si ta përmirësoni atë.",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="blog-title">Blogu Ynë</h2>
        <div className="blog-grid">
          {posts.map((post) => (
            <div className="blog-card" key={post.id}>
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-date">{post.date}</p>
                <p className="blog-description">{post.description}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
