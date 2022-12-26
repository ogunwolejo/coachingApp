import { configureStore } from '@reduxjs/toolkit';
import { AuthReducer } from './auth.slice';



export const reduxStore = configureStore({
    reducer: {
        authReducer: AuthReducer
    }
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
