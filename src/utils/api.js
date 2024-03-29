
const baseUrl = "https://uniformonweb.onrender.com/api";

export const getAPI = async (path ) => {
    let url = `${baseUrl}/${path}?populate=deep`;

    try {
      const loadData = await fetch(url, { cache: 'force-cache' });
  
      if (loadData.ok) {
        let result = await loadData.json();
        return result;
      } else {
         return loadData;
      }
    } catch (error) {
      throw error;
    }
};

export const getSubCategories = async ( category) =>{
   let SubCategoryUrl  = `sub-categories?polulate=*&filters[category][name][$eq]=${category}`
      return  await getAPI(SubCategoryUrl) ;
}
  