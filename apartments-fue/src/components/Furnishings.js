import "../styles/Apartment.scss";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
function Furnishings(props) {
  const { t } = useTranslation();

  return (
    <div className="apartment-furnishings">
      <div className="basic-container">
        <span className="material-icons-outlined">pool</span>
        <p className="text">{t("Shared swimming pool")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">directions_car</span>
        <p className="text">{t("Free parking")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">smoke_free</span>
        <p className="text">{t("No smoking allowed")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">pets</span>
        <p className="text">{t("No pets allowed")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">local_laundry_service</span>
        <p className="text">{t("Washing machine and dryer")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">soap</span>
        <p className="text">{t("Soap, shampoo")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">home_repair_service</span>
        <p className="text">{t("Towels, linen, toilet paper")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">checkroom</span>
        <p className="text">{t("Wardrobe with hangers")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">iron</span>
        <p className="text">{t("Iron")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">tv</span>
        <p className="text">{t("Tv with Smart TV")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">wifi</span>
        <p className="text">{t("Wi-Fi")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">crib</span>
        <p className="text">{t("Crib, chair, toys for the little ones")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">microwave</span>
        <p className="text">{t("Microwave, kettle, cooktop, toaster")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">flatware</span>
        <p className="text">{t("Crockery and cutlery")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">kitchen</span>
        <p className="text">{t("Refrigerator and freezer")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">coffee_maker</span>
        <p className="text">{t("Coffee machine")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">deck</span>
        <p className="text">{t("Terrace or balcony, furniture")}</p>
      </div>
      <div className="basic-container">
        <span className="material-icons-outlined">local_florist</span>
        <p className="text">{t("Garden view")}</p>
      </div>
    </div>
  );
}

export default Furnishings;
