import {createSlice} from '@reduxjs/toolkit'
import AuthThunk from './thunk'
import { ICurrentUser } from '../../../interface/store.interface'

interface InitialState {
  loading: boolean
  error: null | any
  currentUser: ICurrentUser | null,
  isAuth: ICurrentUser | null,
}

const _: InitialState = {
  loading: false,
  error: null,
  currentUser: null,
  isAuth:null
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState: _,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        currentUser:action.payload, 
        isAuth:action.payload
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

      localStorage.setItem('token', action.payload.data.token)
      return {
        ...state,
        loading:false,
        currentUser:action.payload.data,
        isAuth:action.payload.data,
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

      localStorage.setItem('token', action.payload.data.token)
      return {
        ...state,
        loading:false,
        currentUser:action.payload.data,
        isAuth:action.payload.data,
        error:null
      }      
    })
    builder.addCase(AuthThunk.loginViaMobileThunk.rejected, (state, action) => {
      return {
        ...state,
        loading:false
      }
    })


    // update email
    /*** by phone number */
    builder.addCase(AuthThunk.updateEmailThunk.pending, (state, action) => {
      return {
        ...state,
        loading:true
      }
    })
    builder.addCase(AuthThunk.updateEmailThunk.fulfilled, (state, action) => {
      if(action.payload.error) {
        return {
          ...state,
        }
      }

      //console.log(action.payload)

      return {
        ...state,
        currentUser:{
          ...state.currentUser,
          user: action.payload.data.user
        },
        loading:false,
        error:null
      }      
    })
    builder.addCase(AuthThunk.updateEmailThunk.rejected, (state, action) => {
      return {
        ...state,
        loading:false
      }
    })

    //by tokem
    builder.addCase(AuthThunk.authByTokenThunk.pending, (state, action) => {
      return {
        ...state,
        loading:true
      }
    })
    builder.addCase(AuthThunk.authByTokenThunk.fulfilled, (state, action) => {
      console.log(action)
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
        isAuth:action.payload.data,
        error:null
      }      
    })
    builder.addCase(AuthThunk.authByTokenThunk.rejected, (state, action) => {
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
