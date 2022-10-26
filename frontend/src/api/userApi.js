import axios from "axios"

const rootUrl = "http://localhost:5000/v1/";
const registerUrl = rootUrl + "auth/";
const loginUrl = rootUrl + "auth/login";


//Register a user
export const userRegistration = async (formData)=>{
    try {
        const res = await axios.post(registerUrl, formData);
        // console.log(res);
        if(res.status === 200){
            console.log (res.data.message)
            return res.data.message
        }

        return res
    }catch(error){
        console.log(error);
        return error
    }
}



//Login user
export const loginUser = async (formData) =>{

    try {
    const res = await axios.post(
        loginUrl, 
        formData,
        axios.defaults.withCredentials = true //use this for sending cookies
        );

    
    // console.log(res)
    if(res.status === 200){
        localStorage.setItem("accessJWT", res.data.accessJwtToken);
        return res.data;
        }
    
    // if there is an error we will send the whole response.
    // console.log(res)
    return res
    
    }catch(error){
        console.log(error);
        return error
    }
}