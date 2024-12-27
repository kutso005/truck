import React, { useEffect, useState } from "react";
import image from "./../assets/image/images.jpg";
import { get } from "../API/api";
export default function About() {
  const [qualities, setQualities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get.getAbout();
        console.log("Алынган маалымат:", response);

        setQualities(response);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div id="about">
      <div className="container">
        {qualities.map((el) => (
          <div className="about-item">
            <div className="about">
              <h1 className="title">О нас</h1>
              <p className="descrepton">
             {el.text}
              </p>

              <div className="about-items">
              
                {el.details.map((el)=>(
                    <div className="aboutcontent">
                    {/* <h2>{el.de}</h2> */}
                    <div className="price">
                      <p className="min-price">{el.title}</p>
                      <p>
                   {el.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img className="imf" src={el.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
