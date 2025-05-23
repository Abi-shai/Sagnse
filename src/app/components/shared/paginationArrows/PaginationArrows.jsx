import ArrowLeft from '../../../../assets/icons/chevronLeft.svg?react'
import ArrowRight from '../../../../assets/icons/chevronRight.svg?react'

import './PaginationArrows.css';

const PaginationArrows = ({ onClickLeft, onClickRight }) => {

  return (
    <div className="arrows-wrapper">
      <div className="arrow-style">
        <ArrowLeft onClick={onClickLeft} />
      </div>
      <div className="arrow-style">
        <ArrowRight onClick={onClickRight} />
      </div>
    </div>
  )
}

export default PaginationArrows;