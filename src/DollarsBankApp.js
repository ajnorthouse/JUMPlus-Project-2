//node imports
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//component imports
import './DollarsBankApp.css';
import Login from './components/welcome_pages/Login';
import CreateAccount from './components/welcome_pages/CreateAccount';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Withdraw from './components/home_pages/Withdraw';
import Deposit from './components/home_pages/Deposit';
import DisplayInfo from './components/home_pages/DisplayInfo';
import RecentTransactions from './components/home_pages/RecentTransactions';
import SignOut from './components/home_pages/SignOut';
import TransferFunds from './components/home_pages/TransferFunds';
import { initialLogUpdate } from './helpers/UpdateLog';

function DollarsBankApp() {
  const [users, setUsers] = useState(new Map());
  const [login, setLogin] = useState([null]);

  //how to add map entry:
  if (users.get("FooBar") === undefined) {
	users.set('FooBar', {username:"FooBar", password:"password", name:"John Smith", contactNumber:"5008888888", balance:100.00, log:[initialLogUpdate(100.00)]});
	users.set('BarFoo', {username:"BarFoo", password:"drowssap", name:"Jane Doe", contactNumber:"8885005000", balance:200.00, log:[initialLogUpdate(200.00)]});
  }

  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            {/* Welcome pages */}
            <Route path="/welcome/login"><Login
              login={login} users={users} setLogin={setLogin}/></Route>
            <Route path="/welcome/createAccount"><CreateAccount
              login={login} users={users} setUsers={setUsers}/></Route>
            <Route path="/welcome/"><Welcome
              login={login}/></Route>
            
            {/* Home pages */}
            <Route path="/home/deposit"><Deposit
              login={login} setLogin={setLogin} users={users} setUsers={setUsers}/></Route>
            <Route path="/home/withdraw"><Withdraw
              login={login} setLogin={setLogin} users={users} setUsers={setUsers}/></Route>
            <Route path="/home/transferFunds"><TransferFunds
              login={login} setLogin={setLogin} users={users} setUsers={setUsers}/></Route>
            <Route path="/home/recentTransactions"><RecentTransactions
              login={login}/></Route>
            <Route path="/home/displayInfo"><DisplayInfo
              login={login}/></Route>
            <Route path="/home/signout"><SignOut
              login={login} setLogin={setLogin}/></Route>
            <Route path="/home/"><Home
              login={login}/></Route>

            {/* Empty URL Behavior */}
            <Route path="/"><SignOut
              login={login} setLogin={setLogin}/></Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default DollarsBankApp;
