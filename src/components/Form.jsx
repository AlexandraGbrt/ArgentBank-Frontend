import React from "react";
import Button from "./Button";

const Form = () => {
  // Définition des states
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);

  // Gérer les clics du button
  const handleSignIn = () => {
    console.log("User signed in");
  };

  return (
    <form onSubmit={""}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          // value={username}
          onChange={""}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          // value={password}
          onChange={""}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          // checked={rememberMe}
          onChange={""}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {/* <button type="submit" className="sign-in-button">
        Sign In
      </button> */}
      <Button
        className="sign-in-button"
        onClick={handleSignIn}
        label="Sign In"
      />
    </form>
  );
};

export default Form;
