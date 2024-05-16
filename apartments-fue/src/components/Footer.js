import { useTranslation } from "react-i18next";
import "../styles/Footer.scss";
import "../styles/styles.scss";
function Footer () {

    const { t } = useTranslation();

    return (
        <div className="footer-container">
            <div className="text">
            {t("footer")}
            Adres kontaktowy - mail
            Kontakt

            </div>
        </div>
    )
}

export default Footer;