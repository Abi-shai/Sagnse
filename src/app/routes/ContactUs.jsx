import { t } from "i18next";

import PageHeader from "../components/shared/pageHeader/PageHeader";
import ContactGivingSection from "../components/contactGivingSection/ContactGivingSection";

function ContactUs() {

  return (
    <>
      <PageHeader heading={t('page_header.heading')} description={t('page_header.description')} />
      <ContactGivingSection />
    </>
  )

}

export default ContactUs;