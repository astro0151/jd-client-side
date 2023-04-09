import React from 'react'
import { Link } from 'react-router-dom';
// import '.css/HomeStyle.css'
function HomeAndLogin() {
  return (
    <div className='conatiner'>
      
      <div className='main'>
        <div className='jd-logo'>
          <p className='j'>J </p>
          <p className='d'>d</p>
          <p className='bank'>Bank</p>
        </div>
        <div className='dbd'>
        <p className='corp'>Corporate </p>
        <p className='db'>Portal</p>
        </div>
        <form action="/" className='form'>
          <label htmlFor="empid">Employe Id : </label>
          <input type="text" name="" id="empid"  />
          <label htmlFor="pass">Password :</label>
          <input type="password" name="" id="pass" />
          <input type="button" value="Log IN" id='btn-s'/>
       
          <Link to={"/subcorporate"} className='btn-2'>Sub-Corporate Log IN</Link>

        </form>

      </div>
      
    </div>
  )
}
export default HomeAndLogin;