/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../../../support/pageObjects/homePage';
import myActivity from '../../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import stockInitiation from '../../../../../../../../../../support/pageObjects/StockManagement/stockInitiation';
import stockManagement from '../../../../../../../../../../support/pageObjects/StockManagement/stockManagement';
import approvals from '../../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import "../../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../../support/Utils/StockCommands";


//----------------Object Declaration-----------------------------------------------------------------

const welcomePage = new homePage()
const stockInitiationPage = new stockInitiation()
const stockManagementPage = new stockManagement()
const myActivityPage = new myActivity()
const manageUsersPage = new manageUsers()
const approvalPage = new approvals()
var filenamestock = 'cypress/fixtures/StockManagement.json'
var filename = 'cypress/fixtures/userData/AdminTransaction.json'
var SYSfilename = 'cypress/fixtures/userData/SystemAdminLogin.json'
const o2cBusinessNo = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'

var mobile
const uuid = () => Cypress._.random(1e8)
mobile = "77" + uuid()

var refno
refno = "12" + uuid()

var amount
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()

var amount1
const uuuuid = () => Cypress._.random(1e11)
amount1 = uuuuid()

const uid = () => Cypress._.random(1e2)
const id = uid()
const testname = `testname${id}`
var name
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}



///////////////////////////////////////////////////////////////////////////

Then('Confirm the Success Message for EA and RA', function () {
  approvalPage.getApproveConfirmationMessage().then((para) => {
    let a = para.text()
    let b = a.split(':')
    let c = b[3]
    cy.readFile(filename).then((d) => {
      d.EARATransactionID = c
      cy.writeFile(filename, d)
    })
  })
  approvalPage.getApproveConfirmationMessage().contains('successfully completed')
})

//////////////////////////////////////////////////////////////////////////

// And('Search by Transaction ID and Enquire the Stock', function () {
//   cy.readFile(filename).then((data) => {
//     let ID = data.TransactionID
//     stockInitiationPage.getSearchType().type(ID)
//   })
//   stockInitiationPage.getSearchButton().click()
//   stockInitiationPage.getSuccess().contains('Success')
// })

And('Search by Transaction ID for EA and Enquire the Stock', function () {
  cy.readFile(filename).then((data) => {
    let ID = data.EARATransactionID
    stockInitiationPage.getSearchType().type(ID)
  })
  stockInitiationPage.getSearchButton().click()
  stockInitiationPage.getSuccess().contains('Success')
})

///////////////////////////////////////////////////////////////////////////////////////////