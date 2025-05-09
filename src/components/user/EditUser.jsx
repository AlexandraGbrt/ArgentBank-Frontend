import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUsernameAsync,
  resetEditForm,
} from "../../redux/slice/editSlice";
import { updateUsername } from "../../redux/slice/userSlice";

const EditUser = ({ setIsEditing }) => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails); // Récuperer le nom et prénom et username pour les safficher

  const [newUsername, setNewUsername] = useState(""); // "" vide car useEffect ci dessous

  useEffect(() => {
    if (userDetails.userName) {
      // accédez à `userDetails.userName`
      setNewUsername(userDetails.userName); // Mise à jour newUsername si le state change
    }
  }, [userDetails]); // Affichage username dans le champs

  const handleUpdate = async () => {
    try {
      const resultAction = await dispatch(updateUsernameAsync({ newUsername }));

      if (updateUsernameAsync.fulfilled.match(resultAction)) {
        dispatch(updateUsername(newUsername)); // action updateUsername
        setIsEditing(false); // Ferme le formulaire après succès
        dispatch(resetEditForm());
      } else {
        console.error("Erreur:", resultAction.payload);
      }
    } catch (err) {
      console.error("Erreur inattendue:", err);
    }
  };

  const handleClose = () => {
    setIsEditing(false); // Ferme le formulaire d'édition : état `isEditing`false
    setNewUsername(userDetails.userName); // Réinitialise le username précédent
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
