import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Designs/Homepage.css";
import NavigationBar from "./NavigationBar.js";
import HomepageBanner from "../Pictures/Banner1.png"; 
import EcoLogo from "../Pictures/eco.png";
import LocalLogo from "../Pictures/local.png";
import Service from "../Pictures/customerservice.png"; 

const Homepage = () => {
  const [faqAnswers, setFaqAnswers] = useState({});

  const toggleFaqAnswer = (index) => {
    setFaqAnswers((prevAnswers) => ({
      ...prevAnswers,
      [index]: !prevAnswers[index],
    }));
  };

  return (
    <div className="homepage">
      <NavigationBar />

      {/* Banner Image */}
      <div className="banner-container">
        <img src={HomepageBanner} alt="Homepage Banner" className="banner-image" />
      </div>
      {/* After the Banner */}
      <div className="below-banner">
        <h1 className="below-banner-heading">Awaken your creativity and align with the universe's flow.</h1>
        <p className="below-banner-text">
          Embark on a journey of self-expression with handcrafted treasures, inspired by nature’s timeless cycles.
        </p>
        <button className="shop-now-button">✿ SHOP NOW ✿</button>
      </div>

      {/* After the SHOP NOW Button */}
      <div className="features-container">
        <div className="feature-item">
          <img src={EcoLogo} alt="Eco Paper Logo" className="feature-logo" />
          <p className="feature-text eco-paper">Eco Paper</p>
          <p className="feature-description">Environmentally-friendly sourced paper</p>
        </div>
        <div className="feature-item">
          <img src={LocalLogo} alt="PH Made Logo" className="feature-logo" />
          <p className="feature-text ph-made">PH Made</p>
          <p className="feature-description">Small local family run business</p>
        </div>
        <div className="feature-item">
          <img src={Service} alt="Customer Service Logo" className="feature-logo" />
          <p className="feature-text customer-service">Customer Service</p>
          <p className="feature-description">Super friendly and quick response</p>
        </div>
      </div>

       {/* FAQ Section */}
      <div className="faq-section">
        <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleFaqAnswer(1)}>
            💫 Where are you based? 
            </button>
            {faqAnswers[1] && <p className="faq-answer">Our studio is located in Manila, Philippines. We post out all our items directly from our H.Q to anywhere in the world, including the USA.</p>}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleFaqAnswer(2)}>
            💫 Do you offer international shipping?
            </button>
            {faqAnswers[2] && <p className="faq-answer">Yes, we offer international shipping to selected countries.</p>}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleFaqAnswer(3)}>
            💫 What are your shipping times?
            </button>
            {faqAnswers[3] && <p className="faq-answer">2-3 business days anywhere in the PH from dispatch. 5-9 business days for the rest of the world.</p>}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleFaqAnswer(4)}>
            💫 Can I cancel my order?
            </button>
            {faqAnswers[4] && <p className="faq-answer">Unfortunately, we cannot process cancellations after payment has been made. Please check your order before submitting it.</p>}
          </div>
          <div className="faq-item">
            <button className="faq-question" onClick={() => toggleFaqAnswer(5)}>
            💫 What do I do if I think my item is lost?  
            </button>
            {faqAnswers[5] && <p className="faq-answer">If you have waited longer than our shipping times then please contact us asap on info@staycraftybykrizzy.com . There is very little we can do once an item is in the postal system but we pride ourselves on great customer service and will do anything we can to assist you.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
