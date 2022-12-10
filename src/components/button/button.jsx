import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";
// import "./button.styles.jsx"

export const BUTTON_TYPE_CLASS = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted"
};

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) =>
  ({
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
  }[buttonType]);


const Button = ({ children, buttonType, ...buttonOptions }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...buttonOptions}>{children}</CustomButton>;
};

export default Button;
