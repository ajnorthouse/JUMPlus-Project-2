import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="home">
			<p>Home Page</p>
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