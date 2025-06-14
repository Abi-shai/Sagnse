import { useTranslation } from "react-i18next";
import LanguageIcon from '../../../../assets/icons/language.svg?react';

import { supportedLanguages } from "../../../../utils/i18n";

import './languageSwitcher.css';

function LanguageSwitcher({ isFooter }) {

  const { i18n } = useTranslation();

  return (

    <div className={isFooter ? 'language-switcher-footer' : 'language-switcher-header'}>

      <LanguageIcon />

      <select
        value={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {Object.entries(supportedLanguages).map(([code, name]) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </div>

  )
}

export default LanguageSwitcher;