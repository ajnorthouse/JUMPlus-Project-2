import { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

export default function Login(props) {
    //State constants
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(<></>);
    const [redirect, setRedirect] = useState(<></>);

    //form submit event
    const handleSubmit = (event) => {
      //immediately stops default behavior
      event.preventDefault();

      //checks if the username exists
      if (props.users.has(userId)) {

        //stores temp value
        let tempUser = props.users.get(userId);

        //checks for password match
        if (tempUser.password === password) {
          //lifts up login state as the found user
          props.setLogin(tempUser);

          //redirects to home page
          setRedirect(<Redirect to="/home/"/>);
        } else {
          setError(<p className="is-error">Password doesn't match!</p>);
        }
      } else {
        setError(<p className="is-error">Username not found!</p>);
      }
    }

  return (
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
      {error}
      {redirect}
      <Link to="/welcome/">Go Back</Link>
    </div>
  );
}