import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    isAuth: false,
    error: "",
    user: {},
    demoAdminLogin: false,
    demoUserLogin: false

}

const loginSlice = createSlice ({
    name: 'login',
    initialState,
    reducers: {
        loginPending: (state, action)=>{
            state.isLoading = true
        },
        DemoAdminLoginPending: (state, action)=>{
            state.demoLogin = true
        },
        DemoUserLoginPending: (state, action)=>{
            state.demoUserLogin = true
        },
        loginSuccess: (state)=>{
            state.isLoading = false
            state.demoAdminLogin= false
            state.demoUserLogin= false
            state.isAuth = true
            state.error = ""
        },
        userSuccess: (state, action)=>{
            state.user = action.payload
        },
        loginFail: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },
        EraseLoginError: (state, action)=>{
            state.isLoading = false
            state.error = ""
        }
    }
})

const { reducer, actions} = loginSlice


export const  {
    loginPending, 
    loginSuccess, 
    userSuccess,
    loginFail, 
    EraseLoginError,
    DemoAdminLoginPending,
    DemoUserLoginPending} = actions
    
export default reducer;

