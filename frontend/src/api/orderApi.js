import axios from "axios"
const FetchingOrdersUrl = "http://localhost:5000/v1/orders/"



// Get All Orders
export const fetchOrders = async()=>{
    try{
        const res = await axios.get(FetchingOrdersUrl)
        return res
    }catch(error){
        console.log(error)
        return error
    }
}


// Fetch an order for a specific user
export const fetchAnOrder = async(id)=>{
    try{
        const res = await axios.get(FetchingOrdersUrl + id)
        // console.log(res)
        return res
    }catch(error){
        console.log(error)
        return error
    }
}