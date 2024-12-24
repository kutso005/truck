import React from "react";
import image from "./../assets/image/images.jpg";
export default function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="about-item">
          <div className="about">
            <h1 className="title">О нас</h1>
            <p className="descrepton">
              Наши транспортные менеджеры организуют загрузку и разгрузку Ваших
              товаров в Бишкеке, Оше, Джалал-Абаде, а также в любом другом
              уголке страны. Экспедиционная компания LKW WALTER , Ваш
              европейский перевозчик, организует Ваши грузоперевозки
              (комплектные грузы) из любой точки Киргизстана во все страны
              Европы и обратно. При этом мы обеспечиваем точный контроль
              перевозки с помощью самых современных систем спутниковой
              навигации. Убедитесь сами в совершенстве процесс  таможенного
              оформления.
            </p>

            <div className="about-items">
              <div className="aboutcontent">
                <h2>01</h2>
                <div className="price">
                  <p className="min-price">НИЗКИЕ ЦЕНЫ</p>
                  <p>
                    Мы предлагаем услуги грузчиков всего лишь от 2000 тг/ч.
                    Постоянным клиентам бонусы.
                  </p>
                </div>
              </div>

              <div className="aboutcontent">
                <h2>02</h2>
                <div className="price">
                  <p className="min-price">ОТВЕТСТВЕННОСТЬ</p>
                  <p>
                    Наши работники ответственны и пунктуальны. Работы
                    выполняются в срок.
                  </p>
                </div>
              </div>

              <div className="aboutcontent">
                <h2>03</h2>
                <div className="price">
                  <p className="min-price">ГИБКИЕ УСЛОВИЯ</p>
                  <p>
                    Разные варианты сотрудничества. Персонал в любом количестве,
                    на любой срок.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img className="imf" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
