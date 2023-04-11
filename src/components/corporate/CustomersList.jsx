import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as XLSX  from "xlsx";
import CustomersService from "../../services/corporate/CustomersService";
import OrdersDetails from "../../services/corporate/OrdersDetails";
export default function CustomersList() {
  const [customers, setCustomers] = useState([]);
  const handleExport =()=>{
    // console.log(vendors);
    var wb = XLSX.utils.book_new(), 
    ws = XLSX.utils.json_to_sheet(customers);
    XLSX.utils.book_append_sheet(wb,ws,"Mysheet1");
    XLSX.writeFile(wb, "MyExcel.xlsx");
  }
// var btn =document.getElementById("cus-down");
// btn.addEventListener('click',handleExport());
  useEffect(() => {
    CustomersService.getCustomers()
      .then((response) => {
        setCustomers(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  const [orders, setOrders] = useState([]);
  // const [customers, setCustomers] = useState([]);
  useEffect(() => {
      CustomersService.getCustomers()
        .then((response) => {
          setCustomers(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },[]);
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
    let custArr=[];
    let totalCust=[]
    let custCount=[]
    orders.map((x)=>custArr.push(x.customer_id))
    customers.map((x)=>totalCust.push(x.id))
    console.log(custArr);
    console.log(totalCust);

   for(let i=0; i<totalCust.length; i++){
      custCount.push(0);
   }
    for(let i=0; i<totalCust.length; i++){
      for(let j=0; j<custArr.length; j++){
          if(totalCust[i]==custArr[j]){
              custCount[i]++
          }
      }
    }
console.log(custCount);


  return (
    <div> 
      <h5>Customers</h5><button onClick={handleExport}>Download Data</button>
      <div className="customers">
      
      
   <div className="customer-table">
   <table className="table table-bordered table-striped ">
      <thead className="table-head">
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customers.id}>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            {/* implement logic to find no. of policies customer holds */}
       
          </tr>
        ))}
         
      </tbody>
    </table>
   </div>
    
    <div className="extra-tab">


<table className="table table-bordered table-striped ">
      <thead className="table-head">
        <th>No. of Policies</th>
        <th>---Take Action</th>
        
      </thead>
      <tbody>
        {custCount.map((customer) => (
          <tr >
            <td>{customer} </td>
            <td> 
            <Link className='lin'to={"/send-email"} >Send Policy Offer</Link>
            </td>
            {/* implement logic to find no. of policies customer holds */}
       
          </tr>
        ))}
         
      </tbody>
    </table>

    </div>
  </div> 
</div>
  )
}
