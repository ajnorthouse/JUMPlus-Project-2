import { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { isLoggedIn, loginUser } from "../../helpers/UsersHelper";

export default function Login(props) {
    //State constants
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState(<></>);

    //form submit event
    const handleSubmit = (event) => {
      //immediately stops default behavior
      event.preventDefault();

      //calls the helper class
      loginUser(userId, password, setResult, props.users, props.setLogin);
    }

  //Checks if a user is logged in before rendering
  return (isLoggedIn(props.login)) ?
    <Redirect to="/home"/> : 

	  //normal render
    <div className="login">
      <h1>Login Page</h1>
      <form>
        <label htmlFor="userId-input">User Id:</label>
        <input type="text" id="userId-input" name="userId-input"
          value={userId} onChange={event => setUserId(event.target.value)}></input>
        
        <br/>

        <label htmlFor="password-input">Password:</label>
        <input type="password" id="password-input" name="password-input"
          value={password} onChange={event => setPassword(event.target.value)}></input>
        
        <br/>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {result}
      <Link to="/welcome/">Go Back</Link>
    </div>
  ;
}