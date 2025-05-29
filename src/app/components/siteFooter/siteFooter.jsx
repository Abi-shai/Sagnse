import { NavLink } from "react-router";
import { t } from "i18next";

import LanguageSwitcher from "../utils/languageSwitcher/languageSwitcher";

import Logo from '../../../assets/sagnse.png';

import './siteFooter.css';

const SiteFooter = () => {

  const socialLinks = {
    tiktok: 'https://vm.tiktok.com/ZMMKBxLsY/',
    facebook: 'https://www.facebook.com/share/v/18y5YPMa1i/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/sagnseofficial/'
  }


  return (
    <footer>
      <div className="left-content">
        <div className="logo-and-language-switcher-wrapper">
          <NavLink to='/' className="logo-footer">
            <img src={Logo} alt="Sagnse" />
          </NavLink>
          <div className="slogan-and-language-switcher">
            <p>DAMN YOU POPPIN</p>
            <LanguageSwitcher isFooter={true} />
          </div>
        </div>
        <p className="copyrights">@2025 Sagnse all copyrights reserved</p>
      </div>

      <div className="divider"></div>


      <div className="footer-nav">

        <div className="footer-nav-set">
          <p className="footer-nav-set-heading">SAGNSE</p>
          <div className="links">
            <NavLink to='/' className='links-footer' >{t('nav.home')}</NavLink>
            <NavLink to='/whoAreWe' className='links-footer' >{t('nav.who_are_we')}</NavLink>
            <NavLink to='contactUs' className='links-footer'>{t('nav.contact_us')}</NavLink>
          </div>
        </div>

        <div className="footer-nav-set">
          <p className="footer-nav-set-heading">SAGNSE BEAUTY SUPPLY</p>
          <div className="links">
            <NavLink to='sbs/sagnseCollection' className='links-footer' >Sagnse Collection</NavLink>
            <NavLink to='sbs/sagnseCouture' className='links-footer'>Sagnse Couture</NavLink>
            <NavLink to='sbs/sagnseXMissJah' className='links-footer'>Sagnse X Miss Jah</NavLink>
          </div>

        </div>
        <div className="footer-nav-set">
          <p className="footer-nav-set-heading">SEE OUR WORK</p>
          <div className="links">
            <a href={socialLinks.instagram} target="_blank" className='links-footer' >Instagram</a>
            <a href={socialLinks.facebook} target="_blank" className='links-footer'>Facebook</a>
            <a href={socialLinks.tiktok} target="_blank" className='links-footer'>TikTok</a>
          </div>
        </div>

      </div>
    </footer>
  )

}

export default SiteFooter;