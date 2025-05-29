import { useState, useEffect } from "react";

import SubCategorieArticle from "../shared/subCategorieArticles/collectionSubCategorie";

const SagnseCollectionCollection = () => {

  // Fetching data states
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  // Fetched data states
  const [sagnseCollectionSubCategories, setSagnseCollectionSubCategories] = useState([]);
  const [sagnseCollectionPhotos, setSagnseCollectionPhotos] = useState([]);

  // Page's states's states
  const [isArticleHovered, setIsArticleHovered] = useState(false);
  const [currentViewedImage, setCurrentViewedImage] = useState(0)




  useEffect(() => {

    const fetchingSagnseCollectionData = async () => {
      const dataUrl = "https://api.npoint.io/c86c841e9cb548b7fa01";
      setIsLoading(true);

      try {

        const response = await fetch(dataUrl, { mode: 'cors' })
        const body = await response.json();

        // All data
        const fetchedSagnseCoutureData = await body.sagnse_collection;
        setSagnseCollectionSubCategories(fetchedSagnseCoutureData.sub_categories)
        console.log(fetchedSagnseCoutureData)

        // Photos data
        // const fetchedCouturePhotos = fetchedSagnseCoutureData.sub_categories[2].articles[0].photos;
        // setSagnseCollectionPhotos(fetchedCouturePhotos);

      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchingSagnseCollectionData();
  }, [])





  // Data fetching error case UI handler
  if (error) {
    return <p>Something unusual happened. Please refresh your page.</p>
  }




  return (
    <div className="categorie-wrapper">

      {
        sagnseCollectionSubCategories.map(category => {
          return (
            <div key={category.id} className="sub-categorie-wrapper">
              <h2 className="heading2">{category.name}</h2>

              <SubCategorieArticle
                key={category.id}
                subCategorieData={category}
                isLoading={isLoading}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default SagnseCollectionCollection;
