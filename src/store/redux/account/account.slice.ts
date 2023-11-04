import {createSlice} from '@reduxjs/toolkit'
import {AccountData} from "../../../interface/interface";

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
    
})

export const AccountSettingReducer = accountSlice.reducer;