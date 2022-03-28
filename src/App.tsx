import { useState, Suspense } from "react";
import { RegistrationForm } from './components/Registration'
import { useTranslation, Trans } from "react-i18next";
import Footer from "./components/footer";

const lngs = {
  en: { nativeName: "English" },
  pl: { nativeName: "Polish" },
};

function App() {
  const { t, i18n } = useTranslation();
  const [count, setCounter] = useState(0);
  return (
    <div>
      hello!
      <RegistrationForm />
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => {
                i18n.changeLanguage(lng);
                setCounter(count + 1);
              }}
            >
              {lng}
            </button>
          ))}
        </div>
          <Trans i18nKey={"description.part1"}>
            Edit <code>src/App.tsx</code> and save to reload.
          </Trans>
        <i>{t("counter", { count })}</i>
          {t("description.part2")}
      <Footer t={t} />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}
