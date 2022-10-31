
import { fetchAnOrder, fetchOrders } from "../../api/orderApi";
import { fetchingAnOrderSuccess, fetchingOrdersSuccess, orderFail, ordersPending } from "./ordersSlice";




export const FetchingOrders = () => async (dispatch) => {
    dispatch(ordersPending());
    try {
        const result = await fetchOrders();
        dispatch(fetchingOrdersSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(orderFail(error))
        return error;
    }
}




export const FetchingOrdersForASpecificUser = (id) => async (dispatch) => {
    dispatch(ordersPending());
    try {
        const result = await fetchAnOrder(id);
        dispatch(fetchingAnOrderSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(orderFail(error))
        return error;
    }
}