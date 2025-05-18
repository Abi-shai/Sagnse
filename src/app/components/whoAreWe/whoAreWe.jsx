import { t } from "i18next";

import whoAreWeImg from '../../../assets/photos/whoAreWe/home.jpeg';

import { ButtonPrimary } from "../shared/button/button";

import './whoAreWe.css';


const WhoAreWe = () => {
  return (
    <div className="who-are-we-wrapper">
      <div className="who-are-we-wrapper-insider">
        <div className="who-are-we-overlay"></div>
        <img src={whoAreWeImg} alt="Sagnse Team" />
        <div className="who-are-we-overlay-content">
          <div className="text-and-description">
            <h2 className="heading2">{t('who_are_we.heading')}</h2>
            <p className="body2">{t('who_are_we.description')}</p>
          </div>
          <ButtonPrimary content={t('who_are_we.cta')} route='/whoAreWe' />
        </div>
      </div>
    </div>
  )
}

export default WhoAreWe;