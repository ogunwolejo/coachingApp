import {createSlice} from '@reduxjs/toolkit'
import {AccountData} from "../../../interface/interface";
import {updateUserAccountEmail, updateUserAccountPassword, updateUserAccountNotificationSettings, getAccountNotificationSettings} from './account.thunck'

const accountState:AccountData = {
    loading:false,
    error:null,
    loginCredentials: {
        email:'',
        password:''
    },
    notifications: {
        notification: {
            email:true,
            phone:false
        },
        billing:{
            email:true,
            phone:false
        },
        completedProject:{
            email:true,
            phone:false
        }
    }
}

const accountSlice = createSlice({
    name:'account',
    reducers:{},
    initialState:accountState,
    extraReducers:(builder) => {
        builder.addCase(updateUserAccountEmail.pending, (state, action) => {
            return {
                ...state,
                loading:true
            }
        })

        builder.addCase(updateUserAccountEmail.rejected, (state, action) => {
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        })

        builder.addCase(updateUserAccountEmail.fulfilled, (state, action) => {
            return {
                ...state,
                loading:false
            }
        })



        //update password
        builder.addCase(updateUserAccountPassword.pending, (state, action) => {
            return {
                ...state,
                loading:true
            }
        })


        builder.addCase(updateUserAccountPassword.rejected, (state, action) => {
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        })

        builder.addCase(updateUserAccountPassword.fulfilled, (state, action) => {
            return {
                ...state,
                loading:false
            }
        })


        //update notification
        builder.addCase(updateUserAccountNotificationSettings.pending, (state, action) => {
            return {
                ...state,
                loading:true
            }
        })

        builder.addCase(updateUserAccountNotificationSettings.rejected, (state, action) => {
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        })


        builder.addCase(updateUserAccountNotificationSettings.fulfilled, (state, action) => {
            return {
                ...state,
                loading:false
            }
        })

        // account setting
        builder.addCase(getAccountNotificationSettings.pending, (state, action) => {
            return {
                ...state,
                loading:true
            }
        })

        builder.addCase(getAccountNotificationSettings.rejected, (state, action) => {
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        })

        builder.addCase(getAccountNotificationSettings.fulfilled, (state, action) => {
            return console.log(action.payload)
        })
    }
})

export const AccountSettingReducer = accountSlice.reducer;