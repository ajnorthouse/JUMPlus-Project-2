import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../helpers/UsersHelper";
import { transferMoney } from "../../helpers/BalanceHelper";

export default function TransferFunds(props) {
  //State Constants
  const [transfer, setTransfer] = useState(0.00);
  const [recepient, setRecepient] = useState("");
  const [result, setResult] = useState(<></>);


  //form submit event
  const handleSubmit = (event) => {
    //immediately stops default behavior
    event.preventDefault();

    //calls helper function
    transferMoney(transfer, recepient, setResult, clearInputs, props.login, props.setLogin, props.users, props.setUsers);
  }

  //clears the input fields on success
  const clearInputs = ()=> {
    setTransfer(0.00);
    setRecepient(0.00);
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