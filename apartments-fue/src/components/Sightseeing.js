import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "../assets/marker.png";
import image1 from '../assets/sightseeing/Picture1.jpg';
import image2 from '../assets/sightseeing/Picture2.jpg';
import image3 from '../assets/sightseeing/Picture3.png';
import image4 from '../assets/sightseeing/Picture4.jpg';
import image6 from '../assets/sightseeing/Picture6.jpg';
import image8 from '../assets/sightseeing/Picture8.jpg';
import image9 from '../assets/sightseeing/Picture9.jpg';
import image10 from '../assets/sightseeing/Picture10.jpg';
import image11 from '../assets/sightseeing/Picture11.jpg';
import image12 from '../assets/sightseeing/Picture12.jpg';
import image13 from '../assets/sightseeing/Picture13.jpg';
import image14 from '../assets/sightseeing/Picture14.jpg';
import image15 from '../assets/sightseeing/Picture15.jpg';
import image16 from '../assets/sightseeing/Picture16.jpg';
import image17 from '../assets/sightseeing/Picture17.jpg';
import { Icon } from "leaflet";
import "../styles/Sightseeing.scss";

function Sightseeing(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const handleClick = () => {
    const path = `/${props.path}`;
    navigate(path);
  };

  const places = [
    {
      name: "Popcorn beach",
      latitude: 28.743891,
      longitude: -13.86984,
      image: image13,
      description: "Popcorn_beach",
    },
    {
      name: "Calderon Hondo",
      latitude: 28.72881,
      longitude: -13.911732,
      image: image14,
      description: "Calderon_Hondo",
    },
    {
      name: "Mirador de Guise y Ayose",
      latitude: 28.429472,
      longitude: -14.048278,
      image: image10,
      description: "Mirador_de_Guise_y_Ayose",
    },
    {
      name: "Antigua",
      latitude: 28.419506,
      longitude: -14.0135,
      image: image12,
      description: "Antigua",
    },
    {
      name: "Betancuria",
      latitude: 28.419038,
      longitude: -14.10863,
      image: image11,
      description: "Betancuria",
    },
    {
      name: "Arco de las Penitas",
      latitude: 28.411831,
      longitude: -14.093937,
      image: image17,
      description: "Arco_de_las_planitas",
    },
    {
      name: "Ajuy",
      latitude: 28.403522,
      longitude: -14.140575,
      image: image6,
      description: "Ajuy",
    },
    {
      name: "Aguas Verdes",
      latitude: 28.400528,
      longitude: -14.107223,
      image: image9,
      description: "Aguas_Verdes",
    },
    {
      name: "Caleta de Fuste",
      latitude: 28.390459,
      longitude: -13.86338,
      image: image15,
      description: "Caleta_de_Fuste",
    },
    {
      name: "Oasis Park",
      latitude: 28.334794,
      longitude: -14.16182,
      image: image1,
      description: "Oasis_Park",
    },
    {
      name: "Tarajalejo",
      latitude: 28.273914,
      longitude: -14.045248,
      image: image16,
      description: "Tarajalejo",
    },
    {
      name: "La Pared",
      latitude: 28.224522,
      longitude: -14.226667,
      image: image8,
      description: "La_Pared",
    },
    {
      name: "Playa de Sotavento",
      latitude: 28.137134,
      longitude: -14.239219,
      image: image2,
      description: "Playa_de_Sotavento",
    },
    {
      name: "Pico de Zarza",
      latitude: 28.104695,
      longitude: -14.379163,
      image: image3,
      description: "Pico_de_Zarza",
    },
    {
      name: "Cofete",
      latitude: 28.098061,
      longitude: -14.360014,
      image: image4,
      description: "Cofete",
    },
  ];

  const toggleAccordion = (index) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  return (
    <div className="sightseeing-container">
      <MapContainer
        center={[28.334794, -14.16182]}
        zoom={10}
        style={{ height: "700px", width: "600px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.map((place, idx) => (
          <Marker
            key={idx}
            position={[place.latitude, place.longitude]}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 25],
              })
            }
            eventHandlers={{
              click: () => {
                setOpenAccordionIndex(idx);
              },
            }}
          >
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="accordion">
        <h2>List of Places:</h2>
        <ul>
          {places.map((place, idx) => (
            <li className="accordion-li" key={idx}>
              <div
                className={`accordion-button ${
                  openAccordionIndex === idx ? "active" : ""
                }`}
                onClick={() => toggleAccordion(idx)}
              >
                <span className={openAccordionIndex === idx ? "bold" : ""}>
                  {place.name}
                </span>
              </div>
              {openAccordionIndex === idx && (
                <div className="accordion-content">
                  <img className="place-image" src={place.image} alt={place.name} />
                  <p>{t(place.description)}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sightseeing;
