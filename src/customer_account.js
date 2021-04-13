export default class CustomerAccount {
  static idCounter = 0;

  constructor(username, password, name, contactNumber, balance, log) {
    this.CUSTOMER_ID = ++CustomerAccount.idCounter;
    this.username = username;
    this.password = password;
    this.name = name;
    this.contactNumber = contactNumber;
    this.balance = balance;
    this.log = log;
  }
}