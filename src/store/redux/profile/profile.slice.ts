import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProfileData } from '../../../interface/interface';
import {getUserProfile} from './profile.thunk'

interface ProfileInitialState {
    error:any;
    loading:boolean;
    profile: null | any;
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
    }
})


export const ProfileReducer = ProfileSlice.reducer