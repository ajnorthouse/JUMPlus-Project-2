import { Link } from "react-router-dom";

export default function RecentTransactions(props) {


  // TODO: Check for logged-in user


	return (
		<div className="recent_transactions">
			<h1>Recent Transactions Page</h1>

      <ul>
        <li>
          {props.login.log[0]}
        </li>
        <li>
          {props.login.log[1]}
        </li>
        <li>
          {props.login.log[2]}
        </li>
        <li>
          {props.login.log[3]}
        </li>
        <li>
          {props.login.log[4]}
        </li>
      </ul>
			
      <Link to="/home/">Home</Link>
		</div>
	);
}