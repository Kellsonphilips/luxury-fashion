import { Fragment } from "react";
// import { ProductsContext } from "../../contexts/products.context";
import { useSelector } from "react-redux";
import { selectProdutsMap, selectProductsIsLoading } from "../../store/products/products.selector";
import CategoryPreview from "../../components/category-preview/category-preview";
import Spinner from "../../components/spinner/spinner.component";
import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
    // const { productsMap } = useContext(ProductsContext);
    const productsMap = useSelector(selectProdutsMap);
    const isLoading = useSelector(selectProductsIsLoading);

    return (
      <Fragment>
        {isLoading ? (
          <Spinner />
        ) : (
          Object.keys(productsMap).map((title) => {
            const products = productsMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })
        )}
      </Fragment>
    );
};

export default CategoriesPreview;
