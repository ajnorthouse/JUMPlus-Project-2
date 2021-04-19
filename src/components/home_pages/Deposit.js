import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../helpers/CheckLogin";

export default function Deposit(props) {
  //State constants
  const [deposit, setDeposit] = useState(0.00);
  const [result, setResult] = useState(<></>);
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
    setResult(<p>{props.login.balance}</p>);
  }

  
  //Checks if a user is logged in before rendering
  return (!isLoggedIn(props.login)) ?
    <Redirect to="/welcome"/> : 

	//normal render
    <div className="deposit">
      <h1>Deposit Page</h1>
      <form>
        <label htmlFor="deposit-input">User Id:</label>
        <input type="number" id="deposit-input" name="deposit-input"
          value={deposit} onChange={event => setDeposit(Number(event.target.value))}></input>
        
        <br/>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {result}
      <Link to="/home/">Home</Link>
    </div>
  ;
}