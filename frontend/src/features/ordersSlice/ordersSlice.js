import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: "",
    order: [],
    orders: [],
}

const orderSlice = createSlice ({
    name: 'orders',
    initialState,

    reducers: {
        ordersPending: (state, action)=>{
            state.isLoading = true
            state.isRevenueLoading = true
            state.isStatsLoading = true
            state.ordersWeeklyRevenue = true
            state.latestTransactions = true
        },

        fetchingOrdersSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.orders = action.payload
        },


        fetchingAnOrderSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.order = action.payload
        },

        orderFail: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },
    }
})

const { reducer, actions} = orderSlice


export const  {
    ordersPending,
    fetchingOrdersSuccess,
    fetchingAnOrderSuccess,
    orderFail
} = actions

export default reducer;