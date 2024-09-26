import { useTranslation } from "react-i18next";
import "../styles/styles.scss";
function Climate() {
  const { t } = useTranslation();

  return (
    <div>
        Tu będą informacje o klimacie na wyspie
    </div>
  );
}

export default Climate;