import { useEffect } from "react";
import { Redirect } from "react-router";

export default function SignOut(props) {

  //Sets login to [null] on the redirect
	useEffect(() => {
    //hook equivalent of "componentWillUnmount "
    return () => {
      if (props.login.length < 2) {
        props.setLogin([null]);
      }
    }
  }, [props]);

	return (
		<div className="sign-out">
			<h1>Sign Out Page</h1>
			<Redirect to="/welcome"/>
		</div>
	);
}