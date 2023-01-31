import { useState } from "react";
import FormInput from "../form-input/form-input";
import Button, { BUTTON_TYPE_CLASS } from "../button/button.component";
// import {
  // signInWithGooglePopup,
  // signInAuthUserWithEmailAndPassword,
// } from "../../utility/firebase/firebase";
import { googleSignInStart, emailAndPasswordSignInStart } from "../../store/user/user.action"; 
import { useDispatch } from "react-redux";
import "./sign-in.styles.scss";


const defaultFormFields = {
  email: "",
  password: "",
};

 
const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState("");
  
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFormField = () => {
    setFormFields(defaultFormFields);
    setErrorMessage("");
  };

  // getting user info from user-sagas we dispatch from user-sagas
  // const signInWithGoogle = async () => {
  //   await signInWithGooglePopup();
  // };
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailAndPasswordSignInStart(email, password));
      // await signInAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          setErrorMessage("No user associated with this email");
          break;
        case "auth/wrong-password":
          setErrorMessage("Incorrect password for email");
          break;
        default:
          console.log(error);
      }
    }
  };



  return (
    <div className="sign-in-container">
      <h2>You have an account already?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASS.google}
            onClick={signInWithGoogle}
          >
            Google Sign in
          </Button>
        </div>
        <p>{errorMessage}</p>
      </form>
    </div>
  );
};

export default SignInForm;
