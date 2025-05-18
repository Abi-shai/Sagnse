import { NavLink } from "react-router";
import './catalogOption.css';

const CatalogOption = ({ imageSrc, CatalogOption, routingUrl }) => {
  return (
    <NavLink to={routingUrl} className="catalog-wrapper">
      <div className="sbs-overlay"></div>
      <img src={imageSrc} alt={CatalogOption} />
      <p className="heading3">{CatalogOption}</p>
    </NavLink>
  )
}

export default CatalogOption;