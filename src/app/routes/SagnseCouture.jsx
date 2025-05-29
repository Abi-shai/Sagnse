import { t } from "i18next";

import PageHeader from "../components/shared/pageHeader/PageHeader";
import SagnseCoutureCollection from "../components/sagnseCoutureCollection/sagnseCoutureCollection";



const SagnseCouture = () => {
  return (
    <div className="sagnse-collection-page">
      <PageHeader heading={t('page_header_sagnse_couture.heading')} description={t('page_header_sagnse_couture.description')} />
      <SagnseCoutureCollection />
    </div>
  )
}

export default SagnseCouture;