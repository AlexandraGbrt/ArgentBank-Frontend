import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.webp";
import { useDispatch, useSelector } from "react-redux"; // Afficher le nom utilisateur venant de redux
import { logout } from "../redux/features/userSlice"; // Importez l'action de déconnexion

const NavBar = () => {
  const userDetails = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Déclencher la déconnexion
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {/* Affiche le nom de l'utilisateur ou le lien de déconnexion */}
        <Link className="main-nav-item" to={userDetails ? "#" : "/login"}>
          <i className="fa fa-user-circle"></i>
          {userDetails ? "Sign Out" : "Sign In"}
        </Link>
        {userDetails && (
          <span onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket"></i>{" "}
            {/* Déconnexion */}
          </span>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
