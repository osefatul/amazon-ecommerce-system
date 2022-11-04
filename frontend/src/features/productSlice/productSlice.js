import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: "",
    product: {},
    products: [],
    productsBySameCategory: [],
    productsFiltered: []

}

const productSlice = createSlice ({
    name: 'hotels',
    initialState,

    reducers: {
        productPending: (state, action)=>{
            state.isLoading = true
        },


        fetchingProductsSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.products = action.payload
        },

        fetchingAProductSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.product = action.payload
        },
        
        fetchingSameCatProductsSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.productsBySameCategory = action.payload
        },
        fetchingFilteredProductsSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.productsFiltered = action.payload
        },


        productsFail: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },
    }
})

const { reducer, actions} = productSlice


export const  {
    productPending,
    fetchingProductsSuccess,
    fetchingAProductSuccess, 
    fetchingSameCatProductsSuccess,
    fetchingFilteredProductsSuccess,
    productsFail
} = actions

export default reducer;