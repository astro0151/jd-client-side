import React, { useEffect, useState } from "react";
import * as XLSX  from "xlsx";
import VendorService from "../../services/corporate/VendorService";

 function VendorsDasboard() {
    const [vendors, setVendors] = useState([]);
    const handleExport =()=>{
      // console.log(vendors);
      var wb = XLSX.utils.book_new(), 
      ws = XLSX.utils.json_to_sheet(vendors);
      XLSX.utils.book_append_sheet(wb,ws,"Mysheet1");
      XLSX.writeFile(wb, "MyExcel.xlsx");
    }
    useEffect(() => {
        VendorService.getVendors()
          .then((response) => {
            setVendors(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
  return ( 
    <div> <button onClick={handleExport}>Get Data</button>
    
        <div className="vendors">
            <div className="toggle">
              <h5 className="vendh5">Vendors</h5>
              {/* <p id="toggle-btn">OFF</p> */}
              {/* <button id="toggle-btn-vendor" onClick={displayContent}>Show </button> */}
            </div>
            

            <table
              id="table-vendors table-to-xls"
              className="table table-bordered table-striped"
            >
              <thead className="table-head">
                <th>Vendor Id</th>
                <th>Name</th>
              </thead>
              <tbody>
                {vendors.map((vendor) => (
                  <tr key={vendors.id}>
                    <td>{vendor.vendor_id}</td>
                    <td>{vendor.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
           
          </div>
          
    </div>
  )
}
export default VendorsDasboard;