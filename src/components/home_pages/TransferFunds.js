import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../helpers/UsersHelper";
import { transferMoney } from "../../helpers/BalanceHelper";
import { cleanTransfer, hasEmptyInputs } from "../../helpers/InputHelper";

export default function TransferFunds(props) {
  //State Constants
  const [transfer, setTransfer] = useState("");
  const [recepient, setRecepient] = useState("");
  const [result, setResult] = useState(<div></div>);


  //form submit event
  const handleSubmit = (event) => {
    //immediately stops default behavior
    event.preventDefault();

    //collects and cleans inputs
    let inputs = cleanTransfer({"Transfer Amount":transfer, "Transfer Recepient":recepient});
        
    //checks for empty inputs, then runs logic
    if (!hasEmptyInputs(inputs, setResult)) {
      transferMoney(inputs, setResult, clearInputs, props.login, props.setLogin, props.users, props.setUsers);
    }
  }

  //clears the input fields on success
  const clearInputs = ()=> {
    setTransfer("");
    setRecepient("");
  }
  
  //Checks if a user is logged in before rendering
  return (!isLoggedIn(props.login)) ?
    <Redirect to="/welcome"/> : 

    //normal render
    <div className="transfer-funds">
      <h1>Transfer Funds</h1>
      <form>
        <label htmlFor="transfer-input">Transfer Amount:</label>
		
		<div className="currency-input">
			<input type="number" id="transfer-input" name="transfer-input"
			placeholder="0.01" title="Dollar.Cent amount" min=".01" step=".01"
			value={transfer} onChange={event => setTransfer(Number(event.target.value))}></input>
        </div>
        <br/>

        <label htmlFor="recepient-input">Transfer Recepient:</label>
        <input type="text" id="recepient-input" name="recepient-input"
              placeholder="jsmith" title="Username of recepient"
          value={recepient} onChange={event => setRecepient(event.target.value)}></input>
        
        <br/>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {result}
      <div className="return-link"><Link to="/home/">Return</Link></div>
    </div>
  ;
}