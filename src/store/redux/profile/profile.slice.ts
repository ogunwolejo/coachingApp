import {createSlice} from '@reduxjs/toolkit'
import {getUserProfile, updateUserProfile} from './profile.thunk'

interface ProfileInitialState {
    error:any;
    loading:boolean;
    profile: null | any
}


const _profileState:ProfileInitialState = {
    error:null,
    loading:false,
    profile:null
}

const ProfileSlice = createSlice({
    initialState:_profileState,
    name:'profile',
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getUserProfile.pending, (state, action) => {
            return {
                ...state,
                loading:true
            }
        })

        builder.addCase(getUserProfile.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error:action.payload
            }
        })

        builder.addCase(getUserProfile.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                profile:action.payload
            }
        })

        builder.addCase(updateUserProfile.fulfilled, (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                loading: false,
            }
        })

        builder.addCase(updateUserProfile.pending, (state, action) => {
            return {
                ...state,
                loading: true
            }
        })

        builder.addCase(updateUserProfile.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error:action.payload
            }
        })
    }
})


export const ProfileReducer = ProfileSlice.reducer