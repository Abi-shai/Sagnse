import { t } from "i18next";

import { useState, useEffect } from "react";

import PageHeader from "../components/shared/pageHeader/PageHeader";
import PaginationArrows from "../components/shared/paginationArrows/PaginationArrows";

import './sagnseSupply.css';

const SagnseCollection = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [collectionData, setCollectionData] = useState([]);
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [currentViewImage, setCurrentViewedImage] = useState(0)


  useEffect(() => {
    const fetchSagnseCollectionData = async () => {
      const dataUrl = "https://api.npoint.io/c86c841e9cb548b7fa01";
      setIsLoading(true);

      try {
        const response = await fetch(dataUrl, { mode: 'cors' })
        const body = await response.json();
        const sagnseCollectionData = await body.sagnse_collection;
        setCollectionData(sagnseCollectionData);
        sagnseCollectionData.map(entry => {
          return setPhotos(entry.photos)
        })
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }

    };

    fetchSagnseCollectionData();
  }, [])

  if (error) {
    return <p>Something unusual happened. Please refresh your page.</p>
  }

  const setProductHoveredTrue = () => {
    setIsProductHovered(true);
    console.log(isProductHovered);
  };

  const setProductHoveredFalse = () => {
    setIsProductHovered(false);
    console.log(isProductHovered);
  };


  // Scrolling through product images fuunctions
  function showPreviousMedia() {
    setCurrentViewedImage(index => {
      if (index === 0) {
        return photos.length - 1
      }
      console.log(currentViewImage)
      return index - 1;
    })
  }

  function showNextMedia() {
    setCurrentViewedImage(index => {
      // Le -1 rajouté apres imageURl.length est important pour sauter un espace dans la chaîne de l'Array
      if (index === photos.length - 1) return 0
      return index + 1;
    })
  }

  return (
    <div className="sagnse-collection-page">
      <PageHeader heading={t('page_header_sagnse_collection.heading')} description={t('page_header_sagnse_collection.description')} />
    </div >
  )

}

export default SagnseCollection;