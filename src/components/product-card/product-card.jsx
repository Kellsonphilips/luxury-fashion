import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button";
import "./product-card.styles.scss";


const ProductsCard = ({ products }) => {

  const { name, imageUrl, price } = products;
  const { addItemToCart } = useContext(CartContext);

  const addProuctToCart = () => addItemToCart(products);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProuctToCart}>
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductsCard;
