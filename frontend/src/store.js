import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./features/authSlice/loginSlice";
import registrationReducer from "./features/authSlice/registrationSlice";
import productsReducer from "./features/productSlice/productSlice"
import cartReducer from "./features/cartSlice/cartSlice"
import orderReducer from "./features/ordersSlice/ordersSlice"


const store = configureStore({
    reducer: {
        login:loginReducer,
        registration:registrationReducer,
        products:productsReducer,
        cart:cartReducer,
        order:orderReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
    serializableCheck: false,
    }),
})

export default store;