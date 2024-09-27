import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import "../styles/Apartment.scss";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { useNavigate } from "react-router-dom";
import i18n from "i18next";
import Facilities from "./Facilities";
import Furnishings from "./Furnishings";
import Map27 from "./Map27";
import Map23 from "./Map23";
import "material-icons/iconfont/material-icons.css";

function Apartment(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup
  const mainSwiperRef = useRef(null);
  const navigate = useNavigate();

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="apartment-container">
      <div className="back-button" onClick={handleClick}>
        <span className="material-icons-outlined">chevron_left</span>
        {t("Back")}
      </div>

      <div className="swipers-container">
        {/* Trigger popup on click */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Pagination]}
          className="mySwiper2"
          onClick={openPopup}
        >
          {props.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          loop={true}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {props.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-button" onClick={closePopup}>
              &times;
            </span>

            {/* Swiper inside the popup */}
            <Swiper
              ref={mainSwiperRef}
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              loop={true}
              navigation={true}
              pagination={{ clickable: true }}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs, Pagination]}
              className="popupSwiper"
            >
              {props.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <div className="apartment-text-container">
        <div className="apartment-header-container">
          <div className="apartment-name">{props.title}</div>
          <div className="airbnb-button">
            {props.number === 27 ? (
              <a href="https://www.airbnb.pl/rooms/863722242925772929?guests=1&adults=1&s=67&unique_share_id=69fe8b66-b848-4380-bbb2-3aadfcd052ba">
                {t("Airbnb_reservation")}
              </a>
            ) : (
              <a href="https://www.airbnb.pl/rooms/30067044?guests=1&adults=1&s=67&unique_share_id=df41e7ba-2cca-4db9-acfc-323f7cb93021">
                {t("Airbnb_reservation")}
              </a>
            )}
          </div>
        </div>

        <Facilities
          people={props.people}
          beds={props.beds}
          surface={props.surface}
        />

        <div className="apartment-description">
          {props.number === 27 ? (
            // <div>{t("Apartment_2_description")}</div>
            <div className="apartment-description-container">
              <div>
                Szukasz idealnego miejsca na
                <strong> wakacje na Fuerteventurze?</strong> Apartament
                <strong> Colores de Fuerteventura 23</strong> w miejscowości
                <strong> Costa Calma</strong> to nowoczesne, przytulne wnętrze,
                które zapewnia wyjątkowy komfort i relaks. Po gruntownym
                remoncie w 2023 roku, apartament oferuje
                <strong> wysoki standard</strong> wykończenia, zaprojektowany z
                myślą o wymagających Gościach. Położony jest w malowniczym
                kompleksie z basenem i palmami.
              </div>
              <div className="description-header-text">
                Komfortowy apartament po remoncie – Twój prywatny raj na
                Fuerteventurze
              </div>
              <div>
                Apartament Colores de Fuerteventura 23 zlokalizowany na
                parterze, z
                <strong> tarasem w cieniu egzotycznych roślin</strong>,
                gwarantuje spokojny wypoczynek w kameralnej atmosferze. Goście
                mogą cieszyć się urokliwym wnętrzem w stylu
                <strong> boho</strong> - w pastelowych kolorach wyspy.
                Zaprojektowany został przez designera i zyskał wyjątkowy
                wakacyjny, wyspiarski charakter.
              </div>
              <div className="description-header-text">
                Idealna lokalizacja – blisko plaży i lokalnych atrakcji
              </div>
              <div>
                Apartament Colores de Fuerteventura 23 to doskonała baza
                wypadowa do odkrywania piękna wyspy. Położony w pobliżu{" "}
                <strong> plaży Sotavento</strong>, która znajduje się zaledwie
                700 metrów od apartamentu, oferuje Gościom szybki dostęp do
                jednej z najpiękniejszych plaż na wyspie. W bliskiej okolicy
                znajduje się również centrum handlowe, restauracje, bary oraz
                lokalny bazar, gdzie można poczuć egzotyczną atmosferę
                Fuerteventury.
              </div>
            </div>
          ) : (
            // <div>{t("Apartment_1_description")}</div>
            <div className="apartment-description-container">
            <div>
              Szukasz idealnego miejsca na
              <strong> wakacje na Fuerteventurze?</strong> Apartament
              <strong> Colores de Fuerteventura 27</strong> w miejscowości
              <strong> Costa Calma</strong> to nowoczesne, przytulne wnętrze,
              które zapewnia wyjątkowy komfort i relaks. Po gruntownym
              remoncie w 2023 roku, apartament oferuje
              <strong> wysoki standard</strong> wykończenia, zaprojektowany z
              myślą o wymagających Gościach. Położony jest w malowniczym
              kompleksie z basenem i palmami.
            </div>
            <div className="description-header-text">
              Komfortowy apartament po remoncie – Twój prywatny raj na
              Fuerteventurze
            </div>
            <div>
              Apartament Colores de Fuerteventura 27 zlokalizowany na
              parterze, z
              <strong> tarasem w cieniu egzotycznych roślin</strong>,
              gwarantuje spokojny wypoczynek w kameralnej atmosferze. Goście
              mogą cieszyć się urokliwym wnętrzem w stylu
              <strong> boho</strong> - w pastelowych kolorach wyspy.
              Zaprojektowany został przez designera i zyskał wyjątkowy
              wakacyjny, wyspiarski charakter.
            </div>
            <div className="description-header-text">
              Idealna lokalizacja – blisko plaży i lokalnych atrakcji
            </div>
            <div>
              Apartament Colores de Fuerteventura 27 to doskonała baza
              wypadowa do odkrywania piękna wyspy. Położony w pobliżu{" "}
              <strong> plaży Sotavento</strong>, która znajduje się zaledwie
              700 metrów od apartamentu, oferuje Gościom szybki dostęp do
              jednej z najpiękniejszych plaż na wyspie. W bliskiej okolicy
              znajduje się również centrum handlowe, restauracje, bary oraz
              lokalny bazar, gdzie można poczuć egzotyczną atmosferę
              Fuerteventury.
            </div>
          </div>
          )}
        </div>

        <div className="apartment-furnishings-name">{t("Furnishings")}</div>

        <div className="apartment-furnishings-map">
          <Furnishings />
          {props.number === 27 ? <Map27 /> : <Map23 />}
        </div>
        <div className="apartment-reservation-container">
          <div className="reservation-header-text">
            Zarezerwuj swój pobyt już dziś!
            <div className="airbnb-button">
            {props.number === 27 ? (
              <a href="https://www.airbnb.pl/rooms/863722242925772929?guests=1&adults=1&s=67&unique_share_id=69fe8b66-b848-4380-bbb2-3aadfcd052ba">
                {t("Airbnb_reservation")}
              </a>
            ) : (
              <a href="https://www.airbnb.pl/rooms/30067044?guests=1&adults=1&s=67&unique_share_id=df41e7ba-2cca-4db9-acfc-323f7cb93021">
                {t("Airbnb_reservation")}
              </a>
            )}
          </div>
          </div>
          <div className="reservation-description">
            <p className="text">
              Jeśli szukasz spokoju i bliskości natury, Apartament Colores de
              Fuerteventura 23 jest idealnym wyborem na Twoje wakacje.
            </p>
            <p className="text">
              Fuerteventura czeka na Ciebie – zanurz się w jej wyjątkowej
              atmosferze i ciesz się niezapomnianymi wakacjami na jednej z
              najpiękniejszych wysp Kanaryjskich.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apartment;
