import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
// import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utility/firebase/firebase"; 
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cat-dropdown";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.style";
// import "./navigation.style.scss"


const Navigation = () => {

  // const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  //from reducer 
  const currentUser = useSelector(selectCurrentUser);
  
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <div>
            <Logo />
          </div>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">
              Sign in
            </NavLink>
          )}
          <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
