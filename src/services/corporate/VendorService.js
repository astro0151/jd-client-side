import axios from "axios";

//  API variable
const VENDOR_GET_API ='http://localhost:8080/api/jd/vendors/get';
const VENDOR_GET_API_BY_ID='http://localhost:8080/api/jd/vendors/get/vendor_id';
const VENDOR_POST_API ='http://localhost:8080/api/jd/vendors/add';
const polget='http://localhost:8080/api/jd/vendors/LicIns/get';

class VendorService {
    getVendors(){
        return axios.get(VENDOR_GET_API)
    }
    getVendorsById(){
        return axios.get(VENDOR_GET_API_BY_ID)
    }
    addVendors(){
        // return axios.post(VENDOR_POST_API,vendorObj);
    }
    getPolicyDetails(){
        return axios.get(polget)
    }

}
export default new VendorService;