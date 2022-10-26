import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./features/authSlice/loginSlice";
import registrationReducer from "./features/authSlice/registrationSlice";
// import userReducer from "./features/SpecificUerSlice/userSlice"


const store = configureStore({
    reducer: {
        login:loginReducer,
        registration:registrationReducer,
    }
})

export default store;