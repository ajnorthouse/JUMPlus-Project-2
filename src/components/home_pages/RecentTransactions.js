import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../helpers/UsersHelper";

export default function RecentTransactions(props) {

  //Checks if a user is logged in before rendering
  return (!isLoggedIn(props.login)) ?
    <Redirect to="/welcome"/> : 

	//normal render
    <div className="recent_transactions">
      <h1>Recent Transactions Page</h1>

      <Transactions amount={5} log={props.login.log}/>
      
      <div className="return-link"><Link to="/home/">Return</Link></div>
    </div>
  ;
}

function Transactions(props) {
  //gets last [amount] inserted elements
  let log = props.log.slice(-1 * props.amount);

  //determins how many times to run
  let length = (log.length < props.amount) ?
    log.length:
    props.amount;

  //for loop that goes over the log array backwards
  let counter;
  let listEntries = [];
  for (counter = length -1; counter > -1; counter--) {
    listEntries.push(
      <div className="transaction-entry" key={"Entry " + counter}>
        <h2>{log[counter][0]}</h2>
        <p>{log[counter][1]}</p>
      </div>
    );
  }

  return <>{listEntries}</>;
}