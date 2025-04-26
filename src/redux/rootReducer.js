// Combine tous les reducers


import { combineReducers } from 'redux';
import userReducer from './features/userSlice'; // Importez votre reducer d'utilisateur
import transactionReducer from './features/transactionSlice'; // Importez votre reducer de transactions

// Combinez tous les reducers ici
const rootReducer = combineReducers({
    user: userReducer,                   // État lié à l'utilisateur
    transactions: transactionReducer,     // État lié aux transactions
});

export default rootReducer;