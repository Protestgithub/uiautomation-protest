/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import adminTransaction from '../../../../../../../../../../support/pageObjects/AdminTransaction/adminTransaction';
import homePage from '../../../../../../../../../../support/pageObjects/homePage';
import myActivity from '../../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import stockInitiation from '../../../../../../../../../../support/pageObjects/StockManagement/stockInitiation';
import approvals from '../../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import "../../../../../../../../../../support/Utils/generic";

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

And('Enter All the Mandatory Details for Churn', function () {
  
  cy.readFile(o2cBusinessNo).then((data) => {
    var O2CMsisdn = data.registeredMobileHeadMerch1
    O2CTransferInitiatePage.getMSISDN().type(O2CMsisdn, { force: true })
  })
  cy.wait(2000)
  cy.waitUntil(() => {
    return cy.iframe().find('td.tabhead').should('be.visible', { force: true })
  })
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
    const stub = cy.stub()
    if (cy.stub($win, 'alert', () => false)
      .as('windowConfirm')) {
    }
    else {
      cy.stub($win.console, 'log').as('consoleLog')
      cy.wrap($body)
        .find('input[name="amount"]').click({ force: true })
        .should(function () {
        //   expect(this.windowConfirm).to.be.calledWith("Channel User Does Not Exist")
        })
    }
  })
  O2CTransferInitiatePage.getTransferAmount().type(transferAmount, { force: true })
  cy.readFile(filenamestock).then((data) => {
    data.Amount = transferAmount
    cy.writeFile(filenamestock, data)
  })
  O2CTransferInitiatePage.getReferenceNumber().type(ReferenceNumber, { force: true })
  cy.readFile(TransactionFleO2C).then((data) => {
    data.referenceNumber = ReferenceNumber
    cy.writeFile(TransactionFleO2C, data)
  })
  O2CTransferInitiatePage.getType().select(this.data15.O2CTransferInitiate.type, { force: true })
  O2CTransferInitiatePage.getNumber().type(number, { force: true })
  O2CTransferInitiatePage.getRemarks().type(getRandomName(), { force: true })
  cy.wait(2000)
  cy.readFile(filenamestock).then((data) => {
    let x = data.Balance
    let y = data.Amount
    const num1 = x * 1
    const num2 = y * 1
    const sum = num1 - num2
    data.CreditedStock = sum
    cy.log(parseFloat(sum))
    cy.writeFile(filenamestock, data)
  })
})

//------------------------------------------------------------------------------------
And('Enter All the Mandatory Details for Allocation for Churn', function () {
  //currency
  
  adminTransactionPage.getCurrency().select(this.data15.currency)
  //mobile number
  cy.readFile(o2cBusinessNo).then((userMob) => {
    var userMobileNum = userMob.registeredMobileHeadMerch1
    adminTransactionPage.getSearchMobileNumber().type(userMobileNum).click()
  })
  cy.wait(2000)
  adminTransactionPage.getAmount().click()
 adminTransactionPage.getWalletType().select(this.data15.wallet, { force: true })
  adminTransactionPage.getAmount().type(amount)
  adminTransactionPage.getReferenceNumber().type(refno + getRandomName())
  adminTransactionPage.getInstumentType().select(this.data15.instument, { force: true })
  adminTransactionPage.getInstumentNumber().type(instumentNo)
  adminTransactionPage.getRemarks().type(getRandomName())
  cy.wait(2000)
})
