import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";
import de from "./deutsch.json";
import english from "./english.json";
import ar from "./arabic.json";

i18n
  .use(initReactI18next)

  .init({
    lng: I18nManager.isRTL ? "ar" : "eng",
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      en: english,
      de: de,
      ar: ar,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
