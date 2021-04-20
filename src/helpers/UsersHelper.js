import { Redirect } from "react-router";
import { initialLogUpdate } from "./UpdateLog";

export function createUser(userId, password1, password2, name, contactNumber, balance, users, setUsers, setResult, clearInputs) {

  if (!usernameExists(users, userId)) {
  
    //checks that passwords match
    if (password1 === password2) {

  //inserts entry into the users list
  users.set(userId, {
    username:userId,
    password:password1,
    name:name,
    contactNumber:contactNumber,
    balance:balance,
    log:[initialLogUpdate(balance)]
  });
  
  //updates Users and success message
  setUsers(users);
  setResult(<p className="is-success">Successfully created user '{userId}'!</p>);
  
  //clears the fields
  clearInputs();

    } else {
  setResult(<p className="is-error">Your passwords don't match!</p>);
    }
    
  } else {
    setResult(<p className="is-error">That username already exists!</p>);
  }
}

export function loginUser(userId, password, setResult, users, setLogin) {
  //checks if the username exists
  if (usernameExists(users, userId)) {

    //stores temp value
    let tempUser = users.get(userId);

    //checks for password match
    if (tempUser.password === password) {
      //lifts up login state as the found user
      setLogin(tempUser);

      //redirects to home page
      setResult(<Redirect to="/home/"/>);

    } else {
      setResult(<p className="is-error">Password doesn't match!</p>);
    }

  } else {
    setResult(<p className="is-error">Username not found!</p>);
  }
}

export function isLoggedIn(login) {
  return (login.length < 2) ?
    false: 
    true;
}

function usernameExists(users, userId) {
  return (users.has(userId)) ?
    true:
    false;
}