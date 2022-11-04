import { createProduct, deleteProduct, getASpecificProduct, getProducts, getProductsByCategory, searchFilteredProduct, updateProduct } from "../../api/productApi";
import { fetchingAProductSuccess, fetchingFilteredProductsSuccess, fetchingProductsSuccess, fetchingSameCatProductsSuccess, productPending, productsFail } from "./productSlice";







export const creatingProduct = (formData) => async (dispatch) => {
    dispatch(productPending());
    try {
        const result = await createProduct(formData);
        // console.log(result);
        dispatch(fetchingAProductSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(productsFail(error))
        return error;
    }
}



export const fetchingASpecificProduct = (productId) => async (dispatch) => {
    dispatch(productPending());
    try {
        const result = await getASpecificProduct(productId);
        dispatch(fetchingAProductSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(productsFail(error))
        return error;
    }
}




export const fetchingProducts = () => async (dispatch) => {
    dispatch(productPending());
    try {
        const result = await getProducts();
        dispatch(fetchingProductsSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(productsFail(error))
        return error;
    }
}




export const deletingProduct = (productId) => async (dispatch) => {
    dispatch(productPending());
    try {
        const result = await deleteProduct(productId);
        console.log(result);
        dispatch(fetchingAProductSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(productsFail(error))
        return error;
    }
}



export const updatingProduct = (hotelId, formData) => async (dispatch) => {
    dispatch(productPending());
    try {
        const result = await updateProduct(hotelId, formData);
        // console.log(result);
        dispatch(fetchingAProductSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(productsFail(error))
        return error;
    }
}




export const fetchingProductsSameCategory = (category) => async (dispatch) => {
    dispatch(productPending());
    try {
        const result = await getProductsByCategory(category);

        dispatch(fetchingSameCatProductsSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(productsFail(error))
        return error;
    }
}


export const fetchingSearchFilteredProduct = (min, max, category) => async (dispatch) => {
    dispatch(productPending());
    try {
        const result = await searchFilteredProduct(min, max, category);

        dispatch(fetchingFilteredProductsSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(productsFail(error))
        return error;
    }
}