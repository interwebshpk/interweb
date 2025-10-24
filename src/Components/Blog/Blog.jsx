import React from "react";
import "./Blog.css";
import blog1 from "../../assets/images/blog1.webp";
import blog2 from "../../assets/images/blog2.webp";
import blog3 from "../../assets/images/blog3.webp";

const Blog = () => {
  const posts = [
    {
      title: "5 mënyra për të përmirësuar SEO-n e faqes tuaj",
      date: "10 Prill, 2025",
      image: blog1,
      link: "#",
    },
    {
      title: "Trendët më të rinj në dizajnin e faqeve web për 2025",
      date: "15 Prill, 2025",
      image: blog2,
      link: "#",
    },
    {
      title: "Si të mbrosh faqen tënde nga sulmet kibernetike",
      date: "20 Prill, 2025",
      image: blog3,
      link: "#",
    },
  ];

  return (
    <section className="iwblog-container">
      <div className="iwblog-header">
        <h2>Blogu Ynë</h2>
        <p>
          Blogu ynë është një hapësirë ku ndajmë ide, projekte dhe përvoja nga
          fusha e teknologjisë dhe zhvillimit web. Qëllimi ynë është të
          informojmë, frymëzojmë dhe ndihmojmë të gjithë ata që duan të mësojnë
          dhe të zhvillohen në këtë fushë.
        </p>
      </div>

      <div className="iwblog-posts-container">
        <div className="iwblog-posts">
          {posts.map((post, index) => (
            <a
              key={index}
              className="iwblog-item"
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="iwblog-img-container">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>

              <div className="iwblog-content">
                <h3>{post.title}</h3>
                <div className="iwblog-meta">
                  <span>
                    <svg viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
                    </svg>
                    {post.date}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="blog-btn-wrapper">
        <a href="#" className="blog-btn">
          Lexo më shumë →
        </a>
      </div>
    </section>
  );
};

export default Blog;
