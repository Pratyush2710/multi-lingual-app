import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },

    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
