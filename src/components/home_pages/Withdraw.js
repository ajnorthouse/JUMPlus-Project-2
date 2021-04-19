import { useState } from "react";
import { Link } from "react-router-dom";

export default function Withdraw(props) {
  //State constaEnts
  const [withdrawl, setWithdrawl] = useState(0.00);
  const [error, setError] = useState(<></>);
  const [redirect, setRedirect] = useState(<></>);


  // TODO: Check for logged-in user
  // TODO: Update Log


  //form submit event
  // TODO: Check for potentially negative balances
  const handleSubmit = (event) => {
    //immediately stops default behavior
    event.preventDefault();

    //Math.round((num + Number.EPSILON) * 100) / 100

    //Removes the withdrawl from the account
    props.login.balance -= withdrawl;
    props.users.set(props.login.username, props.login);

    //updates the users map as well
    props.setLogin(props.login);
    props.setUsers(props.users);
    setError(<p>{props.login.balance}</p>);
    setRedirect(<p>Success! :D</p>);
  }

	return (
		<div className="withdraw">
			<h1>Withdrawl Page</h1>
      <form>
        <label htmlFor="withdrawl-input">User Id:</label>
        <input type="number" id="withdrawl-input" name="withdrawl-input"
          value={withdrawl} onChange={event => setWithdrawl(Number(event.target.value))}></input>
        
        <br/>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {error}
      {redirect}
			<Link to="/home/">Home</Link>
		</div>
	);
}