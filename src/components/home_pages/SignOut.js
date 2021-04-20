import { useEffect } from "react";
import { Redirect } from "react-router";
import { isLoggedIn } from "../../helpers/UsersHelper";

export default function SignOut(props) {

  //Sets login to [null] on the redirect
  useEffect(() => {
    //hook equivalent of "componentWillUnmount "
    return () => {
      if (isLoggedIn(props.login)) {
        props.setLogin([null]);
      }
    }
  }, [props]);
  //Checks if a user is logged in before rendering
  return (
    <div className="sign-out">
      <h1>Sign Out Page</h1>
      <Redirect to="/welcome"/>
    </div>
  );
}