import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.webp";

// REDUX
import { useDispatch, useSelector } from "react-redux"; // Afficher le nom utilisateur venant de redux
import { logout } from "../../redux/slice/userSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);

  const handleLogout = () => {
    dispatch(logout()); // Déclencher la déconnexion
    navigate("/login"); // Redirige vers la page login
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
        {userDetails ? (
          <>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {userDetails.userName}
              {/* USERNAME OU PRENOM ????????????? TODO */}
            </Link>
            <Link className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          // Affiche le lien de connexion si l'utilisateur n'est pas authentifié
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
