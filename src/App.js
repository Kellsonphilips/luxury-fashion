import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
// import { setCurrentUser } from "./store/user/user.action";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";
// import {
  // onAuthStateChangedListener,
  // createUserDocumentFromAuth,
  // getCurrentUser,
// } from "./utility/firebase/firebase";

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import Contact from "./routes/contact/contact";
import CheckOut from "./routes/checkout/checkout.component";
import "./categories.scss"



const App = () => {
  const dispatch = useDispatch();

  // our asynchronous code for user now lives in firebase utils to free up our component
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     dispatch(setCurrentUser(user));
  //   });
  //   return unsubscribe;
  // }, [dispatch]);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="contact" element={<Contact/>}/>
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
