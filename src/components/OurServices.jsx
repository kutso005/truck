import React, { useEffect, useState } from "react";
import { get } from "../API/api";
export default function OurServices() {

  const [qualities, setQualities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get.getSecvice();
        console.log("Алынган маалымат:", response);

        setQualities(response);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);
  return (
  <div id="our">
      <div className="container">
      <h1 className="title-service">Наши услуги</h1>
      <div className="grid">
        {qualities.map((el) => (
          <div className="service">
            <div className="service-text">
              <img className="service-img" src={el.image} alt="" />
            </div>
            <div className="gruxchik">
              <h1>{el.title}</h1>
              <p>{el.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
