import React from "react";
import { useTranslation } from "react-i18next";
import Card from './Card';

function Home(props) {
  const { t } = useTranslation();

  return (
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
  );
}

export default Home;
