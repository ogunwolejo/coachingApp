import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {googleAuthProvider, loginUserThunk, registerUserThunk} from './thunk';

interface InitialState {
    loading: boolean;
    error: null | any;
    
}

const _: InitialState = {
        loading: false, 
        error:null
    } 


const AuthSlice = createSlice({
    name: 'auth', 
    initialState: _,
    reducers:{},
    extraReducers: (builder) => {
        // login users
        builder.addCase(loginUserThunk.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(loginUserThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            state.loading = false;

        })

        // register new users
        builder.addCase(registerUserThunk.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(registerUserThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });

        builder.addCase(registerUserThunk.fulfilled, (state, action) => {
            state.loading = false;
        })

        //google auth
    }
}) 

export const AuthReducer = AuthSlice.reducer;