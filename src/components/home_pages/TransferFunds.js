import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../helpers/CheckLogin";
import { transferLogUpdate } from "../../helpers/UpdateLog";

export default function TransferFunds(props) {
  //State Constants
  const [transfer, setTransfer] = useState(0.00);
  const [recepient, setRecepient] = useState("");
  const [result, setResult] = useState(<></>);


  //form submit event
  // TODO: Check for potentially negative balances
  // TODO: Check if other user exists
  // TODO: Check for duplicate username
  const handleSubmit = (event) => {
    //immediately stops default behavior
    event.preventDefault();

    //Math.round((num + Number.EPSILON) * 100) / 100

    //Removes the money from the user account & updates logE
    props.login.balance -= transfer;
	props.login.log.push(transferLogUpdate('sender', transfer, recepient, props.login.balance));
    props.users.set(props.login.username, props.login);

    //Adds the money to the recepient account & updates their log
    let recepientAccount = props.users.get(recepient);
    recepientAccount.balance += transfer;
	props.login.log.push(transferLogUpdate('receiver', transfer, props.login.username, recepientAccount.balance));
    props.users.set(recepientAccount.username, recepientAccount);

    //finally, updates the users map
    props.setLogin(props.login);
    props.setUsers(props.users);
    setResult(<p className="is-success">Funds successfully transferred!</p>);
  }

  
  //Checks if a user is logged in before rendering
  return (!isLoggedIn(props.login)) ?
    <Redirect to="/welcome"/> : 

	//normal render
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
      {result}
      <Link to="/home/">Home</Link>
    </div>
  ;
}