import { useState } from "react";
import { t } from "i18next";

import PaginationArrows from "../shared/paginationArrows/PaginationArrows";
import CelebPhoto from "./_celebPhoto/celebPhoto";

import getPhotos from "./photosStack";

import './howTheyLookWithUS.css';

const HowTheyLookWithUs = () => {

  const [howTheyLookIndex, setHowTheyLookIndex] = useState(0);

  // const imageUrl = [firstImage, secondImage, thirdImage];

  // Slider logic
  function showPreviousMedia() {
    setHowTheyLookIndex(index => {
      if (index === 0) {
        return getPhotos.length - 2
      }
      return index - 1;
    })
  }

  function showNextMedia() {
    setHowTheyLookIndex(index => {
      // Le -1 rajouté apres imageURl.length est important pour sauter un espace dans la chaîne de l'Array
      if (index === getPhotos.length - 2) return 0
      return index + 1;
    })
  }


  // async function getData() {
  //   const url = "https://rose-viv-77.tiiny.site/spotOn.json";
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`Response status: ${response.status}`);
  //     }

  //     const json = await response.json();
  //     console.log(json);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }



  return (
    <div className="how-they-look-with-us-wrapper">
      <div className="header-and-text-wrapper">
        <h3 className="heading2">{t('how_they_look_with_us.heading')}</h3>
        <p className="body1">{t('how_they_look_with_us.description')}</p>
      </div>
      <div className="celebs-wrapper">
        {getPhotos.map(photo => {
          return <CelebPhoto key={photo} ref={howTheyLookIndex} imageSrc={photo} scrolling={showNextMedia} />
        })}
      </div>
      <PaginationArrows onClickLeft={showPreviousMedia} onClickRight={showNextMedia} />
    </div>
  )
}

export default HowTheyLookWithUs;