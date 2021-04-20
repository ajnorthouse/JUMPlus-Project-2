import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { hasEmptyInputs } from "../../helpers/InputHelper";
import { createUser, isLoggedIn } from "../../helpers/UsersHelper";

export default function CreateAccount(props) {
  //State constants
  const [userId, setUserId] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [balance, setBalance] = useState("");
  const [result, setResult] = useState(<></>);

  //form event
  const handleSubmit = (event) => {
    //immediately stops default behavior
    event.preventDefault();

    //calls helper method
    let inputs = {"Name":name,"Contact Number":contactNumber,"User Id":userId,"First Password":password1,"Second Password":password2,"Starting Deposit":balance};
    if (!hasEmptyInputs(inputs, setResult)) {
      createUser(inputs, props.users, props.setUsers, setResult, clearInputs);
    }
}

  //small function to clear all the inputs after successful insertion
  const clearInputs = ()=> {
    setUserId("");
    setPassword1("");
    setPassword2("");
    setName("");
    setContactNumber("");
    setBalance("");
  }

  //Checks if a user is logged in before rendering
  return (isLoggedIn(props.login)) ?
    <Redirect to="/home"/> : 

	//normal render
    <div className="create-account">
      <h1>Create Account</h1>
      <form>
        <label htmlFor="name-input">Name:</label>
        <input type="text" id="name-input" name="name-input" 
          placeholder="John Smith" title="First name followed by Last name"
          value={name} onChange={event => setName(event.target.value)}></input>
        
        <br/><br/>
      
        <label htmlFor="contactNumber-input">Contact Number:</label>
	      <input type="tel" id="contactNumber-input" name="contactNumber-input" 
		      placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
		      title="Phone Number with Area code, dashes between each set of numbers"
		      value={contactNumber} onChange={event => setContactNumber(event.target.value)}></input>
	  
	      <br/><br/>

        <label htmlFor="userId-input">User Id:</label>
        <input type="text" id="userId-input" name="userId-input"
		      placeholder="jsmith" title="username"
          value={userId} onChange={event => setUserId(event.target.value)}></input>
        
        <br/><br/>

        <label htmlFor="password-input1">Password:</label>
        <br/>
        <input type="text" id="password-input1" name="password-input1" 
		      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          placeholder="P@ssw0rd"
          title="Password with minimum 8 characters, one number, one special character, one uppercase letter, and one lowercase letter."
          value={password1} onChange={event => setPassword1(event.target.value)}></input>
        <br/>
        <input type="text" id="password-input2" name="password-input2" 
		      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          placeholder="P@ssw0rd"
          title="Password with minimum 8 characters, one number, one special character, one uppercase letter, and one lowercase letter."
          value={password2} onChange={event => setPassword2(event.target.value)}></input>
        <br/>
        <ul>Must contain:
			    <li>Minimum eight characters</li>
          <li>at least one uppercase letter</li>
          <li>one lowercase letter</li>
          <li>one number, and </li>
          <li>one special character.</li>
        </ul>
        <br/><br/>

        <label htmlFor="balance-input">Starting Deposit:</label> 
        <input type="number" id="balance-input" name="balance-input"
          placeholder="0.01" title="Dollar.Cent amount" min=".01" step=".01"
          value={balance} onChange={event => setBalance(Number(event.target.value))}></input>
      
        <br/><br/>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {result}
      <Link to="/welcome/">Go Back</Link>
    </div>
  ;
}