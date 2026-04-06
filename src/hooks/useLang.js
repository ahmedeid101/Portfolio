import { useState } from "react";
import { translations } from "../i18n/translations";

export const useLang = () => {
  const savedLang = localStorage.getItem("lang") || "EN";
  const [lang] = useState(savedLang);

  const t = translations[lang];

  return { lang, t };
};