
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utility/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import "./sign-up.styles.scss"



const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};


const SingUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState("");

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value})
  };


  const resetFormField = () => {
    setErrorMessage(
      "Success! You have signed up. Log in with your email and password"
    );
    setFormFields(defaultFormFields);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      if (password !== confirmPassword) {
        setErrorMessage("Your passwords do not match! Check password and try again.");
      }else {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        
        await createUserDocumentFromAuth(user, { displayName });
        resetFormField();
      }
    } catch (error) {
      console.log(error.message);
      switch (error.code) {
        case "auth/email-already-in-use":
          setErrorMessage("Email already in use. Sign in instead.");
          break;
        default:
          console.log("There was an error creating user.", error.code);
      }
    }
  };


  return (
    <div className="sign-up-container">
      <h2>You do not have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={() => {}}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />
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
        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />
        <Button type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>
        <p>{errorMessage}</p>
      </form>
    </div>
  );
}

export default SingUpForm;
