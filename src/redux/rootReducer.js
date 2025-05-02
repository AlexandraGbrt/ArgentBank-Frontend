// Combine tous les reducers


import { combineReducers } from 'redux';
import userSlice from './features/userSlice'; // Importez votre reducer d'utilisateur
import transactionSlice from './features/transactionSlice'; // Importez votre reducer de transactions

// Combinez tous les reducers ici
const rootReducer = combineReducers({
    user: userSlice,                   // État lié à l'utilisateur
    transactions: transactionSlice,     // État lié aux transactions
});

export default rootReducer;