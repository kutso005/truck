import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1>LOGO</h1>
          <div className="pages">
            <p>Главная</p>

            <p>Наши услуги</p>
            <p>Наши работы</p>
            <p>О нас</p>
          </div>
          <div className="contact">
          <FaPhoneAlt size={20} color="#fff"/>
          <a href="tel:996777111797">996777111797</a>
          </div>
        </div>
      </div>
    </div>
  );
}
