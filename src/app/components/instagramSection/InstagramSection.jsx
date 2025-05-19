import { t } from "i18next";

import { ButtonPrimary } from "../shared/button/button";

import firstImage from '../../../assets/photos/instagramSection/1.jpeg';
import secondImage from '../../../assets/photos/instagramSection/2.jpeg';
import thirdImage from '../../../assets/photos/instagramSection/3.jpeg';

import './InstagramSection.css';

const InstagramSection = () => {
  return (
    <div className="instagram-section-wrapper">
      <div className="row">
        <img src={firstImage} alt="instagram photo" />
        <img src={secondImage} alt="instagram photo" />
        <img src={thirdImage} alt="instagram photo" />
      </div>
      <div className="row">
        <img src={firstImage} alt="instagram photo" />
        <img src={secondImage} alt="instagram photo" />
        <img src={thirdImage} alt="instagram photo" />
      </div>
      <div className="row">
        <img src={firstImage} alt="instagram photo" />
        <img src={secondImage} alt="instagram photo" />
        <img src={thirdImage} alt="instagram photo" />
      </div>
      <div className="instagram-overlay">
        <h2 className="heading2">{t('instagram_section.heading')}</h2>
        <ButtonPrimary content={t('instagram_section.cta')} route='https://www.instagram.com/sagnseofficial/' target='blank' />
      </div>
    </div>
  )
}

export default InstagramSection;