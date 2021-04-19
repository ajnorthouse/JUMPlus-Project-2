import { Link } from "react-router-dom";

export default function Welcome() {
	return (
		<div className="welcome">
			<p>Welcome Page</p>
			<Link to="/welcome/login">Login</Link>
			<br/>
			<Link to="/welcome/createAccount">Create New Account</Link>
		</div>
	);
}