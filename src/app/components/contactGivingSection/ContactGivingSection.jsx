import { useState, useEffect } from "react";
import { t } from "i18next";

import { ButtonPrimarySubmit } from "../shared/button/button";
import { InputField, TextAreaFIeld } from "../shared/inputField/InputField";
import { InputDropdownPartner, InputDropdownReseller } from "../shared/inputDropdown/InputDropdown";

import './ContactGivingSection.css';

const ContactGivingSection = () => {

  const [isPartnerActive, setIsPartnerActive] = useState(true);
  const [isResellerActive, setIsResellerActive] = useState(false);

  // Logic to show off the correct field for the partner or reseller
  const [currentView, setCurrentView] = useState('partner');


  const setToResellerActive = () => {
    if (!isResellerActive) {
      setIsResellerActive(!isResellerActive)
      setIsPartnerActive(!isPartnerActive)
    }
  };

  const setToPartnerActive = () => {
    if (!isPartnerActive) {
      console.log(isPartnerActive)
      setIsPartnerActive(true)
      setIsResellerActive(!isResellerActive)
    }
  };



  const Tab = ({ tabText, isActive, onClick }) => {

    return (
      <div className="tab-wrapper" onClick={onClick}>

        <p
          className="body2"
          style=
          {
            isActive === true ? { color: 'var(--primary-color-60)' }
              : isActive === false ? { color: 'var(--gray-color-60)' }
                : {}
          }
        >
          {tabText}
        </p>

        <div
          className="active-indicator"
          style=
          {
            isActive === true
              ? { backgroundColor: 'var(--primary-color-30)' }
              : isActive === false ? { backgroundColor: 'none' }
                : {}
          }
        >

        </div>

      </div>
    )
  }



  return (
    <div className="contact-giving-section-wrapper">
      <div className="wrapper-2">
        <h3 className="heading3">Contact us as a partner, a reseller, or just to talk with us.</h3>

        <div className="contact-type-switcher">
          <Tab tabText={t('joining_partner.name')} isActive={isPartnerActive} onClick={setToPartnerActive} />
          <Tab tabText={t('joining_reseller.name')} isActive={isResellerActive} onClick={setToResellerActive} />
        </div>

        <form action="/sagnse.com" method="post">
          <div className="form-first-row">
            <InputField labelText={t('input_fields.first_name.label')} idProperty={t('input_fields.first_name.label')} typeProperty='text' nameProperty='first_name' placeholder={t('input_fields.first_name.placeholder')} />
            <InputField labelText={t('input_fields.last_name.label')} idProperty={t('input_fields.last_name.label')} typeProperty='text' nameProperty='last_name' placeholder={t('input_fields.last_name.placeholder')} />
          </div>
          <InputField labelText={t('input_fields.email.label')} idProperty={t('input_fields.email.label')} typeProperty='email' nameProperty='last_name' placeholder={t('input_fields.email.placeholder')} />
          {
            isPartnerActive
              ? <InputDropdownPartner />
              : <InputDropdownReseller />

          }
          <TextAreaFIeld labelText={t('input_fields.details.label')} idProperty={t('input_fields.details.label')} nameProperty='details' />
        </form>
        <ButtonPrimarySubmit content={t('input_fields.cta_apply')} typeOfAction="submit" />
      </div>
    </div>
  )
}

export default ContactGivingSection;