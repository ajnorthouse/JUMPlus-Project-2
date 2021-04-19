import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../helpers/CheckLogin";

export default function Home(props) {

  //Checks if a user is logged in before rendering
  return (!isLoggedIn(props.login)) ?
    <Redirect to="/welcome"/> : 

	//normal render
    <div className="home">
      <h1>Home Page</h1>
      <Link to="/home/deposit">Deposit Funds</Link>
      <br/>
      <Link to="/home/withdraw">Withdraw Funds</Link>
      <br/>
      <Link to="/home/transferFunds">Transfer Funds</Link>
      <br/>
      <Link to="/home/recentTransactions">View Recent Transactions</Link>
      <br/>
      <Link to="/home/displayInfo">View Account Details</Link>
      <br/>
      <Link to="/home/signout">Sign out</Link>
    </div>
  ;
}