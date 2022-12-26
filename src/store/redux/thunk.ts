import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseApp } from '../../firebase.config';
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    sendEmailVerification,
    
} from 'firebase/auth';

import { AuthCredentials, ResetPassword } from '../../interface/interface';


export const loginUserThunk = createAsyncThunk('auth/loginUser', async (credentials:AuthCredentials, { rejectWithValue }) => {
    try {
        const { email, password } = credentials; 
        const auth = getAuth(firebaseApp);

        const isUserLogin = await signInWithEmailAndPassword(auth, email, password);

        console.log(isUserLogin.user);
        return JSON.stringify(isUserLogin.user);
        
    } catch (error: any) {
        console.log(error.message);
         return rejectWithValue(error.message)
    }
})


export const registerUserThunk = createAsyncThunk('auth/signupUser', async (credentials: AuthCredentials, { rejectWithValue }) => {
    try {
        const { email, password } = credentials;
        const auth = getAuth(firebaseApp);

        const registerUser = await createUserWithEmailAndPassword(auth, email, password);
        //@ts-ignore
        await sendEmailVerification(auth.currentUser);

        return JSON.stringify(registerUser.user);

    } catch (error:any) {
        return rejectWithValue(error.message);
    }
})

