import { useState, useEffect } from "react";
import { t } from "i18next";

import { ButtonPrimary, ButtonSecondary } from "../shared/button/button";

import firstImage from '../../../assets/photos/heroSection/first.jpg';
import secondImage from '../../../assets/photos/heroSection/second.jpg';
import thirdImage from '../../../assets/photos/heroSection/third.jpg';
import ArrowLeft from '../../../assets/icons/chevronLeft.svg?react';
import ArrowRight from '../../../assets/icons/chevronRight.svg?react';

import './HeroSection.css';


function HeroSection() {

  const [imageIndex, setImageIndex] = useState(0);

  const imageUrl = [firstImage, secondImage, thirdImage];

  // Slider logic
  function showPreviousMedia() {
    setImageIndex(index => {
      if (index === 0) {
        return imageUrl.length - 1
      }
      return index - 1;
    })
  }

  function showNextMedia() {
    setImageIndex(index => {
      // Le -1 rajouté apres imageURl.length est important pour sauter un espace dans la chaîne de l'Array
      if (index === imageUrl.length - 1) return 0
      return index + 1;
    })
  }

  return (
    <div className="wrapper" >
      <div className="overlay"></div>
      <div className="image-slider-wrapper">
        {imageUrl.map(url => {
          return <img style={{ translate: `${-100 * imageIndex}%` }} key={url} src={url} />
        })}
      </div>
      <div className="content-wrapper">
        <h1 className="heading1">{t('hero_section.pitch')}</h1>
        <ButtonPrimary content={t('hero_section.cta')} />
      </div>

      {/* Pagination semantic */}
      <div className="arrows-wrapper">
        <div className="arrow-style">
          <ArrowLeft onClick={showPreviousMedia} />
        </div>
        <div className="arrow-style">
          <ArrowRight onClick={showNextMedia} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection;