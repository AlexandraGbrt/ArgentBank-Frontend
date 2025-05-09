// Gestion état utilisateur : Statut de connexion et gestion des données 
// Met a jour le username

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user';


// CONNEXION 
export const loginUser = createAsyncThunk('user/login', async ({ email, password }, thunkAPI) => {

    try {
        // Envoie les données avec les bons paramètres
        const response = await axios.post(`${API_URL}/login`, { email, password });

        return response.data.body; // recupération token

    } catch (error) {
        console.error("Erreur lors de la connexion :", error.response);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// RECUPERER LES INFOS USER
export const getUserProfile = createAsyncThunk('user/getProfile', async (_, thunkAPI) => {
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(`${API_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data.body;

    } catch (error) {
        console.error("Erreur lors de la récupération du profil :", error.response);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});



const initialState = {
    isAuthenticated: false,
    userDetails: null, // On garde les informations de l'utilisateur ici
    username: "", // récuperer le username pour la modification
    status: 'idle',
    error: null,
};

// Crée le slice utilisateur
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.userDetails = null;
            state.username = ""; // récupérer le username ???
            state.status = 'idle';
        },
        updateUsername: (state, action) => {
            state.userDetails.userName = action.payload; // Met à jour le username dans userdetails
        },
    },

    // reducers asynchrones pour gérer les actions utilisateur
    extraReducers: (builder) => {
        builder
            // Cas de loginUser
            .addCase(loginUser.pending, (state) => {
                state.loading = true; // Mettre à jour le state durant le chargement
                state.error = null; // Réinitialiser les erreurs
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userDetails = action.payload; // sauvegarde les infos de l'utilisateur
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Enregistrer l'erreur
            })


            // Cas de getUserProfile
            .addCase(getUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.userDetails = action.payload;  // Met à jour les infos utilisateur dans Redux
                state.username = action.payload.userName; // action pour enregistrer le username après connexion reussie et récup info user
            })
            .addCase(getUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout, updateUsername } = userSlice.actions;
export default userSlice.reducer;
