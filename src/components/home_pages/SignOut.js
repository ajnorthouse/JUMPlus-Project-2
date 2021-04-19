import { Redirect } from "react-router";

export default function SignOut() {
	return (
		<div className="sign-out">
			<p>Sign Out Page</p>
			<Redirect to="/welcome"/>
		</div>
	);
}