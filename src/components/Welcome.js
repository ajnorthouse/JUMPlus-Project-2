import { Link } from "react-router-dom";

export default function Welcome() {
	return (
		<div className="welcome">
			<h1>Welcome Page</h1>
			<Link to="/welcome/login">Login</Link>
			<br/>
			<Link to="/welcome/createAccount">Create New Account</Link>
		</div>
	);
}