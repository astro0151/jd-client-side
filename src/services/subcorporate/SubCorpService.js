import axios from "axios";

//  API variable
const VENDOR_GET_API ='http://localhost:8080/api/jd/vendors/get';
const VENDOR_GET_API_BY_ID='http://localhost:8080/api/jd/vendors/get_by_id';
const VENDOR_POST_API ='http://localhost:8080/api/jd/vendors/add';
class SubCorpService {
    // get/set methods for 'vendors'
    getVendors(){
        return axios.get(VENDOR_GET_API)
    }
    getVendorsById(){
        return axios.get(VENDOR_GET_API_BY_ID)
    }
    addVendors(){
        // return axios.post(VENDOR_POST_API,SubCorpObj);
    }
}
export default new SubCorpService;