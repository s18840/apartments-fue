import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

function Card(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    const path = `/${props.path}`;
    navigate(path);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={props.image} className="image" alt={props.alt} />
      <div className="title">
        <a>{props.title}</a>
      </div>
    </div>
  );
}

export default Card;
