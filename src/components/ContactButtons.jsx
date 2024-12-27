import React, { useEffect, useState } from "react";
import "../assets/styles/ContactButtons.css";
import { get } from "../API/api";

const ContactButtons = () => {
  const [qualities, setQualities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get.getNumber();
        console.log("Алынган маалымат:", response);

        setQualities(response);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);
  return (
  <div>
    {qualities.map((el)=>(
        <div className="contact-buttons">
        <a
          href={`tel:${el.phone_number}`}
          className="contact-button phone"
          aria-label="Позвонить"
        >
          <i className="fas fa-phone"></i>
        </a>
        <a
          href={`https://wa.me/${el.wa_number}`}
          className="contact-button whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    ))}
  </div>
  );
};

export default ContactButtons;
