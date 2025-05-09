// Combine tous les reducers

import { combineReducers } from 'redux';
import userSlice from './slice/userSlice';
import editSlice from './slice/editSlice';


// Combinez tous les reducers ici
const rootReducer = combineReducers({
    user: userSlice,  // État lié à l'utilisateur
    edit: editSlice, // État pour l'édition de l'utilisateur
});

export default rootReducer;