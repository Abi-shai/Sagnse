import { t } from "i18next";

import './InputDropdown.css';

export const InputDropdownPartner = () => {

  return (
    <div className="input-dropdown-wrapper">
      <label htmlFor="partner">{t('joining_partner.joining_form_field_label')}</label>
      <select className="body2" id="partner"
      >
        <option className="first" value="">{t('joining_partner_placeholder')}</option>
        <hr />
        <option className="body2">{t('joining_partner.options.1')}</option>
        <option className="body2">{t('joining_partner.options.2')}</option>
        <option className="body2">{t('joining_partner.options.3')}</option>
      </select>
    </div>
  )
}

export const InputDropdownReseller = () => {

  return (
    <div className="input-dropdown-wrapper">
      <label htmlFor="reseller">{t('joining_reseller.joining_form_field_label')}</label>
      <select className="body2" id="reseller"
      >
        <option className="first" value="">{t('joining_reseller_placeholder')}</option>
        <hr />
        <option className="body2">{t('joining_reseller.options.1')}</option>
        <option className="body2">{t('joining_reseller.options.2')}</option>
      </select>
    </div>
  )
}
