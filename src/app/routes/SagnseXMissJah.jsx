import { t } from "i18next";

import PageHeader from "../components/shared/pageHeader/PageHeader";
import SagnseXMissJahCollection from "../components/sagnseXMissJahCollection /sagnseXMissJahCollection";



const SagnseXMissJah = () => {
  return (
    <div className="sagnse-collection-page">
      <PageHeader heading={t('page_header_sagnse_x_miss_jah.heading')} description={t('page_header_sagnse_x_miss_jah.description')} />
      <SagnseXMissJahCollection />
    </div>
  )
}

export default SagnseXMissJah;