import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./features/authSlice/loginSlice";
import registrationReducer from "./features/authSlice/registrationSlice";
import productsReducer from "./features/productSlice/productSlice"


const store = configureStore({
    reducer: {
        login:loginReducer,
        registration:registrationReducer,
        products:productsReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
    serializableCheck: false,
    }),
})

export default store;