const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function depositLogUpdate(amount, balance) {
  let message = "Deposited $" + Number(amount).toFixed(2) + ", bringing the Balance to: $" + Number(balance).toFixed(2);
  return [currentDateTime(), message];
}

export function withdrawLogUpdate(amount, balance) {
  let message = "Withdrew $" + Number(amount).toFixed(2) + ", bringing the Balance to: $" + Number(balance).toFixed(2);
  return [currentDateTime(), message];
}

export function transferLogUpdate(role, amount, transferId, balance) {
  let message;

  switch (role) {
    case 'receiver':
      message = "Received $" + Number(amount).toFixed(2) + " from " + transferId + ", bringing the Balance to: $" + Number(balance).toFixed(2);;
      break;
    
    case 'sender':
    default:
      message = "Transfered $" + Number(amount).toFixed(2) + " to " + transferId + ", bringing the Balance to: $" + Number(balance).toFixed(2);
      break;
  }

  return [currentDateTime(), message];
}

export function initialLogUpdate(balance) {
  let message = "Created the Account with an initial balance of: $" + Number(balance).toFixed(2);
  return [currentDateTime(), message];
}

function currentDateTime() {
  var today = new Date();

	var date = 
          //weekday
          day[today.getDay()] + ", " 

          //month
					+ month[today.getMonth()] + " " 

          //day
					+ String(today.getDate()).padStart(2, '0') + " " 

          //year
					+ String(today.getFullYear()) + " - " 

          //hour (24)
					+ String(today.getHours()).padStart(2, '0') + ":" 

          //minute
					+ String(today.getMinutes()).padStart(2, '0') + ":" 

          //second
					+ String(today.getSeconds()).padStart(2, '0') + " " 

          //Timezone
					+ String(today.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2]);

  return date;
}