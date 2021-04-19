import logo from './logo.svg';
import './App.css';


import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

function DollarsBankApp() {
  const [users, setUsers] = useState([]);
  const [login, setLogin] = useState([]);
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route path="/welcome/login" component={Login}><Login users={users} setLogin={setLogin}/></Route>
            <Route path="/welcome/createAccount" component={CreateAccount}><CreateAccount users={users} setUsers={setUsers}/></Route>
            <Route path="/welcome/" component={Welcome}><Welcome/></Route>
            
            
            <Route path="/home/signout" component={SignOut}><SignOut/></Route>
            <Route path="/home/transferFunds" component={TransferFunds}><TransferFunds/></Route>
            <Route path="/home/recentTransactions" component={RecentTransactions}><RecentTransactions/></Route>
            <Route path="/home/displayInfo" component={DisplayInfo}><DisplayInfo/></Route>
            <Route path="/home/deposit" component={Deposit}><Deposit/></Route>
            <Route path="/home/withdraw" component={Withdraw}><Withdraw/></Route>
            <Route path="/home/" component={Home}><Home/></Route>

            
            <Route path="/" component={SignOut}><SignOut/></Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default DollarsBankApp;
