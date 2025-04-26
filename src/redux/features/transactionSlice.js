// Gestion état transactions

import { createSlice } from '@reduxjs/toolkit';

const transactionSlice = createSlice({
    name: 'transactions',
    initialState: {
        transactionsList: [],
    },
    reducers: {
        setTransactions(state, action) {
            state.transactionsList = action.payload;
        },
        addTransaction(state, action) {
            state.transactionsList.push(action.payload);
        },
        deleteTransaction(state, action) {
            state.transactionsList = state.transactionsList.filter(
                (transaction) => transaction.id !== action.payload
            );
        },
    },
});


export const { setTransactions, addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;