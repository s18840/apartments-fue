import "../styles/Apartment.scss";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
function Furnishings(props) {
  const { t } = useTranslation();

  return (
    <div className="apartment-furnishings">
      <div className="basic-container">
        <span className="material-icons-outlined">pool</span>
        <p className="text">{t("Shared_Swimming_pool")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">directions_car</span>
        <p className="text">{t("Free_Parking")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">smoke_free</span>
        <p className="text">{t("No_Smoking_Allowed")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">pets</span>
        <p className="text">{t("No_Pets_Allowed")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">local_laundry_service</span>
        <p className="text">{t("Washing_Machine_And_Dryer")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">soap</span>
        <p className="text">{t("Soap_Shampoo")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">home_repair_service</span>
        <p className="text">{t("Towels_Linen_Toilet_Paper")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">checkroom</span>
        <p className="text">{t("Wardrobe_With_Hangers")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">iron</span>
        <p className="text">{t("Iron")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">tv</span>
        <p className="text">{t("Tv_With_Smart_Tv")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">wifi</span>
        <p className="text">{t("Wi_Fi")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">crib</span>
        <p className="text">{t("Crib_Chair_Toys_For_The_Little_Ones")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">microwave</span>
        <p className="text">{t("Microwave_Kettle_Cooktop_Toaster")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">flatware</span>
        <p className="text">{t("Crockery_And_Cutlery")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">kitchen</span>
        <p className="text">{t("Refrigerator_And_Freezer")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">coffee_maker</span>
        <p className="text">{t("Coffee_Machine")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">deck</span>
        <p className="text">{t("Terrace_Or_Balcony_Furniture")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">local_florist</span>
        <p className="text">{t("Garden_View")}</p>
      </div>
    </div>
  );
}

export default Furnishings;
