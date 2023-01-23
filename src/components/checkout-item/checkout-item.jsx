// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearFromCart,
} from "../../store/cart/cart.action";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem }) => {

  const dispatch = useDispatch();

  // const {
  //   addItemToCart,
  //   removeItemFromCart,
  //   clearFromCart,
  // } = useContext(CartContext);

  const { id, name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  
  const increaseItemHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const decreaseItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemHandler = () => 
    dispatch(clearFromCart(cartItems, cartItem));

 

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
