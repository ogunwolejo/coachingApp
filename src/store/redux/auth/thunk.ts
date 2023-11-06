import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthCredentials, LoginCredentials } from "../../../interface/interface";
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


const signupThunk = createAsyncThunk('signup', async(data:AuthCredentials, {rejectWithValue}) => {
    const env = useEnv()
    try {
        const register = await Axios.post(`${env?.url}auth/register`, {
            data
        })
        console.log(register.data)
        return register.data
    } catch (error:any) {
        return error.response.data
    }
})

const verifyEmailThunk = createAsyncThunk('verifyEmail', async(data:{email:string}) => {
    const env = useEnv()
    try {
        const isEmailVerified = await Axios.post(`${env?.url}auth/verifyEmail`, {
            data:{
                email:data.email,
            }
        })
        return isEmailVerified.data
    } catch (error:any) {
        return error.response.data
    }
})


const verifyUserAccountThunk = createAsyncThunk('verifyUserAccount', async(data:{id:string}) => {
    const env = useEnv()
    try {
        const accountVerified = await Axios.post(`${env?.url}auth/confirm-account`, {
            data:{
                token:data.id
            }
        })
        console.log(accountVerified.data)

        return accountVerified.data
    } catch (error:any) {
        return error.response.data        
    }
})

const changePasswordThunk = createAsyncThunk('changePassword', async(data:{token:string | null; password:string}) => {
    const env = useEnv()
    try {
        const changePass = await Axios.post(`${env?.url}auth/changePassword`, {
            data:{
                token:data.token,
                password:data.password
            }
        })
        console.log(changePass.data)

        return changePass.data
    } catch (error:any) {
        return error.response.data        
    }
})


const updateEmailThunk = createAsyncThunk('updateEmail', async(data:{newEmail:string; password:string; token:string|null}) => {
    const env = useEnv()
    try {
        const changePass = await Axios.post(`${env?.url}auth/update-email`, {
            data:{
                newEmail:data.newEmail,
                password:data.password
            },
            Headers:{
                Authorization: 'Bearer ' + data.token
            }
        })
        console.log(changePass.data)

        return changePass.data
    } catch (error:any) {
        return error.response.data        
    }
})



const updatePasswordThunk = createAsyncThunk('updatPassword', async(data:{password:string; token:string|null; oldPassword:string}) => {
    const env = useEnv()
    try {
        const changePass = await Axios.post(`${env?.url}auth/update-password`, {
            data:{
                password:data.password,
                oldPassword:data.oldPassword
            },
            Headers:{
                Authorization: 'Bearer ' + data.token
            }
        })
        return changePass.data
    } catch (error:any) {
        return error.response.data        
    }
})


const authByTokenThunk = createAsyncThunk('authByToken', async(data:{token:string;}) => {
    const env = useEnv()
    try {
        const changePass = await Axios.post(`${env?.url}auth`, {
            Headers:{
                Authorization: 'Bearer ' + data.token
            }
        })
        return changePass.data
    } catch (error:any) {
        return error.response.data        
    }
})



const AuthThunk = {
    loginThunk,
    loginViaMobileThunk,
    signupThunk,
    verifyEmailThunk,
    verifyUserAccountThunk,
    changePasswordThunk,
    updateEmailThunk,
    updatePasswordThunk,
    authByTokenThunk
}

export default AuthThunk