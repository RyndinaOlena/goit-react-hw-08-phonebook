import { combineReducers, configureStore } from "@reduxjs/toolkit";



import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { phoneBookReducer } from "./phoneBookReduser"
import { authReducer } from './authRedusers'

const authConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}



export const rootReduser = combineReducers({
    phoneBookReducer: phoneBookReducer,
    auth: persistReducer(authConfig, authReducer)
})


export const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
