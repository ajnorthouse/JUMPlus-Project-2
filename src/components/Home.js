import { Link } from "react-router-dom";

export default function Home(props) {


	// TODO: Check for logged-in user
  console.log(props.login);


	return (
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
	);
}