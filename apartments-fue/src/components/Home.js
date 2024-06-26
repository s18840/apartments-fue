import React from "react";
import { useTranslation } from "react-i18next";
import Card from "./Card";
import CityInfo from "./CityInfo";
import '../styles/Home.scss';
import separator from '../assets/separator-small-1.png';

function Home(props) {
  const { t } = useTranslation();

  return (
    <>
      <div className="home-info-text">
        <div className="center">
          <p>
            {t("Apartment_Info1")}
          </p>
          <p>
            {t("Apartment_Info2")}
          </p>
        </div>
      </div>
      <img className='separator' src={separator}/>
      <div className="App-home">
        <Card
          image={props.image1}
          title="Colores de Fuerteventura 1"
          alt="app23"
          path="colores_de_fuerteventura_1"
        />
        <Card
          image={props.image2}
          title="Colores de Fuerteventura 2"
          alt="app27"
          path="colores_de_fuerteventura_2"
        />
      </div>
      <div className="home-city-info-text">
        <div className="center">
          <CityInfo />
        </div>
      </div>
    </>
  );
}

export default Home;