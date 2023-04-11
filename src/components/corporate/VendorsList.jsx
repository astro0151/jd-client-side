
import React, { useEffect, useState } from "react";
import VendorService from "../../services/corporate/VendorService";
import * as XLSX  from "xlsx";
import DasboardMain from "./DasboardMain";
 function VendorsList() {
  const [vendors, setVendors] = useState([]);

 
  const handleExport =()=>{
    // console.log(vendors);
    var wb = XLSX.utils.book_new(), 
    ws = XLSX.utils.json_to_sheet(vendors);
    XLSX.utils.book_append_sheet(wb,ws,"Mysheet1");
    XLSX.writeFile(wb, "MyExcel.xlsx");
  }
// var btn =document.getElementById("vend-down");
// btn.addEventListener('click',handleExport);
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
    <div className='container'>
        <h5>Vendors</h5> <button onClick={handleExport}>Download data</button>
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
  )
}
export default VendorsList;