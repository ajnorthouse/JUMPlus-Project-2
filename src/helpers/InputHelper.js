export function hasEmptyInputs(inputs, setResult){
  for (var key in inputs) {
    if (String(inputs[key]).trim() === "") {
      setResult(<p className="is-error">The {key} field can't be empty!</p>);
      return true;
    }
  }
  return false;
}

export function passwordMatchesRequirements(password) {
	let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
	return (password.match(regex) === null) ?
	  false:
	  true;
}

// ====================================================================================

export function cleanLogin(inputs) {
  inputs["User Id"] = cleanUsername(inputs["User Id"]);
  inputs["Password"] = cleanPassword(inputs["Password"]);
  return inputs;
}

export function cleanCreate(inputs) {
  inputs["User Id"] = cleanUsername(inputs["User Id"]);
  inputs["First Password"] = cleanPassword(inputs["First Password"]);
  inputs["Second Password"] = cleanPassword(inputs["Second Password"]);
  inputs["Name"] = cleanName(inputs["Name"]);
  inputs["Contact Number"] = cleanContactNumber(inputs["Contact Number"]);
  inputs["Starting Deposit"] = cleanMoney(inputs["Starting Deposit"]);
  return inputs;
}

export function cleanDeposit(inputs) {
  inputs["Deposit Amount"] = cleanMoney(inputs["Deposit Amount"]);
  return inputs;
}

export function cleanWithdrawl(inputs) {
  inputs["Withdrawl Amount"] = cleanMoney(inputs["Withdrawl Amount"]);
  return inputs;
}

export function cleanTransfer(inputs) {
  inputs["Transfer Recepient"] = cleanUsername(inputs["Transfer Recepient"]);
	inputs["Transfer Amount"] = cleanMoney(inputs["Transfer Amount"]);
  return inputs;
}

// ====================================================================================

function cleanUsername(username) {
  username = username.trim().toLowerCase();
  return username;
}

function cleanPassword(password) {
  password = password.trim();
  return password;
}

function cleanContactNumber(contactNumber) {
  contactNumber = contactNumber.trim();

  //regex
  // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
  
  return contactNumber;
}

function cleanName(name) {
  name = name.trim();
  
  return name;
}

function cleanMoney(money) {
  money = String(money).trim();
  
  return Number(money);
}