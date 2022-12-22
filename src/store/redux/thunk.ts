import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseApp } from '../../firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { AuthCredentials } from '../../interface/interface';

export const loginUserThunk = createAsyncThunk('/loginUser', async (credentials:AuthCredentials, { rejectWithValue }) => {
    try {
        const { email, password } = credentials; 
        const auth = getAuth(firebaseApp);

        const isUserLogin = await signInWithEmailAndPassword(auth, email, password);

        console.log(isUserLogin.user);
        return JSON.stringify(isUserLogin.user);
        
    } catch (error:any) {
         return rejectWithValue(error.response.data)
    }
})


export const registerUserThunk = createAsyncThunk('/signupUser', async (credentials: AuthCredentials, { rejectWithValue }) => {
    try {
        const { email, password } = credentials;
        const auth = getAuth(firebaseApp);

        const registerUser = await createUserWithEmailAndPassword(auth, email, password);
        console.log(registerUser.user);

        return JSON.stringify(registerUser.user);

    } catch (error:any) {
        return rejectWithValue(error.response.data);
    }
})

export const googleAuthProvider = createAsyncThunk('/googleAuth', async (data:any, {rejectWithValue}) => {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(firebaseApp);

        const result = await signInWithPopup(auth, provider);
        //
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        console.log({ main:result.user, credential, token });

        return JSON.stringify(result.user);

    } catch (error:any) {
        return rejectWithValue(error.message);
    }
})