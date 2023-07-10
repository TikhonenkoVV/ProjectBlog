import { createSlice } from "@reduxjs/toolkit";
import {
    signUpOperation,
    signInOperation,
    signOutOperation,
} from "./operations";

const initialState = {
    user: {
        id: null,
        userName: null,
        userEmail: null,
        userPhoto: null,
    },
    isLoggedIn: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(signUpOperation.fulfilled, (state, action) => {
                state.user.id = action.payload.id;
                state.user.userName = action.payload.userName;
                state.user.userEmail = action.payload.userEmail;
                state.user.userPhoto = action.payload.userPhoto;
                state.isLoggedIn = true;
                state.error = null;
            })
            .addCase(signUpOperation.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
                state.isLoggedIn = false;
            })
            .addCase(signInOperation.fulfilled, (state, action) => {
                state.user.id = action.payload.id;
                state.user.userName = action.payload.userName;
                state.user.userEmail = action.payload.userEmail;
                state.user.userPhoto = action.payload.userPhoto;
                state.isLoggedIn = true;
                state.error = null;
            })
            .addCase(signInOperation.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoggedIn = false;
                state.isLoading = false;
            })
            .addCase(signOutOperation.fulfilled, (state, action) => {
                state.user.id = action.payload.id;
                state.user.userName = action.payload.userName;
                state.user.userEmail = action.payload.userEmail;
                state.user.userPhoto = action.payload.userPhoto;
                state.isLoggedIn = false;
                state.error = null;
            })
            .addCase(signOutOperation.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoggedIn = false;
                state.isLoading = false;
            });
    },
});

export const authReducer = authSlice.reducer;
