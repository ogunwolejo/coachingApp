import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFirestore, doc, getDoc, query, where, collection } from 'firebase/firestore';
import { firebaseApp } from '../../../firebase.config';

export const getUserProfile = createAsyncThunk('/fetchProfile', async (id: string, { rejectWithValue }) => {
    try {
        const db = getFirestore(firebaseApp);
        const getProfileCollection = collection(db, 'user');
        const getUserProfile = query(getProfileCollection, where('id', "==", id))
        return getUserProfile;
    } catch (error:any) {
        return rejectWithValue(error.code);
    }
})