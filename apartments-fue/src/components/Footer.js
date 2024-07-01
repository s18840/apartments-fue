import { useTranslation } from "react-i18next";
import "../styles/Footer.scss";
import "../styles/styles.scss";
function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer-container">
      <div className="text">
        <div className="contact-us">{t("Contact_us")}</div>
        <div>{t("Mail")}: colores_de_fuerteventura@gmail.com</div>
        <div>{t("Telefon")}: +48 123 123 123</div>
      </div>
    </div>
  );
}

export default Footer;
