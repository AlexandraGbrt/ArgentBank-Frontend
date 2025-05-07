import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUsernameAsync,
  resetEditState,
} from "../../redux/slice/editSlice";

const EditUser = ({ setIsEditing }) => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails); // Récuperer le nom et prénom pour l'afficher
  const username = useSelector((state) => state.user.username); // récuperer le username pour l'afficher

  const [newUsername, setNewUsername] = useState(""); // "" vide car useEffect ci dessous
  useEffect(() => {
    if (username) {
      setNewUsername(username);
    }
  }, [username]); // Affichage username dans le champs

  const handleUpdate = async () => {
    try {
      const resultAction = await dispatch(updateUsernameAsync({ newUsername }));

      if (updateUsernameAsync.fulfilled.match(resultAction)) {
        setIsEditing(false); // Ferme le formulaire après succès
        dispatch(resetEditState());
      } else {
        console.error("Erreur:", resultAction.payload); // Ligne 28 corrigée
      }
    } catch (err) {
      console.error("Erreur inattendue:", err);
    }
  };

  const handleClose = () => {
    setIsEditing(false); // Ferme le formulaire d'édition : état `isEditing`false
    setNewUsername(username); // Réinitialise le username précédent
  };

  return (
    <>
      <div className="edit-user">
        <h2>Edit user info</h2>
        <form className="edit-form">
          <div className="edit-field">
            <label htmlFor="username">User name : </label>
            <input
              type="text"
              id="username"
              name="username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              required
            />
          </div>
          {/* {error} */}

          <div className="edit-field">
            <label htmlFor="firstname">First name : </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={userDetails?.firstName}
              readOnly
              disabled
            />
          </div>
          <div className="edit-field">
            <label htmlFor="lastname">Last name : </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={userDetails?.lastName}
              readOnly
              disabled
            />
          </div>
        </form>
        <div className="button-form">
          <button className="edit-button" onClick={handleUpdate}>
            Save
          </button>
          <button className="edit-button" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default EditUser;
