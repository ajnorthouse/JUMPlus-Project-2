import { useState } from "react";
import { Link } from "react-router-dom";

export default function Deposit(props) {
  //State constaEnts
  const [deposit, setDeposit] = useState(0.00);
  const [error, setError] = useState(<></>);
  const [redirect, setRedirect] = useState(<></>);


  // TODO: Check for logged-in user
  // TODO: Update Log


  //form submit event
  const handleSubmit = (event) => {
    //immediately stops default behavior
    event.preventDefault();

    //Math.round((num + Number.EPSILON) * 100) / 100

    //Adds the deposit to the account
    props.login.balance += deposit;
    props.users.set(props.login.username, props.login);

    //updates the users map as well
    props.setLogin(props.login);
    props.setUsers(props.users);
    setError(<p>{props.login.balance}</p>);
    setRedirect(<p>Success! :D</p>);
  }

	return (
		<div className="deposit">
			<h1>Deposit Page</h1>
      <form>
        <label htmlFor="deposit-input">User Id:</label>
        <input type="number" id="deposit-input" name="deposit-input"
          value={deposit} onChange={event => setDeposit(Number(event.target.value))}></input>
        
        <br/>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {error}
      {redirect}
			<Link to="/home/">Home</Link>
		</div>
	);
}