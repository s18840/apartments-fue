import { useTranslation } from "react-i18next";

function Header () {

    const { t } = useTranslation();

    return (
        <div>
            {t("header")}
        </div>
    )
}

export default Header;