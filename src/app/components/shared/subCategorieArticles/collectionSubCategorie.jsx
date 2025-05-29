import { useState, useEffect } from "react";

import PaginationArrows from "../paginationArrows/PaginationArrows";

import './collectionSubCategorie.css';


const CollectionSubCategorie = ({
  isLoading,
  subCategorieData
}) => {

  const [currentImageProductShown, setCurrentImageProductShown] = useState(0);

  // const showNextArticle = () => {
  //   setCurrentImageProductShown(index => {
  //     if (currentImageProductShown.length === 0) {
  //       return 0;
  //     }

  //     if (index === currentImageProductShown.length - 1) {
  //       return 0;
  //     }

  //     return index + 1;
  //   })
  // }

  // const showPrevArticle = () => {
  //   setCurrentImageProductShown(index => {
  //     if (currentImageProductShown.length === 0) {
  //       return 0;
  //     }

  //     if (index === currentImageProductShown.length) {
  //       return currentImageProductShown.length - 1;
  //     }

  //     return index - 1;
  //   })
  // }

  const SubCategorieArticle = ({ article }) => {
    return (
      <div key={article.article_id} className="wrapper-2">



        <div className="img">


          <img
            className="base-image" src={article.photos[0].image_source}
          />


          {/* 
          <div
            className="scrolling-images">
            <PaginationArrows onClickLeft={showPrevArticle} onClickRight={showNextArticle} />
            {
              article.photos.map(photo => {
                return <img style={{ translate: `${-100 * currentImageProductShown}% ` }} key={photo.photo_id} src={photo.image_source} />
              })
            }
          </div> */}



        </div>


        <div className="product-infos">
          <p
            className="article-grouped-name first"
          >
            {article.article_name}
          </p>
          <p className="body2 second">{article.price}</p>
        </div>


      </div>
    )
  }


  return (
    <div className="article-wrapper">

      {
        isLoading
          ? <p>The content is currently loading</p>
          : (
            subCategorieData.articles.map(article => {
              return <SubCategorieArticle key={article.article_id} article={article} />
            })
          )
      }
    </div>
  )
}

export default CollectionSubCategorie;