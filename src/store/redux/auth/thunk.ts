import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginCredentials } from "../../../interface/interface";
import useEnv from "../../../hook/use-env";


const loginThunk = createAsyncThunk('login', async(data:LoginCredentials, {rejectWithValue}) => {
    const env = useEnv()
    try {
       const login = await Axios.post(`${env?.url}auth/login`, {
        data:{
            email:data.email,
            password:data.password
        }
       })
       return login.data 
    } catch (error:any) {
        return error.response.data
    }
})

const loginViaMobileThunk = createAsyncThunk('login-mobile', async(data:LoginCredentials, {rejectWithValue}) => {
    const env = useEnv()
    try {
       const login = await Axios.post(`${env?.url}auth/login-mobile`, {
        data:{
            phoneNumber:data.phoneNumber
        }
       })
       return login.data 
    } catch (error:any) {
        return error.response.data
    }
})


const signupThunk = createAsyncThunk('signup', (data:any) => {})

const verifyEmailThunk = createAsyncThunk('verifyEmail', (data:any) => {})

const changePasswordThunk = createAsyncThunk('changePassword', (data:any) => {})


const AuthThunk = {
    loginThunk,
    loginViaMobileThunk,
    signupThunk
}

export default AuthThunk