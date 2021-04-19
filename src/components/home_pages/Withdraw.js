import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../helpers/CheckLogin";

export default function Withdraw(props) {
  //State Constants
  const [withdrawl, setWithdrawl] = useState(0.00);
  const [result, setResult] = useState(<></>);
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
    setResult(<p className="is-success">Funds successfully withdrawn!</p>);
  }

  //Checks if a user is logged in before rendering
  return (!isLoggedIn(props.login)) ?
    <Redirect to="/welcome"/> : 

	//normal render
    <div className="withdraw">
      <h1>Withdrawl Page</h1>
      <form>
        <label htmlFor="withdrawl-input">User Id:</label>
        <input type="number" id="withdrawl-input" name="withdrawl-input"
          value={withdrawl} onChange={event => setWithdrawl(Number(event.target.value))}></input>
        
        <br/>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {result}
      <Link to="/home/">Home</Link>
    </div>
  ;
}