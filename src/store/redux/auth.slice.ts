import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {loginUserThunk, registerUserThunk, googleAuthProviderHandlerThunk} from './thunk'

interface InitialState {
  loading: boolean
  error: null | any
  currentUser: any | null
}

const _: InitialState = {
  loading: false,
  error: null,
  currentUser: null,
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState: _,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload
    },
  },
  extraReducers: (builder) => {
    // login users
    builder.addCase(loginUserThunk.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(loginUserThunk.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.currentUser = action.payload
      state.loading = false
    })

    // register new users
    builder.addCase(registerUserThunk.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(registerUserThunk.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      state.loading = false
    })

    //google auth
    builder.addCase(googleAuthProviderHandlerThunk.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(googleAuthProviderHandlerThunk.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase(googleAuthProviderHandlerThunk.fulfilled, (state, action) => {
      state.currentUser = action.payload
      state.loading = false
    })
  },
})

export const AuthReducer = AuthSlice.reducer

export const {setUser} = AuthSlice.actions
