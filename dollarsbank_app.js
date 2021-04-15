import consoleLog, { ANSI_FG, printPage } from "./src/application_view.js";
import CustomerAccount from "./src/customer_account.js";

let testAccount1 = new CustomerAccount("anorthouse", "AN165984", "Alex Northouse", "3179891888", 1000.00, ['']);
let testAccount2 = new CustomerAccount("foobar", "password", "John Doe", "8885558888", 2000.00, ['']);

printPage("welcome");