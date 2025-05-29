// export const getSagnseCollectionData = ({ setIsLoading, appDataHolderState, setError }) => {

//   const fetchApi = async ({ setError, setIsLoading, appDataHolderState }) => {
//     const dataUrl = "https://api.npoint.io/c86c841e9cb548b7fa01";
//     setIsLoading(true);

//     try {
//       const response = await fetch(dataUrl, { mode: 'cors' })
//       const body = await response.json();
//       const sagnseCollectionData = await body.sagnse_collection;
//       appDataHolderState(sagnseCollectionData);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   fetchApi(setError, setIsLoading, app);
// }