import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { get } from "../API/api";
const iconComponents = {
  FaFacebook: FaFacebook,
  FaInstagram: FaInstagram,
  FaTwitter: FaTwitter,
  FaLinkedin: FaLinkedin,
  FaTelegram: FaTelegram,
  FaWhatsapp: FaWhatsapp,
};
export default function Footer() {
  const [qualities, setQualities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get.getFooter();
        console.log("Алынган маалымат:", response);

        setQualities(response);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <footer className="footer">
      {qualities.map((el) => (
        <div className="footer-container">
          <div className="footer-column">
            <h3>Информация</h3>
            <ul>
              <li>
                <a href="#">Наши услуги</a>
              </li>
              <li>
                <a href="#">Наши работы</a>
              </li>
              <li>
                <a href="#">Отзывы</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li>
                <a href="#">Главное</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Время работы/Адрес</h3>
            <p>{el.description}</p>
          </div>

          <div className="footer-column">
            <h3>Наши контакты</h3>
            <div className="contact-info">
              {el.numbers.map((el) => (
                <p>
                  <a href={`tel:${el.number}`}>{el.number}</a>
                </p>
              ))}
              <div className="social-icons">
                {el.socials.map((el) => (
                  <a href={el.link} target="_blank" rel="noopener noreferrer">
                    {el.name && iconComponents[el.name]
                      ? React.createElement(iconComponents[el.name], {
                          className: "social-icon",
                          style: { fontSize: "24px" },
                        })
                      : null}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </footer>
  );
}
