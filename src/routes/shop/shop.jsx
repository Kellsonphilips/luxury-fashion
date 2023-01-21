import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category";
import { getCollectionAndDocuments } from "../../utility/firebase/firebase";
import { setProducts } from "../../store/products/products.action"; 
import "./shop.styles.scss";


const Shop = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const productsArray = await getCollectionAndDocuments();
      dispatch(setProducts(productsArray));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

// ======================================================

// {
//   /* {products.map((product) => {
//         const { id } = product;
//         return (
//           <ProductsCard key={id} products={product}/>
//         );
//      })} */
// }

// {/* <Fragment key={title}>
//           <h2>{title}</h2>
//           <div className="products-container">
//             {productsMap[title].map((product) => (
//               <ProductsCard key={product.id} products={product} />
//             ))}
//           </div>
//   </Fragment> */}
