import ArrowLeft from '../../../../assets/icons/chevronLeft.svg?react'
import ArrowRight from '../../../../assets/icons/chevronRight.svg?react'

import './paginationArrows.css';

const PaginationArrows = (index, imageUrl) => {

  const showPreviousMedia = (imageUrl) => {
    setImageIndex((index) => {
      if (index === 0) return imageUrl.length - 1
      return index - 1
    })
  }

  return (
    <div className="arrows-wrapper">
      <div className="arrow-style">
        <ArrowLeft onClick={showPreviousMedia(index, imageUrl)} />
      </div>
      <div className="arrow-style">
        <ArrowRight />
      </div>
    </div>
  )
}

export default PaginationArrows;