import React from "react";
import { useTranslation } from "react-i18next";

function Apartment(props) {
  const { t } = useTranslation();

  return (
    <div className="appartment-container">
      <div className="title">
        <a>{props.title}</a>
      </div>
    </div>
  );
}

export default Apartment;
