import { ButtonPrimary } from "../shared/button/button";

import locationImage from '../../../assets/photos/locationImage/location.png';

import './locationSection.css';

const LocationSection = () => {

  const locationLink = 'https://maps.app.goo.gl/dPRDv41gTPuyT2vw7';

  return (
    <div className="location-section-wrapper">
      <img src={locationImage} alt="Find us here" />
      <div className="button-wrapper">
        <ButtonPrimary content='Find the location' route={locationLink} target='blank' />
      </div>
    </div>
  )
}

export default LocationSection;