import React, { useEffect, useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import VendorService from "../../services/corporate/VendorService";
import OrdersDetails from "../../services/corporate/OrdersDetails";
import CustomersService from "../../services/corporate/CustomersService";
import PolicyService from "../../services/corporate/PolicyService";
import InsuranceService from "../../services/corporate/InsuranceService";

function Dasboard1() {
  const [vendors, setVendors] = useState([]);
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [policies, setPolicies] = useState([]);
  const [insurances, setInsurances] = useState([]);

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

  // const displayContent = () => {

  //      var btn = document.getElementById("toggle-btn-vendor");

  //           var table= document.getElementById("table-vendors")
  //                  if(btn.innerText==="Show"){
  //                     table.style.display="contents";
  //                         btn.innerHTML="Hide"
  //                       }
  //                        else if(btn.innerText==="Hide") {
  //                                        btn.innerHTML="Show"
  //                                   table.style.display="none";

  //                                 }
  //           // setStyle("side-bar2");
  //  };
  return (
    <div className="cont">
 
      <div className="tables">
        <div className="top-table">
          <div className="vendors">
            <div className="toggle">
              <h5 className="vendh5">Vendors</h5>
              {/* <p id="toggle-btn">OFF</p> */}
              {/* <button id="toggle-btn-vendor" onClick={displayContent}>Show </button> */}
            </div>
            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="download-table-xls-button btn btn-success mb-3"
              table="table-to-xls"
              filename="tablexls"
              sheet="tablexls"
              buttonText="Export Data to Excel Sheet"
            />

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
          <div className="insurance">
            <h5>Insurances</h5>
            <table className="table table-bordered table-striped">
              <thead className="table-head">
                <th>Ins Id</th>

                <th>Vendor Name</th>
                <th>Vendor ID</th>
              </thead>
              <tbody>
                {insurances.map((insurance) => (
                  <tr key={insurances.id}>
                    <td>{insurance.ins_id}</td>
                    <td>{insurance.ins_name}</td>
                    <td>{insurance.vendor_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="orders">
            <h5>Orders</h5>

            <table className="table table-bordered table-striped">
              <thead className="table-head">
                <th>Order Id</th>
                <th>Policy ID</th>
                <th>Customer ID</th>
                <th>Order Date</th>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={orders.id}>
                    <td id="td-1">{order.order_id}</td>
                    <td id="td-1">{order.policy_id}</td>
                    <td id="td-1">{order.customer_id}</td>
                    <td>25/4/2009</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="down-table">
          <div className="policy">
            <h5>Insurance Policies</h5>
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
                    <td>{policy.policy_id}</td>
                    <td>{policy.policy_name}</td>
                    <td>{policy.tenure}</td>
                    <td>{policy.premium}</td>
                    <td>{policy.ins_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="customers">
            <h5>Customers</h5>
            <table className="table table-bordered table-striped">
              <thead className="table-head">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>No of Policy Holds</th>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customers.id}>
                    <td>{customer.customer_id}</td>
                    <td>{customer.customer_name}</td>
                    <td>{customer.customer_email}</td>
                    <td>{customer.customer_address}</td>
                    <td>5</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dasboard1;
