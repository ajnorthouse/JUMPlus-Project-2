class CustomerAccount {
  static idCounter = 0;

  constructor(username, password, name, contactNumber, balance, log) {
    const CUSTOMER_ID = idCounter++;
    this.username = username;
    this.password = password;
    this.name = name;
    this.contactNumber = contactNumber;
    this.balance = balance;
    this.log = log;
  }
}