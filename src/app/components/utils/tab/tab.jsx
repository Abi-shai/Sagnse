import './tab.css';

const Tab = ({ tabText, isActive, setIsActive, setToInactive }) => {

  return (
    <div className="tab-wrapper">

      <p
        className="body2"
        style=
        {
          isActive === true ? { color: 'var(--primary-color-60)' }
            : isActive === false ? { color: 'var(--gray-color-60)' }
              : {}
        }
      >
        {tabText}
      </p>

      <div
        className="active-indicator"
        style=
        {
          isActive === true
            ? { backgroundColor: 'var(--primary-color-30)' }
            : isActive === false ? { backgroundColor: 'none' }
              : {}
        }
      >

      </div>

    </div>
  )
}

export default Tab;