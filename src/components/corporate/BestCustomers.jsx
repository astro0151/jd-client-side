import React, { useEffect, useMemo, useState } from "react";
import OrdersDetails from "../../services/corporate/OrdersDetails";
import CustomersService from "../../services/corporate/CustomersService";
function BestCustomers() {
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);
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
    <div></div>
  )
}
export default BestCustomers;