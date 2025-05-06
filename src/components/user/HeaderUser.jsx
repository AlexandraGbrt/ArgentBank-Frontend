// HEADER USER PAGE USER
import React, { useEffect } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";

const HeaderUser = () => {
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

  const handleEditName = () => {
    const editUser = document.querySelector(".editUser");
    const header = document.querySelector(".header");
    editUser.style.display = "flex";
    header.style.display = "none";
  };

  return (
    <>
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
    </>
  );
};

export default HeaderUser;
