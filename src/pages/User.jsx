import React, { useEffect } from "react";
import Account from "../components/user/Account";
import HeaderUser from "../components/user/HeaderUser";

//     REDUX
import { useDispatch } from "react-redux";
import { getUserProfile } from "../redux/slice/userSlice"; // Importez l'action

const User = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(getUserProfile()); // Récupère les infos utilisateur et met à jour le store
    }
  }, [dispatch]);

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
