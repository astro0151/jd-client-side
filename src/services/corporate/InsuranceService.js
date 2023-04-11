
import axios from "axios";

//  API variable
const InsuranceLIC_GET_API ='http://localhost:8080/api/jd/vendors/insurances/get';
const Insurance_GET_API_BY_ID='http://localhost:8080/api/jd/vendors/insurances/get/id';
const Insurance_POST_API ='http://localhost:8080/api/jd/vendors/insurances/add';


class InsuranceService {
    getInsurance(){
        
        return axios.get(InsuranceLIC_GET_API)
    }
    getInsuranceById(){
        return axios.get(Insurance_GET_API_BY_ID)
    }
    addInsurance(){
        // return axios.post(Insurance_POST_API,InsuranceObj);
    }
    

}
export default new InsuranceService;