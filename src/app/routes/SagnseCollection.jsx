import { t } from "i18next";

import PageHeader from "../components/shared/pageHeader/PageHeader";
import SagnseCollectionCollection from "../components/sagnseCollectionCollection/sagnseCollectionCollection";


const SagnseCollection = () => {

  return (
    <div className="sagnse-collection-page">
      <PageHeader heading={t('page_header_sagnse_collection.heading')} description={t('page_header_sagnse_collection.description')} />
      <SagnseCollectionCollection />
    </div>
  )

}

export default SagnseCollection;