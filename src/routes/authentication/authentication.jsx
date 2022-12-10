
import SingUpForm from "../../components/sign-up/sign-up";
import SignInForm from "../../components/sign-in/sign-in";
import "./authentication.styles.scss"


const Authentication = () => {

    return (
      <div className="auth-forms">
        <SignInForm />
        <SingUpForm />
      </div>
    );
}

export default Authentication;