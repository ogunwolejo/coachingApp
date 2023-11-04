import {createSlice} from '@reduxjs/toolkit'
import AuthThunk from './thunk'
import { ICurrentUser } from '../../../interface/store.interface'

interface InitialState {
  loading: boolean
  error: null | any
  currentUser: ICurrentUser | null
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
      return {
        ...state,
        currentUser:action.payload
      }
    },
    clearError:(state, action) => {
      return {
        ...state,
        error:null
      }
    } 
  },
  extraReducers(builder) {
    //LOGIN
    /*** by email and password */
    builder.addCase(AuthThunk.loginThunk.pending, (state, action) => {
      return {
        ...state,
        loading:true
      }
    })
    builder.addCase(AuthThunk.loginThunk.fulfilled, (state, action) => {
      //console.log(action)
      if(action.payload.error) {
        return {
          ...state,
          loading:false,
          error: action.payload.error
        }
      }

      return {
        ...state,
        loading:false,
        currentUser:action.payload.data,
        error:null
      }      
    })
    builder.addCase(AuthThunk.loginThunk.rejected, (state, action) => {
      return {
        ...state,
        loading:false
      }
    }) 

    /*** by phone number */
    builder.addCase(AuthThunk.loginViaMobileThunk.pending, (state, action) => {
      return {
        ...state,
        loading:true
      }
    })
    builder.addCase(AuthThunk.loginViaMobileThunk.fulfilled, (state, action) => {
      //console.log(action)
      if(action.payload.error) {
        return {
          ...state,
          loading:false,
          error: action.payload.error
        }
      }

      return {
        ...state,
        loading:false,
        currentUser:action.payload.data,
        error:null
      }      
    })
    builder.addCase(AuthThunk.loginViaMobileThunk.rejected, (state, action) => {
      return {
        ...state,
        loading:false
      }
    }) 
  },
})

//adminRegisterUserThunk
export const AuthReducer = AuthSlice.reducer

export const {setUser,clearError} = AuthSlice.actions
