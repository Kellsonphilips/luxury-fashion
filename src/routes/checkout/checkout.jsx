import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckOutItem from "../../components/checkout-item/checkout-item";
import "./checkout.styles.scss";


const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length ? cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItems={cartItem} />
      )) : (<span className="empty-cart">Your cart is empty 🥹</span>)}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
}

export default CheckOut;
