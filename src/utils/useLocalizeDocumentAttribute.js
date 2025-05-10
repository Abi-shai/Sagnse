import { useEffect } from "react";
import { useTranslation } from "react-i18next";


// Function to take in account localization for the HTML page title
export default function useLocalizeDocumentAttributes() {
  const { t, i18n } = useTranslation();

  // To re-render on user language changes
  useEffect(() => {
    document.title = t("page_title");
  }, [i18n, i18n.resolvedLanguage, t]);
}