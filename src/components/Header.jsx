import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { get } from "../API/api";

export default function Header() {
  const [qualities, setQualities] = useState([]);
  const [number, setNumber] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get.getLogo();
        const respon = await get.getNumber();
        console.log("Алынган маалымат:", response);
        setQualities(response);
        setNumber(respon);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };
    fetchData();
  }, []);
  const scrollToForm = () => {
    const formElement = document.querySelector("#our");
    if (formElement) {
      const offset = 0;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const scrollWork= () => {
    const formElement = document.querySelector("#work");
    if (formElement) {
      const offset = 0;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const scrollAbout= () => {
    const formElement = document.querySelector("#about");
    if (formElement) {
      const offset = 0;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          {qualities.map((el) => (
            <img width={100} height={40} src={el.logo} alt="" />
          ))}
          <div className="pages">
            <p>Главная</p>

            <p onClick={scrollToForm}>Наши услуги</p>
            <p onClick={scrollWork}>Наши работы</p>
            <p onClick={scrollAbout}>О нас</p>
          </div>
          <div className="contact">
            <FaPhoneAlt size={20} color="#fff" />
            {number.map((el) => (
              <a href={`tel:${el.phone_number}`}>{el.phone_number}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
