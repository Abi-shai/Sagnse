import { t } from "i18next";
import { NavLink } from "react-router";
import HamMenu from '../../../assets/icons/menu.svg?react';
import sagnseLogo from '../../../assets/sagnse.png';

import LanguageSwitcher from "../utils/languageSwitcher/languageSwitcher";

import './Header.css';

function Header() {


  return (
    <header>

      <NavLink to='/' className="logo-wrapper">
        <img src={sagnseLogo} alt="Sagnse" />
      </NavLink>

      <nav className="nav">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : "body2"
          }
        >
          {t('nav.home')}
        </NavLink>
        <NavLink
          to="/sbs"
          className={({ isActive }) =>
            isActive ? "active" : "nav"
          }
        >
          {t('nav.sbs')}
        </NavLink>
        <NavLink
          to="/WhoAreWe"
          className={({ isActive }) =>
            isActive ? "active" : "nav"
          }
        >
          {t('nav.who_are_we')}
        </NavLink>
        <NavLink
          to="/ContactUs"
          className={({ isActive }) =>
            isActive ? "active" : "nav"
          }
        >
          {t('nav.contact_us')}
        </NavLink>

      </nav>

      <LanguageSwitcher />

      <div className="menu">
        <HamMenu />
      </div>

    </header>
  )

}

export default Header;