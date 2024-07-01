import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import i18n from "i18next";
import Facilities from "./Facilities";
import Furnishings from "./Furnishings";
import Map27 from "./Map27";
import Map23 from "./Map23";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "../styles/Apartment.scss";
import "material-icons/iconfont/material-icons.css";
import { useNavigate } from "react-router-dom";

function Apartment(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const { t } = useTranslation();
  const mainSwiperRef = useRef(null);
  const navigate = useNavigate();

  const toggleFullScreen = () => {
    if (mainSwiperRef.current) {
      const swiperElement = mainSwiperRef.current.el || mainSwiperRef.current;
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        swiperElement.requestFullscreen().catch((err) => {
          console.error(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
          );
        });
      }
    }
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="apartment-container">
      <div className="back-button" onClick={handleClick}>
        <span class="material-icons-outlined">chevron_left</span>
        {t("Back")}
      </div>
      <div className="swipers-container">
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
          className="mySwiper2"
          onClick={toggleFullScreen}
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
      <div className="apartment-text-container">
        <div className="apartment-name">{props.title}</div>
        <Facilities
          people={props.people}
          beds={props.beds}
          surface={props.surface}
        />
        <div className="apartment-description">
          {props.number === 27 ? (
            <div>{t("Apartment_2_description")}</div>
          ) : (
            <div>{t("Apartment_1_description")}</div>
          )}
        </div>
        <div className="apartment-furnishings-name">{t("Furnishings")}</div>
        <div className="apartment-furnishings-map">
          <Furnishings />
          {props.number === 27 ? <Map27 /> : <Map23 />}
        </div>
      </div>
    </div>
  );
}

export default Apartment;
