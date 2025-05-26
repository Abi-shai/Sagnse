import { ButtonPrimary } from "../shared/button/button";

import './whoAreWeGetInTouch.css';

const WhoAreWeGetInTouch = () => {
  return (
    <div className="get-in-touch-in-who-are-we-wrapper">
      <div className="double-wrapper">
        <div className="invitation-content">
          <h2 className="heading2">Want to get in touch ?</h2>
          <p className="body1">If you want to work with us, or just talk.</p>
        </div>
        <ButtonPrimary content='Contact us' route='/ContactUs' />
      </div>
    </div>
  )
}

export default WhoAreWeGetInTouch;