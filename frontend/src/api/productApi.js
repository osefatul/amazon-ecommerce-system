import axios from "axios"

const rootUrl = "http://localhost:5000/v1/"
const createProductUrl = rootUrl + "products/";
const getProductsUrl =  rootUrl + "products/";
const deleteProductUrl = rootUrl + "products/";
const updateProductUrl = rootUrl + "products/";
const getProductsByCategoryUrl = "http://localhost:5000/v1/products/same-category";



export const createProduct = async (formData) =>{
    try {
        const res = await axios.post(createProductUrl , formData, 
            axios.defaults.withCredentials = true //for sending cookies.
        );
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const getProducts = async () =>{
    try {
        const res = await axios.get(getProductsUrl);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}



export const getASpecificProduct = async (productId) =>{
    try {
        const res = await axios.get(getProductsUrl + productId);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}




export const deleteProduct = async (productId) =>{
    try {
        const res = await axios.delete(deleteProductUrl + productId );
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}




export const updateProduct = async (productId, formData) =>{
    try {
        const res = await axios.put(updateProductUrl + productId, formData,
            axios.defaults.withCredentials = true //for sending cookies.
            );
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}




export const getProductsByCategory = async (category)=>{
    try {
        const res = await axios.get(getProductsByCategoryUrl + "?category=Books", 
            axios.defaults.withCredentials = true //for sending cookies.
            );
        // console.log(res/)
        return res
    }catch (error){
        console.log(error)
        return error;
    }
}
