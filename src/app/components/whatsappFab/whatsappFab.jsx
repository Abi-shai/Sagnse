import { t } from "i18next";

import WhatsappIcon from '../../../assets/icons/whatsapp.svg?react';

import './whatsappFab.css';

const WhatsappFab = () => {
  return (
    <a href="http://wa.me/+221772194880" target="blank" className="whatsapp-fab-wrapper">
      <div className="icon-wrapper">
        <WhatsappIcon />
      </div>
      <p className="body2">{t('whatsapp_cta')}</p>
    </a>
  )
}

export default WhatsappFab;