import ArrowLeft from '../../../../assets/icons/chevronLeft.svg?react'
import ArrowRight from '../../../../assets/icons/chevronRight.svg?react'

import './paginationArrows.css';

const PaginationArrows = () => {
  return (
    <div className="arrows-wrapper">
      <div className="arrow-style">
        <ArrowLeft />
      </div>
      <div className="arrow-style">
        <ArrowRight />
      </div>
    </div>
  )
}

export default PaginationArrows;