import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import EditUser from "./EditUser";

// REDUX
import { useSelector } from "react-redux";

const HeaderUser = () => {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.user.userDetails);

  const [isEditing, setIsEditing] = useState(false); // Contrôle l'affichage du formulaire d'édition

  useEffect(() => {
    if (!userDetails) {
      navigate("/"); // Rediriger le user après déconnexion
    }
  }, [userDetails, navigate]);

  if (!userDetails) {
    return null;
  }

  const handleEditName = () => {
    setIsEditing(true); // Afficher le formulaire d'édition
  };

  return (
    <>
      {/* Si isEditing est false, afficher le HeaderUser */}
      {!isEditing && (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userDetails.firstName} {userDetails.lastName} !
          </h1>

          {/* Bouton pour déclencher l'édition */}
          <Button
            className="edit-button"
            onClick={handleEditName}
            label="Edit Name"
          />
        </div>
      )}

      {/* Si isEditing est true, afficher le formulaire EditUser */}
      {isEditing && <EditUser setIsEditing={setIsEditing} />}
    </>
  );
};

export default HeaderUser;
