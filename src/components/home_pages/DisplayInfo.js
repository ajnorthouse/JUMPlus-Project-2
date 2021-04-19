import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../helpers/CheckLogin";

export default function DisplayInfo(props) {

  //Checks if a user is logged in before rendering
  return (!isLoggedIn(props.login)) ?
    <Redirect to="/welcome"/> : 

	//normal render
    <div className="recent_transactions">
      <h1>Recent Transactions Page</h1>

      <ul>
        <li>
          <h2>Username:</h2>
          <p>{props.login.username}</p>
        </li>

        <li>
          <h2>Password:</h2>
          <p>{props.login.password}</p>
        </li>

        <li>
          <h2>Name:</h2>
          <p>{props.login.name}</p>
        </li>

        <li>
          <h2>Contact Number:</h2>
          <p>{props.login.contactNumber}</p>
        </li>

        <li>
          <h2>Current Balance:</h2>
          <p>${props.login.balance.toFixed(2)}</p>
        </li>

        <li>
          <h2>Total Transactions:</h2>
          <p>{props.login.log.length}</p>
        </li>
      </ul>
      
      <Link to="/home/">Home</Link>
    </div>
  ;
}


//(100).toFixed(2)