import axios from "axios"

// const rootUrl = "http://localhost:5000/v1/"
// const createProductUrl = rootUrl + "products/";
// const getProductsUrl =  rootUrl + "products/";
// const deleteProductUrl = rootUrl + "products/";
// const updateProductUrl = rootUrl + "products/";
// const getProductsByCategoryUrl = "http://localhost:5000/v1/products/same-category";
// const searchFilteredProductUrl = "http://localhost:5000/v1/products/searchItems";



const rootUrl = "https://amazon-ecommerce-system-mern.herokuapp.com/v1/"
const createProductUrl = rootUrl + "products/";
const getProductsUrl =  rootUrl + "products/";
const deleteProductUrl = rootUrl + "products/";
const updateProductUrl = rootUrl + "products/";
const getProductsByCategoryUrl = "https://amazon-ecommerce-system-mern.herokuapp.com/v1/products/same-category";
const searchFilteredProductUrl = "https://amazon-ecommerce-system-mern.herokuapp.com/v1/products/searchItems";



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
        const res = await axios.get(getProductsByCategoryUrl + `?category=${category}`, 
            axios.defaults.withCredentials = true //for sending cookies.
            );
        // console.log(res/)
        return res
    }catch (error){
        console.log(error)
        return error;
    }
}




export const searchFilteredProduct = async (min, max, category)=>{
    // console.log(min, max, category)
    try {
        const res = await axios.get(
            searchFilteredProductUrl + `?min=${min}&max=${max}&category=`+category, 
            );
        // console.log(res)
        return res
    }catch (error){
        console.log(error)
        return error;
    }
}
