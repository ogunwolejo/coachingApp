import { configureStore } from '@reduxjs/toolkit';
import { AuthReducer } from './auth/auth.slice';
import {AccountSettingReducer} from './account/account.slice'



export const reduxStore = configureStore({
    reducer: {
        auth: AuthReducer,
        //profile: ProfileReducer,
        //accountSetting:AccountSettingReducer
    }
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
