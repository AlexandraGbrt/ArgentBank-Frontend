// Combine tous les reducers

import { combineReducers } from 'redux';
import userSlice from './slice/userSlice';


// Combinez tous les reducers ici
const rootReducer = combineReducers({
    user: userSlice,  // État lié à l'utilisateur
});

export default rootReducer;