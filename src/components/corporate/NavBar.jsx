import React from 'react'
import logo from '../../images/logo.png'
function NavBar() {
  return (
    <div>
        <div className="nav">
            <div className="logo">
                <img src={logo} alt="no image" className='logo' />
            </div>
            <div className="text-logo">
              <p className="text">
                JD Bank Private Limited
              </p>
            </div>
            <div className="list">
            <ul>
              
                <li>Home</li>
                <li>Contact</li>
                <li>Services</li>
                <li>About</li>
                <li>Blogs</li>
            </ul>
            </div>
            <div className="btn">
              <button className='btn-1'>Log IN</button>
              <button className="btn-2">Register</button>
            </div>
           
        </div>
    </div>
  )
}
export default NavBar;