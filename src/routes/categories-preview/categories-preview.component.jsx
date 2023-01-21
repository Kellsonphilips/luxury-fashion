import { Fragment } from "react";
// import { ProductsContext } from "../../contexts/products.context";
import { useSelector } from "react-redux";
import { selectProdutsMap } from "../../store/products/products.selector";
import CategoryPreview from "../../components/category-preview/category-preview";
import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
    // const { productsMap } = useContext(ProductsContext);
    const productsMap = useSelector(selectProdutsMap);

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
