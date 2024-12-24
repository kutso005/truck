import React from "react";
import sections from "./../assets/image/19655930.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Section() {
  return (
    <section className="section">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="position">
            <img src={sections} alt="Биржа грузоперевозок" />
            <div className="section_absolute">
              <div className="container">
                <h1>Крупнейшая международная Биржа грузоперевозок</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position">
            <img src={sections} alt="Биржа грузоперевозок" />
            <div className="section_absolute">
              <div className="container">
                <h1>Надежная доставка грузов</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position">
            <img src={sections} alt="Биржа грузоперевозок" />
            <div className="section_absolute">
              <div className="container">
                <h1>Быстрый поиск перевозчиков</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
