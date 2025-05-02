import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/features/userSlice";
import Button from "./Button";

const Form = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error); // afficher une erreur
  const [email, setEmail] = useState(""); // useState pour gérer/suivre les valeurs du form
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // clic sur le bouton
  const handleSignIn = (e) => {
    e.preventDefault(); // empêche le rechargement

    dispatch(loginUser({ email, password })); // appelle l'action async pour connecter
  };

  return (
    <form onSubmit={handleSignIn}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // onChange met a jour l'état des champs
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Button className="sign-in-button" label="Sign In" />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Form;
