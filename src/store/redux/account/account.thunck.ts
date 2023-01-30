import {createAsyncThunk} from "@reduxjs/toolkit";
import {firebaseApp} from "../../../firebase.config";
import {getAuth, updateEmail, updatePassword} from 'firebase/auth';
import {getFirestore, setDoc, doc, getDoc} from "firebase/firestore";

interface ChangeUserEmail {
    id:string;
    email:string;
}

interface ChangeUserPassword {
    id:string;
    password:string;
}

interface ChangeAccountNotifications {
    id:string;
    billing:{
        email:boolean;
        phone:boolean;
    };

    notification: {
        email:boolean;
        phone:boolean;
    };

    completedProject:{
        phone:boolean;
        email:boolean;
    }
}

export const updateUserAccountEmail = createAsyncThunk('/updateUserEmail', async(data:ChangeUserEmail, {rejectWithValue}) => {
    try {
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if(currentUser && currentUser.uid === data.id) {
            const changeEmail = await updateEmail(currentUser, data.email);
            return changeEmail
        }

        throw new Error("User cannot change the email")

    } catch (e:any) {
        return rejectWithValue(e)
    }
})

export const updateUserAccountPassword = createAsyncThunk('/updateUserPassword', async(data:ChangeUserPassword, {rejectWithValue}) => {
    try {
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if(currentUser && currentUser.uid === data.id) {
            const changePassword = await updatePassword(currentUser, data.password);
            return changePassword
        }

        throw new Error("User cannot change the password")
    } catch (e:any) {
        return rejectWithValue(e)
    }
})

export const updateUserAccountNotificationSettings = createAsyncThunk('/updateUserNotification', async(data:ChangeAccountNotifications, {rejectWithValue}) => {
    try {
        const db = getFirestore(firebaseApp);
        await setDoc(doc(db, 'account-setting', data.id), {
            billing: {
                email:data.billing.email,
                phone:data.billing.phone
            },
            completedProject:{
                email:data.completedProject.email,
                phone:data.completedProject.phone
            },
            notification:{
                email:data.notification.email,
                phone:data.notification.phone
            }
        })
    } catch (e:any) {
        return rejectWithValue(e)
    }
})

export const getAccountNotificationSettings = createAsyncThunk('/getNotificationSettings', async(id:string, {rejectWithValue}) => {
    try {
        const db = getFirestore(firebaseApp);
        const getNotification = doc(db, 'account-setting', id);
        const accountNotificationDoc = await getDoc(getNotification);

        if(!accountNotificationDoc.exists()) {
            throw new Error('Setting does not exist')
        }

        return accountNotificationDoc.data();

    } catch (e:any) {
        return rejectWithValue(e)
    }
})