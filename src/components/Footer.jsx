import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
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
          <p>
            Раб время с 09.00-23.00 С Пон-Воск без выходных г Бишкек Оттукская
            35
          </p>
        </div>

        <div className="footer-column">
          <h3>Наши контакты</h3>
          <div className="contact-info">
            <p>+996501448914</p>
            <p>+996502726452</p>
            <div className="social-icons">
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaWhatsapp />
              </a>
              <a href="#">
                <FaTelegram />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
