import React from 'react';
import { useTranslation } from "react-i18next";

function CityInfo() {
  const { t } = useTranslation();

  return (
    <div className="city-info">
      <h2>{t("About_Costa_Calma")}</h2>
      <p>{t("Costa_Calma_Info")}</p>
    </div>
  );
}

export default CityInfo;