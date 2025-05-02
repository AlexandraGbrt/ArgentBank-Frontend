// Gestion état utilisateur : Statut de connexion

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const loginUser = createAsyncThunk( // Géré des actions async, si état mis à jour alors : extrareducers
    'user/login',
    async (userInfo) => {
        console.log("Données envoyées :", userInfo);
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ body: userInfo })
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || 'Erreur de connexion')
        }

        // Récuperer les détails de l'utilisateur
        return {
            token: data.body.token,
            userDetails: {
                firstName: data.body.firstName, // Récupérez le prénom
                lastName: data.body.lastName,   // Récupérez le nom
                email: data.body.email           // Récupérez l'email si nécessaire
            }
        };
    }
)



const userSlice = createSlice({ // Slice : partie de l'état global qui contient : 3 élements
    name: 'user',
    initialState: { // 1: état par défaut de l'utilisateur : false car non connecté
        token: null,
        userDetails: null, // Assurez-vous que cela est inclus dès le début
        error: null,
        loading: false,
    },
    reducers: { // 2: reducuers : définir comment l'état doit ê modifié
        logout(state) {
            state.token = null;
            state.userDetails = null; // ??? 
            state.error = null;
        }
    },

    extraReducers: (builder) => { // comment réagir aux différents états
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload.token; // Stockez le token
                state.userDetails = action.payload.userDetails; // Stockez les détails de l'utilisateur
                state.error = null;
                state.loading = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    }
})



export default userSlice.reducer
export const { logout } = userSlice.actions;
