import { configureStore } from "@reduxjs/toolkit";
import countReducer from './slices/countSlice'
import addToCartReducer from './slices/addToCartSlice'
import getDataSReducer from './slices/getDataSlice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'cart',
    storage,
}

const store = configureStore({
    reducer: {
        countReducer,
        getDataSReducer,
        addToCartReducer: persistReducer(persistConfig, addToCartReducer),
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
})


export const persistor = persistStore(store)
export default store