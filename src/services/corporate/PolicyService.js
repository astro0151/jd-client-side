
import axios from "axios";

//  API variable
const Policy_GET_API ='http://localhost:8080/api/jd/vendors/insurances/policies/get';
const Policy_GET_API_BY_ID='http://localhost:8080http://localhost:8080/api/jd/Policys/insurances/policies/get/get_by_id';
const Policy_POST_API ='http://localhost:8080http://localhost:8080/api/jd/Policys/insurances/policies/get/add';


class PolicyService {
    getPolicy(){
        return axios.get(Policy_GET_API)
    }
    getPolicyById(){
        return axios.get(Policy_GET_API_BY_ID)
    }
    addPolicy(){
        // return axios.post(Policy_POST_API,policyObj);
    }
    

}
export default new PolicyService;