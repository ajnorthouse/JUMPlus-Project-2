import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { depositMoney } from "../../helpers/BalanceHelper";
import { hasEmptyInputs } from "../../helpers/InputHelper";
import { isLoggedIn } from "../../helpers/UsersHelper";

export default function Deposit(props) {
  //State constants
  const [deposit, setDeposit] = useState("");
  const [result, setResult] = useState(<></>);


  //form submit event
  const handleSubmit = (event) => {
    //immediately stops default behavior
    event.preventDefault();

    //calls helper functions
	let inputs = {"Deposit Amount":deposit};
    if (!hasEmptyInputs(inputs, setResult)) {
		depositMoney(inputs, setResult, clearInputs, props.login, props.setLogin, props.users, props.setUsers);
    }
  }

  //clears the input fields on success
  const clearInputs = ()=> {
    setDeposit("");
  }
  
  //Checks if a user is logged in before rendering
  return (!isLoggedIn(props.login)) ?
    <Redirect to="/welcome"/> : 

    //normal render
    <div className="deposit">
      <h1>Deposit Page</h1>
      <form>
        <label htmlFor="deposit-input">Deposit Amount:</label>
        <input type="number" id="deposit-input" name="deposit-input"
		      placeholder="0.01" title="Dollar.Cent amount" min=".01" step=".01"
          value={deposit} onChange={event => setDeposit(Number(event.target.value))}></input>
        
        <br/>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {result}
      <Link to="/home/">Home</Link>
    </div>
  ;
}