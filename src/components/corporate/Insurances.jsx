import React, { useEffect, useState } from "react";
import * as XLSX  from "xlsx";
import InsuranceService from "../../services/corporate/InsuranceService";
export default function Insurances() {
  const [insurances, setInsurances] = useState([]);
  const handleExport =()=>{
    // console.log(vendors);
    var wb = XLSX.utils.book_new(), 
    ws = XLSX.utils.json_to_sheet(insurances);
    XLSX.utils.book_append_sheet(wb,ws,"Mysheet1");
    XLSX.writeFile(wb, "MyExcel.xlsx");
  }
// var btn =document.getElementById("ins-down");
// btn.addEventListener('click',handleExport());

  useEffect(() => {
    InsuranceService.getInsurance()
      .then((response) => {
        setInsurances(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
       <div className="insurance">
            <h5>Insurances</h5> <button onClick={handleExport}>Download Data</button>
            <table className="table table-bordered table-striped">
              <thead className="table-head">
                <th>Ins Id</th>

                <th>Name</th>
                <th>Vendor ID</th>
              </thead>
              <tbody>
                {insurances.map((insurance) => (
                  <tr key={insurances.id}>
                    <td>{insurance.id}</td>
                    <td>{insurance.name}</td>
                    <td>{insurance.vendor_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
  )
}
