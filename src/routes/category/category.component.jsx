import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
// import { ProductsContext } from "../../contexts/products.context";
import ProductsCard from "../../components/product-card/product-card";
import { useSelector } from "react-redux";
import {
  selectProdutsMap,
  selectProductsIsLoading,
} from "../../store/products/products.selector";
import Spinner from "../../components/spinner/spinner.component";
import "./category.styles.scss";


const Category = () => {
  const { category } = useParams();
  // const { productsMap } = useContext(ProductsContext);
  const productsMap = useSelector(selectProdutsMap);
  const isLoading = useSelector(selectProductsIsLoading);
  const [products, setProducts] = useState(productsMap[category]);
  


  useEffect(() => {
    setProducts(productsMap[category]);
  }, [category, productsMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductsCard key={product.id} products={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
