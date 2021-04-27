import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../helpers/UsersHelper";
import { withdrawMoney } from "../../helpers/BalanceHelper";
import { cleanWithdrawl, hasEmptyInputs } from "../../helpers/InputHelper";

export default function Withdraw(props) {
  //State Constants
  const [withdrawl, setWithdrawl] = useState("");
  const [result, setResult] = useState(<div></div>);


  //form submit event
  const handleSubmit = (event) => {
    //immediately stops default behavior
    event.preventDefault();

    //collects and cleans inputs
    let inputs = cleanWithdrawl({"Withdrawl Amount":withdrawl});
        
    //checks for empty inputs, then runs logic
    if (!hasEmptyInputs(inputs, setResult)) {
      withdrawMoney(inputs, setResult, clearInputs, props.login, props.setLogin, props.users, props.setUsers);
    }
  }

  //clears the input fields on success
  const clearInputs = ()=> {
    setWithdrawl("");
  }

  //Checks if a user is logged in before rendering
  return (!isLoggedIn(props.login)) ?
    <Redirect to="/welcome"/> : 

  //normal render
    <div className="withdraw">
      <h1>Withdrawl Page</h1>
      <form>
        <label htmlFor="withdrawl-input">Withdrawl Amount:</label>
		<div className="currency-input">
			<input type="number" id="withdrawl-input" name="withdrawl-input" 
				placeholder="0.01" title="Dollar.Cent amount" min=".01" step=".01"
				value={withdrawl} onChange={event => setWithdrawl(Number(event.target.value))}></input>
		</div>
        
        <br/>
        
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {result}
      <div className="return-link"><Link to="/home/">Home</Link></div>
    </div>
  ;
}