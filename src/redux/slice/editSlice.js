// Gestion modification username :  état local d’édition + requête async (modification du username)
// Gère l'appel API PUT


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { updateUsername } from './userSlice'; // importe l'action du userSlice

const API_URL = 'http://localhost:3001/api/v1/user';

export const updateUsernameAsync = createAsyncThunk('edit/updateUsername',
    async ({ newUsername }, { dispatch, rejectWithValue }) => {

        const token = localStorage.getItem('token');

        if (!token) {
            return rejectWithValue('Token manquant. Veuillez vous reconnecter.');
        }

        try {
            const response = await axios.put(`${API_URL}/profile`, {
                userName: newUsername,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Met à jour le store principal après succès API
            dispatch(updateUsername(response.data.body.userName));

            return response.data.body.username;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Erreur inconnue');
        }
    }
);

const editSlice = createSlice({
    name: 'edit',
    initialState: {
        status: 'idle',
        error: null,
    },
    reducers: {
        resetEditState: (state) => {
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUsernameAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateUsernameAsync.fulfilled, (state) => {
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(updateUsernameAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { resetEditState } = editSlice.actions;
export default editSlice.reducer;
