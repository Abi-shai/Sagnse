import { NavLink } from "react-router";
import './catalogOption.css';

export const CatalogOption = ({ imageSrc, CatalogOption, routingUrl }) => {
  return (
    <NavLink to={routingUrl} className="catalog-wrapper">
      <div className="sbs-overlay"></div>
      <img src={imageSrc} alt={CatalogOption} />
      <p className="heading3">{CatalogOption}</p>
    </NavLink>
  )
}

export const CatalogOptionFromHeader = ({ imageSrc, CatalogOption, routingUrl, onMouseOver, onMouseOut }) => {
  return (
    <NavLink to={routingUrl} className="catalog-wrapper-header" onMouseOver={onMouseOver} onMouseOut={onMouseOut} reloadDocument>
      <div className="sbs-overlay"></div>
      <img src={imageSrc} alt={CatalogOption} />
      <p className="heading3">{CatalogOption}</p>
    </NavLink>
  )
}