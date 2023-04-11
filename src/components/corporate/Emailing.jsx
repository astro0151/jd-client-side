import React, { useState } from "react";

function Emailing() {
  
    const [formState, setFormState] = useState({});
    const handleChange=(e)=>{
      // e.preventDefault();
            setFormState({...formState,[e.target.name]: e.target.value})
           
            console.log(e.target.value);
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      const config = {
        
        Username : "operations1.admin.jdbank@yopmail.com",
        Password : "30536AB4F00F0587AE8CC2CC9329C31E2514",
        Host : "smtp.elasticemail.com",
        Port: 2525,
      
        // SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : 'operations1.admin.jdbank@yopmail.com',

        From : 'gulbaharali89@gmail.com',
        // Name : formState.name,
        Subject : formState.subject,
        Body : formState.body
      }
            if(window.Email){
               window.Email.send(config).then((msg)=>alert("sent ! sucessfully.......you can go back_now"))
            }
            console.log(config);
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className="form d-flex align-items-center p-3 flex-column">
        <div className="form-group w-25">
          <label htmlFor="name">Your Name : </label>
          <input
            type="text"
            name="name"
            value={formState.name || ' ' }
            onChange={handleChange}
            className="form-control"
            placeholder="eg : rajesh khanna"
          />
        </div>
        <div className="form-group w-25">
          <label htmlFor="subject">Subject : </label>
          <input
            type="text"
            name="subject"
            value={formState.subject  || ' '}
            onChange={handleChange}
            className="form-control "
            placeholder="eg : your trip details"
          />
        </div>
        
        <div className="form-group w-25">
          <label htmlFor="body">Write Email below : </label>
          <textarea
            className="form-control"
            name="body"
            value={formState.body  || ' ' }
            onChange={handleChange}
            rows="6"
            cols={50}
          ></textarea>
        </div>
        <div className="form-group">
            <input className="btn btn-primary mt-1 email-btn" type="submit" value="Send"  />
        </div>
      </form>
    </div>
  );
}
export default Emailing;
