import './PageHeader.css';

const PageHeader = ({ heading, description }) => {
  return (
    <div className="page-header-wrapper">
      <div className="page-header-heading-and-description">
        <h3 className="heading3">{heading}</h3>
        <p className="body2">{description}</p>
      </div>
    </div>
  )
}

export default PageHeader;