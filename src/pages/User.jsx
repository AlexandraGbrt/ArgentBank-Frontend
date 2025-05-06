import React from "react";
import Account from "../components/Account";
import Button from "../components/Button";
import { useSelector } from "react-redux";

const User = () => {
  const handleEditName = () => {
    console.log("Edit name action");
  };

  const userDetails = useSelector((state) => state.user.userDetails);

  return (
    <main className="main bg-dark">
      {/* TODO Composant div "header" ???? */}
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userDetails.firstName} {userDetails.lastName} !
        </h1>
        {/* <button class="edit-button">Edit Name</button> */}
        <Button
          className="edit-button"
          onClick={handleEditName}
          label="Edit Name"
        />
      </div>

      <h2 className="sr-only">Accounts</h2>

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
