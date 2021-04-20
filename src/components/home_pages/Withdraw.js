import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../helpers/UsersHelper";
import { withdrawMoney } from "../../helpers/BalanceHelper";

export default function Withdraw(props) {
  //State Constants
  const [withdrawl, setWithdrawl] = useState(0.00);
  const [result, setResult] = useState(<></>);


  //form submit event
  const handleSubmit = (event) => {
    //immediately stops default behavior
    event.preventDefault();

    //Calls helper function
    withdrawMoney(withdrawl, setResult, clearInputs, props.login, props.setLogin, props.users, props.setUsers);
  }

  //clears the input fields on success
  const clearInputs = ()=> {
    setWithdrawl(0.00);
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