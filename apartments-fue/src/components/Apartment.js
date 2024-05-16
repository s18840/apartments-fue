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

function Apartment(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const { t } = useTranslation();
  const mainSwiperRef = useRef(null);

  const toggleFullScreen = () => {
    if (mainSwiperRef.current) {
      const swiperElement = mainSwiperRef.current.el || mainSwiperRef.current;
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        swiperElement.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      }
    }
  };

  return (
    <div className="apartment-container">
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
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
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
        <Facilities people={props.people} beds={props.beds} surface={props.surface} />
        <div className="apartment-description">
          <div>
            {t(
              "Komfortowy apartament Colores de Fuerteventura 2 w stylu boso po kapitalnym remoncie w marcu 2023 roku zostal wyposazony we wszystkie udogodnienia, ktore zapewniaja Gościom wygodny pobyt. Doskonale wyposażona nowoczesna kuchnia posiada płytę ceramiczna, kuchenkę mikrofalowa z grillem, zmywarkę, duża lodówka z zamrażarka ,toster, ekspres do kawy czajnik elektryczny, komplet garnków i zastawę stołowa co pozwala na wygodne przygotowywanie i degustacje posilkow. Znajdująca się obok przestrzeń jadalna i elegancka strefa wypoczynku wyposażona w wygodna rozkładana sofę , telewizor SMART TV oraz kącik do pracy w połączeniu szybkim bezprzewodowym internetem oferuje pelna gamę możliwości dla różnych form aktywności w trakcie pobytu.Przestronna sypialnia z łóżkami o wygodnych materacach i obszerna szafa zapewni możliwość wygodnego i komfortowego snu. Dużą łazienka to kolejna wygodna i stylowa przestrzeń dla naszych. Gości. Obszerna kabina prysznicowa z komfortowym natryskiem, dużą szafka z umywalka nad która znajduje się podświetlane lustro i niezbędne dodatki wyposażenia w tym ręczniki toaletowe i kąpielowe. Calosc dopełnia nowoczesna pralka z suszarka sprawia ze będziecie się mogli czuć w pełni komfortowo. Kolejna bardzo ważna przestrzenią jest taras w cieniu okazałych palm na którym nie mogło zabraknąć zestawu jadalnego umożliwiającego posiłki na świeżym powietrzu. Kompleks, w którym znajduje sie apartament dodatkowo sprawia, ze goscie czuja sie w nim wspaniale - dorodne palmy, spokoj, cisza, intymnosc miejsca- to tylko niektore atuty tej wyjatkowej lokalizacji. Znajdujace sie w nieopodal centrum handlowe z marketem, barami, restauracjami i egzotyczny bazar oraz znajdująca zaledwie w odleglosci zaledwie około 650 metrów piekna plaza Sotavento sprawiaja, ze wypoczynek tutaj to naprawde wspaniale przeżycie."
            )}
          </div>
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
