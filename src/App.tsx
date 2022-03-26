import React from "react";

import { RegistrationForm } from './components/Registration'
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  pl: { nativeName: "Polish" },
};

function App() {
  const { t, i18n } = useTranslation();
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
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lng}
            </button>
          ))}
        </div>
          <Trans i18nKey={"description.part1"}>
            Edit <code>src/App.tsx</code> and save to reload.
          </Trans>
          {t("description.part2")}
    </div>
  );
}

export default App;
