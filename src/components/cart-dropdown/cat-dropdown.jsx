import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.styles.scss";


const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        )) : (<span className="empty-message">Your cart is empty</span>)}
      </div>
      <Button onClick={goToCheckOutHandler}>
        Check Out
      </Button>
    </div>
  );
};

export default CartDropdown;
