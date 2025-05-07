import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../Button";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loginUser, getUserProfile } from "../../redux/slice/userSlice";

const Form = () => {
  const [email, setEmail] = useState(""); // useState pour gérer/suivre les valeurs du form
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMsg = useSelector((state) => state.user.error); // afficher une erreur

  // clic sur le bouton
  const handleLogIn = async (e) => {
    e.preventDefault();
    // console.log("Form submitted");

    if (email === "" || password === "") {
      alert("Email and password are required");
      return;
    }

    try {
      const resultAction = await dispatch(loginUser({ email, password }));

      if (loginUser.fulfilled.match(resultAction)) {
        localStorage.setItem("token", resultAction.payload.token); // Sauvegarder le token

        await dispatch(getUserProfile()); // Charge les informations utilisateur après connexion reussie
        navigate("/user"); // redirection
      } else {
        alert("Email or password incorrect");
      }
    } catch (error) {
      error("error occurred during login");
    }
  };

  return (
    <form onSubmit={handleLogIn}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
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
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Button className="sign-in-button" label="Sign In" />
      {errorMsg && (
        <p style={{ color: "red" }}>{errorMsg || "Erreur de connexion"}</p>
      )}
    </form>
  );
};

export default Form;
