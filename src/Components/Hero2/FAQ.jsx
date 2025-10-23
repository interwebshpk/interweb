import React, { useState } from "react";
import "./FAQ.css";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Sa kohë zgjat procesi i krijimit të një faqeje interneti?",
      answer:
        "Procesi zgjat nga 1-2 javë për faqe bazë deri në 3-4 javë për projekte më komplekse si dyqane online, në varësi të kompleksitetit dhe materialeve që na furnizoni.",
    },
    {
      question: "A mund të përdor domenin tim ekzistues?",
      answer:
        "Po, mund të integrojmë lehtësisht domenin tuaj ekzistues me faqen e re, ose të ju ndihmojmë të blini një domain të ri.",
    },
    {
      question: "A ofroni shërbime mirëmbajtjeje pas publikimit?",
      answer:
        "Po, ofrojmë plane fleksibël mirëmbajtjeje që përfshijnë përditësime, backup dhe monitorim të vazhdueshëm të sigurisë.",
    },
    {
      question: "A janë faqet tuaja të optimizuara për telefonat dhe tabletat?",
      answer:
        "Po, të gjitha faqet tona janë plotësisht responsive dhe shfaqen në mënyrë optimale në çdo pajisje.",
    },
    {
      question: "Si filloj me një projekt me ju?",
      answer:
        "Thjesht na kontaktoni përmes formularit tonë online ose telefonisht për një konsultim falas dhe do të ju udhëzojmë në çdo hap.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-info">
          <h2>Pyetjet më të shpeshta</h2>
          <p>
            Ne ofrojmë zgjidhje të plota për prezencën tuaj në internet – duke
            filluar nga krijimi i faqeve, hostingu i besueshëm, mirëmbajtja dhe
            siguria.
          </p>
          <div className="underline"></div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <Minus size={20} strokeWidth={2} />
                ) : (
                  <Plus size={20} strokeWidth={2} />
                )}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
