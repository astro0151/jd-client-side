import { Route, Routes } from 'react-router-dom';

import HomeAndLogin from './components/corporate/HomeAndLogin';
// import './css/HomeStyle.css'
// import './css/dasboard.css'
import './css/NavBar.css'
import './css/Footer.css'
import './css/Login.css'
import './css/DasboardMain.css'
import './css/Email.css'
import Dasboard1 from './components/corporate/Dasboard1';
import Emailing from './components/corporate/Emailing';
import VendorsDasboard from './components/corporate/VendorsDasboard';
import NavBar from './components/corporate/NavBar';
import Footer from './components/corporate/Footer';
import Login from './components/corporate/Login';
import DasboardMain from './components/corporate/DasboardMain';
import VendorsList from './components/corporate/VendorsList';
import MostPolicySold from './components/corporate/MostPolicySold';
import BestCustomers from './components/corporate/BestCustomers';

function App() {
  return (
   <div>
    <NavBar />
       {/* <HomeAndLogin /> */}
       {/* <Dasboard1 /> */}
       {/* <Emailing /> */}
      {/* <VendorsDasboard /> */}
   {/* <Login /> */}
   <DasboardMain />
   {/* <MostPolicySold/> */}
   <BestCustomers />
     <Footer />

     {/* routing */}
    
   </div>
  );
}

export default App;
