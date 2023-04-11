import React from 'react'
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import VendorsList from './VendorsList';
import Insurances from './Insurances';
import PoliciesList from './PoliciesList';
import OrdersList from './OrdersList';
import CustomersList from './CustomersList';
import MostPolicySold from './MostPolicySold';
import Emailing from './Emailing';
function DasboardMain() {
  return (
    <div>
        <div className="dasboard">
            <div className="das-nav">
                <Link className='link-1'>Overview</Link>
              
                <Link className='link-2' to={"/most-policy-sold"}>Top Policy Sold</Link>
                <Link className='link-3'>Top Customers</Link>
                <Link className='link-4' >Statistics</Link>
                
            </div>
          <div className="load-area">
          <div className="list-new"> 
            <Link className='ven' to={"/vendors"}>All vendors  </Link>
              
              <Link className='ins' to={"/insurance"}>Insurances</Link>
              <Link className='pol' to={"/policies"}>Policies Details</Link>
              <Link className='ord' to={"/orders"}>Orders Details</Link>
              <Link className='cus' to={"/customers"}>Customers</Link>
            </div>
            <div className='maindiv'>
            <Routes>
          <Route path='/vendors' element={<VendorsList />} />
          <Route path='/insurance' element={<Insurances />} />
          <Route path='/policies' element={<PoliciesList />} />
          <Route path='/orders' element={<OrdersList/>} />
          <Route path='/customers' element={<CustomersList />} />
          <Route path='/most-policy-sold' element={<MostPolicySold />} />
          <Route path='/send-email' element={<Emailing />} />
           </Routes>
            </div>
          </div>
        </div>
    </div>
  )
}
export default DasboardMain;