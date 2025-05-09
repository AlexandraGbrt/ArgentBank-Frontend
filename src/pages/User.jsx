import React, { useEffect } from "react";
import Account from "../components/user/Account";
import HeaderUser from "../components/user/HeaderUser";

//     REDUX
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../redux/slice/userSlice"; // Importez l'action

const User = () => {
  // const dispatch = useDispatch();
  // const userDetails = useSelector((state) => state.user.userDetails);
  // const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  // const status = useSelector((state) => state.user.status);
  // const error = useSelector((state) => state.user.error);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     dispatch(getUserProfile()); // Chargez les informations utilisateur si authentifié
  //   }
  // }, [dispatch, isAuthenticated]);

  // if (status === "loading") {
  //   return <div>Loading...</div>; // Affiche un message de chargement
  // }

  // if (status === "failed") {
  //   return <div>Error: {error}</div>; // Affichez un message d'erreur
  // }

  // if (!userDetails) {
  //   return <div>No user data available.</div>; // Gestion alternative en cas de données utilisateur absentes
  // }

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
