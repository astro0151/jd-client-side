import React, { useEffect, useState } from "react";
import * as XLSX  from "xlsx";
import OrdersDetails from "../../services/corporate/OrdersDetails";
export default function OrdersList() {
  const [orders, setOrders] = useState([]);
  const handleExport =()=>{
    // console.log(vendors);
    var wb = XLSX.utils.book_new(), 
    ws = XLSX.utils.json_to_sheet(orders);
    XLSX.utils.book_append_sheet(wb,ws,"Mysheet1");
    XLSX.writeFile(wb, "MyExcel.xlsx");
  }
// var btn =document.getElementById("ord-down");
// btn.addEventListener('click',handleExport());

  useEffect(() => {
    OrdersDetails.getOrders()
      .then((response) => {
        setOrders(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>   <div className="orders">
    <h5>Orders</h5> <button onClick={handleExport}>Download Data</button>

    <table className="table table-bordered table-striped">
      <thead className="table-head">
        <th>Order Id</th>
        <th>Policy ID</th>
        <th>Customer ID</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Status</th>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={orders.id}>
            <td id="td-1">{order.id}</td>
            <td id="td-1">{order.policy_id}</td>
            <td id="td-1">{order.customer_id}</td>
            <td id="td-1">{order.start_date}</td>
            <td id="td-1">{order.end_date}</td>
            <td id="td-1">{order.status}</td>
          </tr>
        ))}
        
      </tbody>
    </table>
  </div></div>
  )
}
