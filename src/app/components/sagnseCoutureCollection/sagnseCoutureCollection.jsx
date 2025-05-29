import { useState, useEffect } from "react";

import SubCategorieArticle from "../shared/subCategorieArticles/collectionSubCategorie";

import './sagnseCoutureCollection.css';

const SagnseCoutureCollection = () => {

  // Fetching data states
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  // Fetched data states
  const [sagnseCoutureSubCategories, setSagnseCoutureSubCategories] = useState([]);
  const [sagnseCouturePhotos, setSagnseCouturePhotos] = useState([]);

  // Page's states's states
  const [isArticleHovered, setIsArticleHovered] = useState(false);
  const [currentViewedImage, setCurrentViewedImage] = useState(0)




  useEffect(() => {

    const fetchingSagnseCoutureData = async () => {
      const dataUrl = "https://api.npoint.io/c86c841e9cb548b7fa01";
      setIsLoading(true);

      try {

        const response = await fetch(dataUrl, { mode: 'cors' })
        const body = await response.json();

        // All data
        const fetchedSagnseCoutureData = await body.sagnse_couture;
        setSagnseCoutureSubCategories(fetchedSagnseCoutureData.sub_categories)

        // Photos data
        // const fetchedCouturePhotos = fetchedSagnseCoutureData.sub_categories[2].articles[0].photos;
        // setSagnseCouturePhotos(fetchedCouturePhotos);

      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchingSagnseCoutureData();
  }, [])





  // Data fetching error case UI handler
  if (error) {
    return <p>Something unusual happened. Please refresh your page.</p>
  }




  // Page's states setters
  const setIsArticleHoveredTrue = () => {
    setIsArticleHovered(true);
  };

  const setIsArticleHoveredFalse = () => {
    setIsArticleHovered(false);
  };




  // Scrolling through article images handler
  function showPreviousMedia() {
    setCurrentViewedImage(index => {
      if (index === 0) {
        return sagnseCouturePhotos.length - 1
      }
      console.log(currentViewedImage)
      return index - 1;
    })
  }

  function showNextMedia() {
    setCurrentViewedImage(index => {
      // Le -1 rajouté apres imageURl.length est important pour sauter un espace dans la chaîne de l'Array
      if (sagnseCouturePhotos) return 0
      return index + 1;
    })
  }





  return (
    <div className="categorie-wrapper">

      {
        sagnseCoutureSubCategories.map(category => {
          return (
            <div key={category.id} className="sub-categorie-wrapper">
              <h2 className="heading2">{category.name}</h2>

              <SubCategorieArticle
                key={category.id}
                subCategorieData={category}
                isLoading={isLoading}
                setArticleHoveredFalse={setIsArticleHoveredFalse}
                setArticleHoveredTrue={setIsArticleHoveredTrue}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default SagnseCoutureCollection;
