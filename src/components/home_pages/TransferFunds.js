import { useState } from "react";
import { Link } from "react-router-dom";

export default function TransferFunds(props) {
  //State constaEnts
  const [transfer, setTransfer] = useState(0.00);
  const [recepient, setRecepient] = useState("");
  const [error, setError] = useState(<></>);
  const [redirect, setRedirect] = useState(<></>);


  // TODO: Check for logged-in user
  // TODO: Update Log


  //form submit event
  // TODO: Check for potentially negative balances
  // TODO: Check if other user exists
  const handleSubmit = (event) => {
    //immediately stops default behavior
    event.preventDefault();

    //Math.round((num + Number.EPSILON) * 100) / 100

    //Removes the money from the user account
    props.login.balance -= transfer;
    props.users.set(props.login.username, props.login);

    //Adds the money to the recepient account
    let recepientAccount = props.users.get(recepient);
    recepientAccount.balance += transfer;
    props.users.set(recepientAccount.username, recepientAccount);

    //updates the users map as well
    props.setLogin(props.login);
    props.setUsers(props.users);
    setError(<p>{props.login.balance}</p>);
    setRedirect(<p>Success! :D</p>);
  }

  return (
    <div className="transfer-funds">
      <h1>Transfer Funds</h1>
      <form>
        <label htmlFor="transfer-input">User Id:</label>
        <input type="number" id="transfer-input" name="transfer-input"
          value={transfer} onChange={event => setTransfer(Number(event.target.value))}></input>
        
        <br/>

        <label htmlFor="recepient-input">User Id:</label>
        <input type="text" id="recepient-input" name="recepient-input"
          value={recepient} onChange={event => setRecepient(event.target.value)}></input>
        
        <br/>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {error}
      {redirect}
      <Link to="/home/">Home</Link>
    </div>
  );
}