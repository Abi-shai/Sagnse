import { useState } from "react";
import { t } from "i18next";

import { ButtonPrimary, ButtonSecondary } from "../shared/button/button";
import PaginationArrows from "../shared/paginationArrows/PaginationArrows";

import firstImage from '../../../assets/photos/heroSection/first.jpg';
import secondImage from '../../../assets/photos/heroSection/second.jpg';
import thirdImage from '../../../assets/photos/heroSection/third.jpg';

import './HeroSection.css';


function HeroSection() {

  const [imageIndex, setImageIndex] = useState(2);

  const imageUrl = [firstImage, secondImage, thirdImage];

  return (
    <div className="wrapper" >
      <div className="overlay"></div>
      <img src={imageUrl[imageIndex]} />
      <div className="content-wrapper">
        <h1 className="heading1">{t('hero_section.pitch')}</h1>
        <ButtonPrimary content={t('hero_section.cta')} />
      </div>
      <PaginationArrows />
    </div>
  )
}

export default HeroSection;