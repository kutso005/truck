import React from "react";
import "../assets/styles/ContactButtons.css";

const ContactButtons = () => {
  return (
    <div className="contact-buttons">
      <a
        href="tel:+7XXXXXXXXXX"
        className="contact-button phone"
        aria-label="Позвонить"
      >
        <i className="fas fa-phone"></i>
      </a>
      <a
        href="https://wa.me/7XXXXXXXXXX"
        className="contact-button whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default ContactButtons;
