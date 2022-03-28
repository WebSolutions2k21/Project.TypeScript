import { useTranslation } from "react-i18next";
import getGreetingTime from "utils/getGreetingTime";

function Footer() {
  const { t } = useTranslation();
  return <div>{t("footer.date", { date: new Date(), context: getGreetingTime() })}</div>;
}

export default Footer;
