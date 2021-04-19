import { Link } from "react-router-dom";

export default function RecentTransactions(props) {


  // TODO: Check for logged-in user


	return (
		<div className="recent_transactions">
			<h1>Recent Transactions Page</h1>

      <ul>
        <li>
          <p>{props.login.log[0]}</p>
        </li>
        <li>
          <p>{props.login.log[1]}</p>
        </li>
        <li>
          <p>{props.login.log[2]}</p>
        </li>
        <li>
          <p>{props.login.log[3]}</p>
        </li>
        <li>
          <p>{props.login.log[4]}</p>
        </li>
      </ul>
			
      <Link to="/home/">Home</Link>
		</div>
	);
}