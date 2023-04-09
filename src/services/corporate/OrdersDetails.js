import axios from "axios";

//  API variable
const ORDERS_GET_API ='http://localhost:8080/api/jd/vendors/insurances/policies/pol_orders/get';
const ORDERS_GET_API_BY_ID='http://localhost:8080/api/jd/vendors/insurances/policies/pol_orders/get/1';
const ORDERS_POST_API ='http://localhost:8080/api/jd/vendors/insurances/policies/pol_orders/add';


class OrdersDetails {
    getOrders(){
        return axios.get(ORDERS_GET_API )
    }
    getVendorsById(){
        return axios.get(ORDERS_GET_API_BY_ID)
    }
    addOrders(){
        // return axios.post(ORDERS_POST_API,ordersObj);
    }
 

}
export default new OrdersDetails;