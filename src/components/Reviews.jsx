import React, { useEffect, useState } from "react";
import marat from "./../assets/image/mart.jpg";
import { get } from "../API/api";

export default function Reviews() {
  const [qualities, setQualities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get.getReview();
        console.log("Алынган маалымат:", response);

        setQualities(response);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);
  const reviews = [
    {
      id: 1,
      name: "Марат",
      text: "Уборка аябай жакшы жасашты, мага жакты!",
      image: marat,
    },
    {
      id: 2,
      name: "Лилия",
      text: "Нам все очень понравилось, большое спасибо, будем обращаться к вам регулярно!",
      image: marat,
    },
    {
      id: 3,
      name: "Лариса",
      text: "Я очень довольна вашей работой. Спасибо большое!",
      image: marat,
    },
  ];

  return (
    <div className="reviews-section">
      <div className="container">
        <h1 className="title-service">Отзывы</h1>
        <h2 className="reviews-subtitle">Отзывы наших клиентов</h2>

        <p className="reviews-help-text">
          Помогите нам стать лучше оцените нашу работу, оставьте свой отзыв!
        </p>
      

        <div className="reviews-grid">
          {qualities.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-image">
                <img src={review.image} alt={review.name} />
                <p className="review-text">{review.text}</p>
              </div>

              <p className="review-author">-{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
