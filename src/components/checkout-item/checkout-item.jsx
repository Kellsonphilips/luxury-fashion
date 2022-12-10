import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItems }) => {
  const {
    addItemToCart,
    removeItemFromcart,
    removeFromcart,
  } = useContext(CartContext);
  const { id, name, imageUrl, price, quantity } = cartItems;
  
  const increaseItemHandler = () => addItemToCart(cartItems);
  const decreaseItemHandler = () => removeItemFromcart(cartItems);
  const clearItemHandler = () => removeFromcart(cartItems);

 

  return (
    <div key={id} className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={decreaseItemHandler}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={increaseItemHandler}>
          &#10095;
        </span>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;