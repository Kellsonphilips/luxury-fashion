import { createContext, useEffect, useState } from "react";
// import SHOP_DATA from "../shop-data";
// import { addCollectionAndDocuments } from "../utility/firebase/firebase";
import { getCollectionAndDocuments } from "../utility/firebase/firebase";

export const ProductsContext = createContext({
  productsMap: {},
});

export const ProductsProvider = ({children}) => {
  const [productsMap, setProductsMap] = useState({});

  //using the useEffect to create and send our data from SHOP_DATA to database
  //doing that once, if not useEffect runs everytime this method ProductsProvider runs
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // },[])
  //after this is successful we do not need the hard-coded SHOP_DATA, all the data now lives in our database

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments();
      setProductsMap(categoryMap);
    }

    getCategoriesMap();
  },[]);

  const value = { productsMap };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
