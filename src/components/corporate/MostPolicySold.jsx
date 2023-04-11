import React, { useEffect, useMemo, useState } from "react";
import OrdersDetails from "../../services/corporate/OrdersDetails";
import axios from "axios";
function MostPolicySold() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    OrdersDetails.getOrders()
      .then((response) => {
        setOrders(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
 
  let arr = [];
  let custArr=[];

 orders.map((x)=>custArr.push(x.customer_id))
 console.log(custArr);

 

  orders.map((x) => arr.push(x.policy_id));
   
    

   const getData =   ()=>{
    
    let maxcount = 0;
    let n = arr.length;
    let element_having_max_freq;
    for (let i = 0; i < n; i++) {
      let count = 0;
      for (let j = 0; j < n; j++) {
        if (arr[i] == arr[j]) count++;
      }

      if (count > maxcount) {
        maxcount = count;
        element_having_max_freq = arr[i];
      }
    }
    return element_having_max_freq;
   }
   
// console.log(getData());
  
   
 let id=getData(); 

  let strId = JSON.stringify(id);
   
  console.log(strId);
  const ORDERS_GET_API_BY_ID =
    "http://localhost:8080/api/jd/vendors/insurances/policies/get/" + strId;
  // console.log(getMostSoldPolicy_id());
  const [bestPolicy, setBestPolicy] = useState([]);

  useEffect(() => {
   
      axios.get(ORDERS_GET_API_BY_ID)
      .then((response) => {
        setBestPolicy(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
   
  }, []);
  // console.log(bestPolicy.id);
  return (
    <div>
      <h5>Best Policy</h5>
      <table className="table table-bordered table-striped">
        <thead className="table-head">
          <th>Id</th>
          <th>Name</th>
          <th>Tenure</th>
          <th>Premium</th>
          <th>Ins ID</th>
        </thead>
        <tbody>
          {/* {bestPolicy.map((policy) => (
          <tr key={bestPolicy.id}>
            <td>{policy.id}</td>
            <td>{policy.policy_name}</td>  
            <td>{policy.tenure}</td>
            <td>{policy.premium}</td>
            <td>{policy.insurance_id}</td>
          </tr>
        ))} */}
          <tr key={bestPolicy.id}>
            <td>{bestPolicy.id}</td>
            <td>{bestPolicy.policy_name}</td>
            <td>{bestPolicy.tenure}</td>
            <td>{bestPolicy.premium}</td>
            <td>{bestPolicy.insurance_id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default MostPolicySold;
