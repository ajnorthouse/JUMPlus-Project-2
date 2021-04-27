import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../helpers/UsersHelper";

export default function DisplayInfo(props) {

  //Checks if a user is logged in before rendering
  return (!isLoggedIn(props.login)) ?
    <Redirect to="/welcome"/> : 

	//normal render
    <div className="recent_transactions">
      <h1>Account Details:</h1>
        <div className="username">
          <h2>Username:</h2>
          <p>{props.login.username}</p>
        </div>

        <div className="password">
          <h2>Password:</h2>
          <p>{props.login.password}</p>
        </div>

        <div className="name">
          <h2>Name:</h2>
          <p>{props.login.name}</p>
        </div>

        <div className="contact-number">
          <h2>Contact Number:</h2>
          <p>{props.login.contactNumber}</p>
        </div>

        <div className="balance">
          <h2>Current Balance:</h2>
          <p>${props.login.balance.toFixed(2)}</p>
        </div>

        <div className="total-transactions">
          <h2>Total Transactions:</h2>
          <p>{props.login.log.length - 1}</p>
        </div>
      
      <div className="return-link"><Link to="/home/">Return</Link></div>
    </div>
  ;
}


//(100).toFixed(2)