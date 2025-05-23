import { t } from "i18next";

import PageHeader from "../components/shared/pageHeader/PageHeader";
import ContactGivingSection from "../components/contactGivingSection/ContactGivingSection";
import OpenHoursSection from "../components/openHoursSection/openhoursSection";
import LocationSection from "../components/locationSection/locationSection";

function ContactUs() {

  return (
    <>
      <PageHeader heading={t('page_header.heading')} description={t('page_header.description')} />
      <ContactGivingSection />
      <OpenHoursSection />
      <LocationSection />
    </>
  )

}

export default ContactUs;