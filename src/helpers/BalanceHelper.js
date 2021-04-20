import { depositLogUpdate, transferLogUpdate, withdrawLogUpdate } from "./UpdateLog";

export function depositMoney(inputs, setResult, clearInputs, login, setLogin, users, setUsers) {
  //variables to retrofit old logic
  let deposit = Number(roundNumber(inputs["Deposit Amount"]));

  //Adds the deposit to the account & updates log
  login.balance += deposit;
  login.log.push(depositLogUpdate(deposit, login.balance));
  users.set(login.username, login);

  //updates the users map as well
  setLogin(login);
  setUsers(users);

  //success message
  setResult(<p className="is-success">Funds successfully deposited!</p>);
  clearInputs();
}

export function withdrawMoney(inputs, setResult, clearInputs, login, setLogin, users, setUsers) {
  //variables to retrofit old logic
  let withdrawl = roundNumber(Number(inputs["Withdrawl Amount"]));

  if (hasEnoughFunds(withdrawl, login.balance)) {

    //Removes the withdrawl from the account & updates log
    login.balance -= withdrawl;
    login.log.push(withdrawLogUpdate(withdrawl, login.balance));
    users.set(login.username, login);
  
    //updates the users map as well
    setLogin(login);
    setUsers(users);
    setResult(<p className="is-success">Funds successfully withdrawn!</p>);
    clearInputs();

  } else {
    setResult(<p className="is-error">Not enough funds to make a withdrawl!</p>);
  }
}

export function transferMoney(inputs, setResult, clearInputs, login, setLogin, users, setUsers) {
  //variables to retrofit old logic
  let transfer = roundNumber(Number(inputs["Transfer Amount"]));
  let recepient = inputs["Transfer Recepient"];

  if (!isDuplicateUsername(login, recepient)) {

    if (usernameExists(users, recepient)) {

      if (hasEnoughFunds(transfer, login.balance)) {

        //Removes the money from the user account & updates log
        login.balance -= transfer;
        login.log.push(transferLogUpdate('sender', transfer, recepient, login.balance));
        users.set(login.username, login);

        //Adds the money to the recepient account & updates their log
        let recepientAccount = users.get(recepient);
        recepientAccount.balance += transfer;
        recepientAccount.log.push(transferLogUpdate('receiver', transfer, login.username, recepientAccount.balance));
        users.set(recepientAccount.username, recepientAccount);

        //finally, updates the users map
        setLogin(login);
        setUsers(users);
        setResult(<p className="is-success">Funds successfully transferred!</p>);
        clearInputs();

      //all the error codes
      } else {
        setResult(<p className="is-error">Not enough funds to make a transfer!</p>);
      }
    } else {
      setResult(<p className="is-error">Recepient Id not found!</p>);
    }
  } else {
    setResult(<p className="is-error">Can't transfer funds to yourself!</p>);
  }
}

function roundNumber(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

function hasEnoughFunds(withdrawl, balance) {
  return (balance - withdrawl > 0.00) ?
    true:
    false;
}

function isDuplicateUsername(login, userId) {
  return (login.username === userId) ?
    true:
    false;
}

function usernameExists(users, userId) {
  return (users.has(userId)) ?
    true:
    false;
}