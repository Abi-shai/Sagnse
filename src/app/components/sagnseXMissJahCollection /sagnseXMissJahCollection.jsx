import { useState, useEffect } from "react";

import SubCategorieArticle from "../shared/subCategorieArticles/collectionSubCategorie";

const SagnseXMissJahCollection = () => {

  // Fetching data states
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  // Fetched data states
  const [sagnseXMissJahSubCategories, setSagnseXMissJahSubCategories] = useState([]);
  const [sagnseXMissJahPhotos, setSagnseXMissJahPhotos] = useState([]);

  // Page's states's states
  const [isArticleHovered, setIsArticleHovered] = useState(false);
  const [currentViewedImage, setCurrentViewedImage] = useState(0)




  useEffect(() => {

    const fetchingSagnseXMissJahData = async () => {
      const dataUrl = "https://api.npoint.io/c86c841e9cb548b7fa01";
      setIsLoading(true);

      try {

        const response = await fetch(dataUrl, { mode: 'cors' })
        const body = await response.json();

        // All data
        const fetchedSagnseXMissJahData = await body.sagnse_x_miss_jah;
        setSagnseXMissJahSubCategories(fetchedSagnseXMissJahData.sub_categories)
        console.log(fetchedSagnseXMissJahData)

        // Photos data
        // const fetchedCouturePhotos = fetchedSagnseCoutureData.sub_categories[2].articles[0].photos;
        // setSagnseCollectionPhotos(fetchedCouturePhotos);

      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchingSagnseXMissJahData();
  }, [])





  // Data fetching error case UI handler
  if (error) {
    return <p>Something unusual happened. Please refresh your page.</p>
  }




  return (
    <div className="categorie-wrapper">

      {
        sagnseXMissJahSubCategories.map(category => {
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

export default SagnseXMissJahCollection;
