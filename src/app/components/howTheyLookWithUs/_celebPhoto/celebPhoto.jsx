import './celebPhoto.css';

const CelebPhoto = ({ imageSrc, ref, scrolling }) => {
  return (
    <div style={{ translate: `${-36 * ref}em` }} className="celeb-wrapper" onScroll={scrolling}>
      <div className="celeb-overlay"></div>
      <img src={imageSrc} alt="image" />
    </div>
  )
}

export default CelebPhoto;