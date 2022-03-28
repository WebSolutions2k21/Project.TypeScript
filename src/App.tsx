import Footer from "components/Footer";
import { RegistrationForm } from './components/Registration'
import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";

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
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {t("description.part2")}
      <Footer />
    </div>
  );
}

export default App;
