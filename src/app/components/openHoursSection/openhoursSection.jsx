import ClockIcon from '../../../assets/icons/schedule.svg?react';
import DeskphoneIcon from '../../../assets/icons/deskphone.svg?react';
import SmartphoneIcon from '../../../assets/icons/smartphone.svg?react';

import './openHoursSection.css';

const OpenHoursSection = () => {
  return (
    <div className="open-hours-section-wrapper">

      <div className="info">
        <div className="icon-wrapper"><ClockIcon /></div>
        <p className="body2">Monday to friday, 10am to 8pm GMT</p>
      </div>

      <div className="info">
        <div className="icon-wrapper"><SmartphoneIcon /></div>
        <p className="body2">+221 77 219 48 80</p>
      </div>

      <div className="info">
        <div className="icon-wrapper"><DeskphoneIcon /></div>
        <p className="body2">+221 33 865 97 84</p>
      </div>

    </div>
  )
}

export default OpenHoursSection;