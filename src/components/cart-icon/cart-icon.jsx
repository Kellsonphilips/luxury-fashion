import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen, selectCartCount} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss"

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);


  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count ">{cartCount}</span>
    </div>
  );
}

export default CartIcon;