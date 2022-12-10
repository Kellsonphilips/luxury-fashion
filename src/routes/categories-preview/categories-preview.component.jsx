import { Fragment, useContext } from "react";
import { ProductsContext } from "../../contexts/products.context"; 
import CategoryPreview from "../../components/category-preview/category-preview";
import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
    const { productsMap } = useContext(ProductsContext);

    return (
      <Fragment>
        {Object.keys(productsMap).map((title) => {
          const products = productsMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
      </Fragment>
    );
};

export default CategoriesPreview;
