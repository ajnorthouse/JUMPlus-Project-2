import { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateAccount(props) {
  //State constants
  const [userId, setUserId] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [balance, setBalance] = useState(0.00);
  const [error, setError] = useState(<></>);
  const [redirect, setRedirect] = useState(<></>);

  //form event
  const handleSubmit = (event) => {
    //immediately stops default behavior
    event.preventDefault();

    //checks if the username does NOT exist
    if (!props.users.has(userId)) {
    
      //checks that passwords match
      if (password1 === password2) {

        //inserts entry into the users list
        props.users.set(userId, {
          username:userId,
          password:password1,
          name:name,
          contactNumber:contactNumber,
          balance:balance,
          log:["Dead", "Lol"]
        });

        props.setUsers(props.users);
        console.log(props.users);
        setRedirect(<p className="is-success">Successfully created user!</p>);

      } else {
        setError(<p className="is-error">Your passwords don't match!</p>);
      }
    } else {
    setError(<p className="is-error">That username already exists!</p>);
    }
  }

  return (
    <div className="create-account">
      <h1>Create Account</h1>
      <form>
        <label htmlFor="userId-input">User Id:</label>
        <input type="text" id="userId-input" name="userId-input"
          value={userId} onChange={event => setUserId(event.target.value)}></input>
        
        <br/><br/>

        <label htmlFor="password-input1">Password:</label>
        <input type="text" id="password-input1" name="password-input1"
          value={password1} onChange={event => setPassword1(event.target.value)}></input>
        <br/>
        <input type="text" id="password-input2" name="password-input2"
          value={password2} onChange={event => setPassword2(event.target.value)}></input>
        <br/><br/>
      
        <label htmlFor="name-input">User Id:</label>
        <input type="text" id="name-input" name="name-input"
          value={name} onChange={event => setName(event.target.value)}></input>
        
        <br/><br/>
      
        <label htmlFor="contactNumber-input">Contact Number:</label>
        <input type="text" id="contactNumber-input" name="contactNumber-input"
          value={contactNumber} onChange={event => setContactNumber(event.target.value)}></input>
        
        <br/><br/>
      
        <label htmlFor="balance-input">Starting Deposit/Balance:</label>
        <input type="number" id="balance-input" name="balance-input"
          value={balance} onChange={event => setBalance(event.target.value)}></input>
        
        <br/><br/>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {error}
      {redirect}
      <Link to="/welcome/">Go Back</Link>
    </div>
  );
}