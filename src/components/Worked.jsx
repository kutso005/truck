import React, { useState, useEffect } from "react";
import cleaning1 from "./../assets/image/gruzoperevozki-20-tonn-2.jpeg";
import cleaning2 from "./../assets/image/post-1650530327357567956.jpg";
import cleaning3 from "./../assets/image/imagesd.jpg";
import { get } from "../API/api";

export default function Worked() {
  const images = [
    cleaning1,
    cleaning2,
    cleaning3,
    cleaning1,
    cleaning2,
    cleaning3, 
  ];
  const [qualities, setQualities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get.getWork();
        console.log("Алынган маалымат:", response);

        setQualities(response);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);
  return (
   <div id="work">
     <div className="container">
      <h1 className="title-service">Наши работы</h1>
      <div className="works-slider-container">
        <div className="works-slider-track">
          {qualities.map((image, index) => (
            <div key={index} className="work-image-container">
              <img
                src={image.image}
                alt={`Work example ${index + 1}`}
                className="work-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
}
