import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import VendorsDasboard from "./VendorsDasboard";

// import "./styles.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form-container">
         <div className="title">Corporate Log In</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container-1">
          <label>Username: </label>
          <input className="inp-1" type="text" name="uname" required placeholder="enter user name" />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container-2">
          <label>Password: </label>
          <input className="inp-2" type="password" name="pass" required  placeholder="enter password"/>
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Log IN" className="btn-submit" />
        </div>
      </form>
      <div className="reg-link">
        <p>don't have account ?</p>
        <Link className="link-tag"> register here</Link>
      </div>
    </div>
  );

  return (
    
    <div className="app">
        
      <div className="login-form">
       
        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
        {isSubmitted ? <VendorsDasboard /> : renderForm}
      </div>
    </div>
  );
}

export default Login;