import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { firebaseApp } from '../../../firebase.config';
import {getAuth, updateProfile} from "firebase/auth";
import {ProfileUpdate} from '../../../interface/interface'

export const getUserProfile = createAsyncThunk('/fetchProfile', async (id: string, { rejectWithValue }) => {
    try {
        const db = getFirestore(firebaseApp);
        const searchForDocument = doc(db, 'user', id);
        const getSearchDoc = await getDoc(searchForDocument);

        if(!getSearchDoc.exists()) {
            throw new Error("No such Document exist")
        }

        return getSearchDoc.data();

    } catch (error:any) {
        return rejectWithValue(error.code);
    }
})



export const updateUserProfile = createAsyncThunk('/updateProfile', async(data:ProfileUpdate, {rejectWithValue}) => {
    try {
        const db = getFirestore(firebaseApp)
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if(currentUser && currentUser.uid === data.id) {
            console.log(data);
            await updateProfile(currentUser, {
                displayName:data.fullName
            })

            await updateDoc(doc(db, 'user', data.id), {
                country: data.country,
                phoneNumber:data.phoneNumber
            })

        }

    } catch(error:any) {
        return rejectWithValue(error.code)
    }
})