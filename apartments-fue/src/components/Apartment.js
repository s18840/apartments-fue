import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
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

function Apartment(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const { t } = useTranslation();
  console.log(props)

  return (
    <div className="apartment-container">
      <div className="swipers-container">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          loop={true}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {props.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          loop={true}
          slidesPerView={3}
          freeMode={true}
          navigation={true}
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
        <Facilities people={props.people} beds={props.beds} surface={props.surface} />
        <div className="apartment-description">
          <div>
            {t(
              "Odkryj luksus i komfort w naszym nowo odnowionym apartamencie położonym w malowniczej Costa Calma na Fuerteventurze."
            )}
          </div>
          <div>
            {t(
              "Ten stylowy apartament znajduje się na kameralnym osiedlu z dostępem do wspólnego basenu, idealnego do relaksu i odpoczynku pod słońcem."
            )}
          </div>
          <div>{t("")}</div>
          <div>{t("")}</div>

          {t(
            "Apartament został kompleksowo zmodernizowany w 2022 roku, oferując nowoczesne wykończenia i najwyższej jakości materiały. Wnętrze charakteryzuje się przestronnością i jasnością, z eleganckimi meblami, które zapewniają komfortowy pobyt."
          )}
          {t(
            "Kuchnia jest w pełni wyposażona, z nowoczesnymi sprzętami i dużą ilością miejsca do przygotowywania posiłków. Przestronny salon z wyjściem na balkon oferuje przepiękne widoki na okolicę i jest idealnym miejscem do relaksu."
          )}
          {t(
            "Sypialnie są zaprojektowane z myślą o maksymalnym komforcie, z dużymi łóżkami i miękką pościelą. Nowoczesna łazienka z eleganckimi armaturami zapewnia odświeżające chwile po dniu pełnym słońca i zabawy."
          )}
        </div>
        <div>
          {t("Furnishings")}
        </div>
        <Furnishings/>
        {props.number === 27 ? <Map27 /> : <Map23 />}
      </div>
    </div>
  );
}

export default Apartment;
