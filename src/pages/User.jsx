import React, { useEffect } from "react";
import Account from "../components/user/Account";
import { useNavigate } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";
import HeaderUser from "../components/user/HeaderUser";

const User = () => {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.user.userDetails);

  useEffect(() => {
    if (!userDetails) {
      navigate("/login"); // Rediriger si l'utilisateur n'est pas authentifié après déconnexion
    }
  }, [userDetails, navigate]);

  if (!userDetails) {
    return null;
  }

  return (
    <main className="main bg-dark">
      <HeaderUser />

      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
};

export default User;
