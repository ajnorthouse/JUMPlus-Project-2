import { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { isLoggedIn, loginUser } from "../../helpers/UsersHelper";
import { cleanLogin, hasEmptyInputs } from "../../helpers/InputHelper";

export default function Login(props) {
  //State constants
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(<></>);

  //form submit event
  const handleSubmit = (event) => {
    //immediately stops default behavior
    event.preventDefault();

    //collects and cleans inputs
    let inputs = cleanLogin({"User Id":userId, "Password":password});
        
    //checks for empty inputs, then runs logic
    if (!hasEmptyInputs(inputs, setResult)) {
      loginUser(inputs, setResult, props.users, props.setLogin);
    }
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
              placeholder="jsmith" title="username"
          value={userId} onChange={event => setUserId(event.target.value)}></input>
        
        <br/>

        <label htmlFor="password-input">Password:</label>
        <input type="password" id="password-input" name="password-input"
          title="Password with minimum 8 characters, one number, one special character, one uppercase letter, and one lowercase letter."
          placeholder="P@ssw0rd"
          value={password} onChange={event => setPassword(event.target.value)}></input>
        
        <br/>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {result}
      <Link to="/welcome/">Go Back</Link>
    </div>
  ;
}