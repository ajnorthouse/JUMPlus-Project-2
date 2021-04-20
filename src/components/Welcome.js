import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../helpers/UsersHelper";

export default function Welcome(props) {
  //Checks if a user is logged in before rendering
  return (isLoggedIn(props.login)) ?
    <Redirect to="/home"/> : 

	//normal render
    <div className="welcome">
      <h1>Welcome Page</h1>
      <Link to="/welcome/login">Login</Link>
      <br/>
      <Link to="/welcome/createAccount">Create New Account</Link>
    </div>
  ;
}