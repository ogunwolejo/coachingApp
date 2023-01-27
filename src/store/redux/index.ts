import { configureStore } from '@reduxjs/toolkit';
import { AuthReducer } from './auth/auth.slice';
import {ProfileReducer} from './profile/profile.slice'



export const reduxStore = configureStore({
    reducer: {
        authReducer: AuthReducer,
        profile: ProfileReducer
    }
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
