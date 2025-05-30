import { useState } from "react";

import { t } from "i18next";
import { NavLink } from "react-router";

import LanguageSwitcher from "../utils/languageSwitcher/languageSwitcher";
import { CatalogOptionFromHeader } from "../sbsSection/_catalogOption/catalogOption";

import HamMenu from '../../../assets/icons/menu.svg?react';
import sagnseLogo from '../../../assets/sagnse.png';
import firstCatalog from '../../../assets/photos/sbsSection/sbsFirst.png';
import secondCatalog from '../../../assets/photos/sbsSection/sbsSecond.png';
import thirdCatalog from '../../../assets/photos/sbsSection/sbsThird.png';

import './siteHeader.css';

const SiteHeader = () => {

  const [isSbsHovered, setIsSbsHovered] = useState(false);

  const setterIsHoveredTrue = () => {
    setIsSbsHovered(true);
    console.log(isSbsHovered);
  }
  const setterIsHoveredFalse = () => {
    setIsSbsHovered(false)
  }



  return (
    <header>
      <div className="header-wrapper">

        <NavLink to='/' className="logo-wrapper" reloadDocument>
          <img src={sagnseLogo} alt="Sagnse" />
        </NavLink>

        <nav className="nav-header">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-links-header" : "links-header"
            }
            reloadDocument
          >
            {t('nav.home')}
          </NavLink>
          <NavLink
            onMouseEnter={setterIsHoveredTrue}
            onMouseLeave={setterIsHoveredFalse}
            className={({ isActive }) => isActive ? "active-links-header" : "links-header special"}
          >
            {t('nav.sbs')}
          </NavLink>
          <NavLink
            to="/WhoAreWe"
            className={({ isActive }) =>
              isActive ? "active-links-header" : "links-header"
            }
            reloadDocument
          >
            {t('nav.who_are_we')}
          </NavLink>
          <NavLink
            to="/ContactUs"
            className={({ isActive }) =>
              isActive ? "active-links-header" : "links-header"
            }
            reloadDocument
          >
            {t('nav.contact_us')}
          </NavLink>

        </nav>

        <LanguageSwitcher />

        <div className="menu">
          <HamMenu />
        </div>
      </div>

      {/* <div className="divider"></div> */}
      <div className={isSbsHovered ? "sbs-catalog-wrapper-hovered" : "sbs-catalog-wrapper"}>
        <CatalogOptionFromHeader routingUrl={t('/sbs/sagnseCollection')} imageSrc={firstCatalog} CatalogOption={t('sbs_catalog.sagnse_collection')} onMouseOver={setterIsHoveredTrue} onMouseOut={setterIsHoveredFalse} />
        <CatalogOptionFromHeader routingUrl={t('/sbs/sagnseCouture')} imageSrc={secondCatalog} CatalogOption={t('sbs_catalog.sagnse_couture')} onMouseOver={setterIsHoveredTrue} onMouseOut={setterIsHoveredFalse} />
        <CatalogOptionFromHeader routingUrl={t('/sbs/sagnseXMissJah')} imageSrc={thirdCatalog} CatalogOption={t('sbs_catalog.sagnse_x_miss_jah')} onMouseOver={setterIsHoveredTrue} onMouseOut={setterIsHoveredFalse} />
      </div>

    </header>
  )
}


export default SiteHeader;