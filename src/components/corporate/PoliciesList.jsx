import React, { useEffect, useState } from "react";
import * as XLSX  from "xlsx";
import PolicyService from "../../services/corporate/PolicyService";
function PoliciesList() {
  const [policies, setPolicies] = useState([]);
  const handleExport =()=>{
    // console.log(vendors);
    var wb = XLSX.utils.book_new(), 
    ws = XLSX.utils.json_to_sheet(policies);
    XLSX.utils.book_append_sheet(wb,ws,"Mysheet1");
    XLSX.writeFile(wb, "MyExcel.xlsx");
  }
// var btn =document.getElementById("pol-down");
// btn.addEventListener('click',handleExport());

  useEffect(() => {
    PolicyService.getPolicy()
      .then((response) => {
        setPolicies(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="policy">
    <h5>Insurance Policies</h5> <button onClick={handleExport}>Download Data</button>
    <table className="table table-bordered table-striped">
      <thead className="table-head">
        <th>Id</th>
        <th>Name</th>
        <th>Tenure</th>
        <th>Premium</th>
        <th>Ins ID</th>
      </thead>
      <tbody>
        {policies.map((policy) => (
          <tr key={policies.id}>
            <td>{policy.id}</td>
            <td>{policy.policy_name}</td>
            <td>{policy.tenure}</td>
            <td>{policy.premium}</td>
            <td>{policy.insurance_id}</td>
          </tr>
        ))}
           
      </tbody>
    </table>
  </div>
  </div>
  )
}
export default  PoliciesList;