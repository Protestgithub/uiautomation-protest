/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import adminTransaction from '../../../../../../../../support/pageObjects/AdminTransaction/adminTransaction';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import myActivity from '../../../../../../../../support/pageObjects/MyActivity/myActivity';
import stockInitiation from '../../../../../../../../support/pageObjects/StockManagement/stockInitiation';
import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import "../../../../../../../../support/Utils/generic";

//----------------Object Declaration-----------------------------------------------------------------

const welcomePage = new homePage()
const manageUsersPage = new manageUsers()
const approvalPage = new approvals()
const stockInitiationPage = new stockInitiation()
const adminTransactionPage = new adminTransaction()
const myActivityPage = new myActivity()

var allocationAmount = 'cypress/fixtures/userData/allocation.json'
var filename = 'cypress/fixtures/userData/AdminTransaction.json'
var SYSfilename = 'cypress/fixtures/userData/SystemAdminLogin.json'
var TransactionFleO2C = "cypress/fixtures/userData/TransactionFile.json"

const uuid = () => Cypress._.random(1e5)
var refno
refno = uuid()
var instumentNo
instumentNo = uuid()

var amount
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()

var amount1
const uuuuid = () => Cypress._.random(1e11)
amount1 = uuuuid()
const uid = () => Cypress._.random(1e2)
const id = uid()
const testname = `testname${id}`

const o2cBusinessNo = 'cypress/fixtures/userData/BusinessUsersData.json'
var filenamestock = 'cypress/fixtures/StockManagement.json'
var TransactionFleO2C = "cypress/fixtures/userData/TransactionFile.json"
var filename = "cypress/fixtures/userData/O2CBulkData.json"
var BBAFile = "cypress/fixtures/userData/BusinessUsersDataO2C.json"
var O2CFile = "cypress/fixtures/userData/O2Cdata.json"

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//-----------------------------------------------------------------------------------------

