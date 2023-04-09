import axios from "axios";

//  API variable
const CUSTOMER_GET_API ='http://localhost:8080/api/jd/vendors/insurances/policies/pol_orders/customers/get';
const CUSTOMER_GET_API_BY_ID='http://localhost:8080/api/jd/vendors/insurances/policies/pol_orders/customers/1';
const CUSTOMER_POST_API ='http://localhost:8080/api/jd/vendors/insurances/policies/pol_orders/customers/add';

class CustomersService {
    getCustomers(){
        return axios.get(CUSTOMER_GET_API)
    }
    getCustomersById(){
        return axios.get(CUSTOMER_GET_API_BY_ID)
    }
    addCustomers(){
        // return axios.post(CUSTOMER_POST_API,customersObj);
    }
   

}
export default new CustomersService;