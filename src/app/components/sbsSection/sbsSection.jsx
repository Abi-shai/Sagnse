import { t } from "i18next";

import CatalogOption from "./_catalogOption/catalogOption";

import firstCatalog from '../../../assets/photos/sbsSection/sbsFirst.png';
import secondCatalog from '../../../assets/photos/sbsSection/sbsSecond.png';
import thirdCatalog from '../../../assets/photos/sbsSection/sbsThird.png';

import './sbsSection.css';

const SbsSection = () => {
  return (
    <div className="sbsSection-wrapper">
      <div className="header-and-text-wrapper">
        <h3 className="heading2">{t('sbsSection.heading')}</h3>
        <p className="body1">{t('sbsSection.description')}</p>
      </div>

      <div className="catalogs-wrapper">
        <CatalogOption routingUrl={t('/sbs/sagnseCollection')} imageSrc={firstCatalog} CatalogOption={t('sbs_catalog.sagnse_collection')} />
        <CatalogOption routingUrl={t('/sbs/sagnseCouture')} imageSrc={secondCatalog} CatalogOption={t('sbs_catalog.sagnse_couture')} />
        <CatalogOption routingUrl={t('/sbs/sagnseXMissJah')} imageSrc={thirdCatalog} CatalogOption={t('sbs_catalog.sagnse_x_miss_jah')} />
      </div>
    </div>
  )
}

export default SbsSection;