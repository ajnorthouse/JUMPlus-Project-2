import { Redirect } from "react-router";
import { passwordMatchesRequirements } from "./InputHelper";
import { initialLogUpdate } from "./UpdateLog";

export function createUser(inputs, users, setUsers, setResult, clearInputs) {
  //variables to retrofit old logic
  let userId = inputs["User Id"];
  let password1 = inputs["First Password"];
  let password2 = inputs["Second Password"];
  let name = inputs["Name"];
  let contactNumber = inputs["Contact Number"];
  let balance = inputs["Starting Deposit"];

  if (!usernameExists(users, userId)) {
  
    //checks that passwords match
    if (password1 === password2) {

      //checks if passwords match required regex
      if (passwordMatchesRequirements(password1)) {

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
        setResult(<div className="is-success"><p>Successfully created user '{userId}'!</p></div>);
        
        //clears the fields
        clearInputs();

  // errors
      } else {
        setResult(<div className="is-error"><p>Your password doesn't meet the requirements!</p></div>);
      }

    } else {
      setResult(<div className="is-error"><p>Your passwords don't match!</p></div>);
    }
    
  } else {
    setResult(<div className="is-error"><p>That username already exists!</p></div>);
  }
}

export function loginUser(inputs, setResult, users, setLogin) {
  //variables to retrofit old logic
  let userId = inputs["User Id"];
  let password = inputs["Password"];
  
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

  // errors
    } else {
      setResult(<div className="is-error"><p>Password doesn't match!</p></div>);
    }

  } else {
    setResult(<div className="is-error"><p>Username not found!</p></div>);
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