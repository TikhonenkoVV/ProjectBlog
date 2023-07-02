import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, storage } from "../../../firebase-config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const signUpOperation = createAsyncThunk(
    "auth/signup",
    async (
        { userName, userEmail, userPassword, userPhoto },
        { rejectWithValue }
    ) => {
        try {
            await createUserWithEmailAndPassword(auth, userEmail, userPassword);
            const photoRef = ref(
                storage,
                `avatars/${auth.currentUser.uid}.jpg`
            );
            const avatar = await fetch(userPhoto);
            const blobImg = await avatar.blob();
            await uploadBytes(photoRef, blobImg);
            const avatarUrl = await getDownloadURL(ref(storage, photoRef));
            await updateProfile(auth.currentUser, {
                displayName: userName,
                photoURL: avatarUrl,
            });
            const { uid, displayName, email, photoURL, stsTokenManager } =
                auth.currentUser;
            return {
                id: uid,
                userName: displayName,
                userEmail: email,
                userPhoto: photoURL,
                accessToken: stsTokenManager.accessToken,
                refreshToken: stsTokenManager.refreshToken,
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const signInOperation = createAsyncThunk(
    "auth/signin",
    async ({ userEmail, userPassword }, { rejectWithValue }) => {
        try {
            await signInWithEmailAndPassword(auth, userEmail, userPassword);
            const { uid, displayName, email, photoURL, stsTokenManager } =
                auth.currentUser;
            return {
                id: uid,
                userName: displayName,
                userEmail: email,
                userPhoto: photoURL,
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const signOutOperation = createAsyncThunk(
    "auth/signout",
    async (_, { rejectWithValue }) => {
        try {
            await signOut(auth);
            return {
                id: null,
                userName: null,
                userEmail: null,
                userPhoto: null,
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
