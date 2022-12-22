import { configureStore } from '@reduxjs/toolkit';
import { AuthReducer } from './auth.slice';



export const reduxStore = configureStore({
    reducer: {
        authReducer: AuthReducer
    }
})
