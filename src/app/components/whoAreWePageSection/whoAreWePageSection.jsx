import { t } from "i18next";

import { ButtonPrimary } from "../shared/button/button";

import sectionImageSource from '../../../assets/photos/whoAreWe/1.jpeg';

import './whoAreWePageSection.css';

const WhoAreWePageSection = ({ imageSide, imageSource, headingContent, explainingContent, noButton }) => {
  return (
    <div className="who-are-we-page-section-wrapper">
      <div className={imageSide === 'left' ? "double-wrapper double-wrapper-image-left" : imageSide === 'right' ? "double-wrapper double-wrapper-image-right" : null} >
        <div className="img-section">
          <img src={imageSource} alt="Sagnse" />
        </div>
        <div className="info-section">
          <h2 className='heading2'>{headingContent}</h2>
          <p className='body1'>{explainingContent}</p>
          {
            noButton === true ? null : <ButtonPrimary content={t('who_are_we_page.sbs_cta')} />
          }
        </div>
      </div>
    </div >
  )
}

export default WhoAreWePageSection;