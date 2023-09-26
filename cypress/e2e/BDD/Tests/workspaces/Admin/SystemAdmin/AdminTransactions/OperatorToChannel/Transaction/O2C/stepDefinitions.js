/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Before, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import "../../../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../../../support/Utils/generic";
import homePage from '../../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../../support/pageObjects/loginPage';
import O2CTransferInitiate from '../../../../../../../../../../support/pageObjects/OperatorToChannel/O2CTransferInitiate';
import stockInitiation from '../../../../../../../../../../support/pageObjects/StockManagement/stockInitiation';
import Approval from '../../../../../../../../../../support/pageObjects/TransferRules/Approval';
import manageUsers from '../../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
//----------------Object Declaration-----------------------------------------------------------------

const manageUsersPage = new manageUsers()
const stockInitiationPage = new stockInitiation()
const pageLogin = new loginPage()
const welcomePage = new homePage()
const O2CTransferInitiatePage = new O2CTransferInitiate()
const transferruleapprovalpage = new Approval()
const TransferRuleApproval = new Approval()
const uuid = () => Cypress._.random(1e6)
const ud = () => Cypress._.random(1e3)
const uuuid = () => Cypress._.random(1e3)
const uuid1 = () => Cypress._.random(1e8)
amount = uuuid()
mobile = "77" + uuid1()
var amount, mobile, name
var filenamestock = 'cypress/fixtures/StockManagement.json'
var TransferAmount = uuid()
var transferAmount = ud()
var ReferenceNumber = uuid()
var number = uuid()
var name, O2CMsisdn
var TransactionFleO2C = "cypress/fixtures/userData/TransactionFile.json"
var filename = "cypress/fixtures/userData/O2CBulkData.json"
var BBAFile = "cypress/fixtures/userData/BusinessUsersDataO2C.json"
var O2CFile = "cypress/fixtures/userData/O2Cdata.json"

//-------------------------------------------------------------------------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
//----------------BDD Hooks-----------------------------------------------------------------

And('Enter All the Mandatory Details', function () {
  
  cy.readFile(BBAFile).then((data) => {
    var O2CMsisdn = data.registeredMobileO2C
    O2CTransferInitiatePage.getMSISDN().type(O2CMsisdn, { force: true })
    data.O2CMsisdn1 = O2CMsisdn
    cy.writeFile(O2CFile, data)
  })
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
          expect(this.windowConfirm).to.be.calledWith("Channel User Does Not Exist")
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

//------------------------------------------------------------

And('enter user mobile number and search', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  var O2CFile = "cypress/fixtures/userData/O2Cdata.json"
  cy.readFile(O2CFile).then((data) => {
    var O2CMsisdn = data.O2CMsisdn1
    manageUsersPage.getSearchUser().type(O2CMsisdn, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})


And('click wallet Payment history.', function () {
  manageUsersPage.getWalletHistory().contains("Wallet Payment History").click({ force: true })
})
And('Enter TransactionID and check', function () {
  cy.O2CTransactionReadData()
})

And('Enter All the Mandatory Details1', function () {
  
  cy.readFile(BBAFile).then((data) => {
    O2CMsisdn = data.registeredMobileO2C
    O2CTransferInitiatePage.getMSISDN().type(O2CMsisdn, { force: true })
    data.O2CMsisdn1 = O2CMsisdn
    cy.writeFile(O2CFile, data)
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
          expect(this.windowConfirm).to.be.calledWith("Channel User Does Not Exist")
        })
    }
  })
  O2CTransferInitiatePage.getTransferAmount().type(number, { force: true })
  O2CTransferInitiatePage.getReferenceNumber().type(ReferenceNumber, { force: true })
  cy.readFile(TransactionFleO2C).then((data) => {
    data.referenceNumber = ReferenceNumber
    cy.writeFile(TransactionFleO2C, data)
  })
  O2CTransferInitiatePage.getType().select(this.data15.O2CTransferInitiate.type, { force: true })
  O2CTransferInitiatePage.getNumber().type(number, { force: true })
  O2CTransferInitiatePage.getRemarks().type(getRandomName(), { force: true })
})


Then('Click on submit and Confirm O2C', function () {
  cy.intercept(this.data20.SubmitBu).as('getsubmit')
  O2CTransferInitiatePage.getSubmitButton().click({ force: true })
  cy.wait('@getsubmit', { timeout: 30000 })
  cy.intercept(this.data20.ConfirmB).as('getconfirm')
  O2CTransferInitiatePage.getConfirmButton().click({ force: true })
  cy.wait('@getconfirm', { timeout: 30000 })
  O2CTransferInitiatePage.getSuccessMsg().contains(this.data15.O2CInitiateMsg)
})

When('Navigate to Operator to channel and click on O2C transfer Approval1', function () {
  welcomePage.getOperatorToChannelOption().scrollIntoView()
  welcomePage.getOperatorToChannelOption().click()
  cy.intercept(this.data20.O2CAppr).as('getApproval1')
  welcomePage.getOperatorToChannelApproval1().click()
  cy.wait('@getApproval1', { timeout: 30000 })
  cy.getO2CData()
  cy.intercept(this.data20.submitBtnTRule).as('getsubmittransfer')
  TransferRuleApproval.getsubmitbttnTransferrule().click({ force: true })
  cy.wait('@getsubmittransfer', { timeout: 30000 })
  cy.intercept(this.data20.ApprovalTransf).as('getapprovaltransferrule')
  transferruleapprovalpage.getApprovalTransferrule().click({ force: true })
  cy.wait('@getapprovaltransferrule', { timeout: 30000 })
})

When('Navigate to Operator to channel and click on O2C transfer Approval1 for TransactionID1', function () {
  welcomePage.getOperatorToChannelOption().scrollIntoView()
  welcomePage.getOperatorToChannelOption().click()
  cy.intercept(this.data20.O2ChAppr).as('getApproval1')
  welcomePage.getOperatorToChannelApproval1().click()
  cy.wait('@getApproval1', { timeout: 30000 })
  cy.getO2CData1()
  cy.intercept(this.data20.SubmitBTransfRul).as('getsubmittransfer')
  TransferRuleApproval.getsubmitbttnTransferrule().click({ force: true })
  cy.wait('@getsubmittransfer', { timeout: 30000 })
  cy.intercept(this.data20.ApprovalTransfRul).as('getapprovaltransferrule')
  transferruleapprovalpage.getApprovalTransferrule().click({ force: true })
  cy.wait('@getapprovaltransferrule', { timeout: 30000 })
})

When('Navigate to Operator to channel and click on O2C transfer Approval1 for TransactionID2', function () {
  welcomePage.getOperatorToChannelOption().scrollIntoView()
  welcomePage.getOperatorToChannelOption().click()
  cy.intercept(this.data20.ChannelAppr1).as('getApproval1')
  welcomePage.getOperatorToChannelApproval1().click()
  cy.wait('@getApproval1', { timeout: 30000 })
  cy.getO2CData2()
  cy.intercept(this.data20.submitbtnTransferR).as('getsubmittransfer')
  TransferRuleApproval.getsubmitbttnTransferrule().click({ force: true })
  cy.wait('@getsubmittransfer', { timeout: 30000 })
  cy.intercept(this.data20.ApprovalTransfRul2).as('getapprovaltransferrule')
  transferruleapprovalpage.getApprovalTransferrule().click({ force: true })
  cy.wait('@getapprovaltransferrule', { timeout: 30000 })
})

When('Navigate to Operator to channel and click on O2C transfer Approval1 for TransactionID3', function () {
  welcomePage.getOperatorToChannelOption().scrollIntoView()
  welcomePage.getOperatorToChannelOption().click()
  cy.intercept(this.data20.O2ChAppr1).as('getApproval1')
  welcomePage.getOperatorToChannelApproval1().click()
  cy.wait('@getApproval1', { timeout: 30000 })
  O2CTransferInitiatePage.getRecentDatainO2C()
  cy.intercept(this.data20.SubBtnTransfRul).as('getsubmittransfer')
  TransferRuleApproval.getsubmitbttnTransferrule().click({ force: true })
  cy.wait('@getsubmittransfer', { timeout: 30000 })
  cy.intercept(this.data20.ApprovalTransferrule).as('getapprovaltransferrule')
  transferruleapprovalpage.getApprovalTransferrule().click({ force: true })
  cy.wait('@getapprovaltransferrule', { timeout: 30000 })
})

And('Assert Initiated O2C for Transaction1', function () {
  cy.readFile(TransactionFleO2C).then((data) => {
    const TransactionID = data.TransactionID
    O2CTransferInitiatePage.getSuccessMsg().should('contain', TransactionID)
  })
})

And('Assert Initiated O2C for Transaction2', function () {
  cy.readFile(TransactionFleO2C).then((data) => {
    const TransactionID = data.TransactionID1
    O2CTransferInitiatePage.getSuccessMsg().should('contain', TransactionID)
  })
})

And('Assert Initiated O2C for Transaction3', function () {
  cy.readFile(TransactionFleO2C).then((data) => {
    const TransactionID = data.TransactionID2
    O2CTransferInitiatePage.getSuccessMsg().should('contain', TransactionID)
  })
})

//-------------------------O2C approal2------------------------------------
When('Navigate to Operator to channel and click on O2C transfer Approval2', function () {
  welcomePage.getOperatorToChannelOption().scrollIntoView()
  welcomePage.getOperatorToChannelOption().click()
  cy.intercept(this.data20.O2CApproval2).as('getApproval2', { timeout: 30000 })
  welcomePage.getOperatorToChannelApproval2().click()
  cy.wait('@getApproval2', { timeout: 30000 })
  welcomePage.getOperatorToChannelApproval2().click()
  cy.wait('@getApproval2', { timeout: 30000 })
  O2CTransferInitiatePage.getRecentDatainO2C()
  cy.intercept(this.data20.SubBtnTransfRule).as('getsubmit', { timeout: 30000 })
  TransferRuleApproval.getsubmitbttnTransferrule().click({ force: true })
  cy.wait('@getsubmit', { timeout: 30000 })
  transferruleapprovalpage.getApprovalTransferrule().click({ force: true })
})

Given('Login into Mobiquity Portal as System admin Checker2',function(){
  cy.launchURL(Cypress.env('Adminurl'))
  cy.SysAdminlogin3()
})

Then('Get First Approval Limit Value', function(){
  
  cy.iframe().find('input#firstLimit').clear()
  cy.iframe().find('input#firstLimit').type(this.data13.O2CData.FirstApproval)

})

And('Enter All the Mandatory Details for Approval2', function () {
  
  cy.readFile(BBAFile).then((data) => {
    O2CMsisdn = data.registeredMobileO2C
    O2CTransferInitiatePage.getMSISDN().type(O2CMsisdn, { force: true })
    data.O2CMsisdn1 = O2CMsisdn
    cy.writeFile(O2CFile, data)
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
          expect(this.windowConfirm).to.be.calledWith("Channel User Does Not Exist")
        })
    }
  })
  O2CTransferInitiatePage.getTransferAmount().type(this.data13.O2CData.FirstApproval + 1, { force: true })
  O2CTransferInitiatePage.getReferenceNumber().type(ReferenceNumber, { force: true })
  cy.readFile(TransactionFleO2C).then((data) => {
    data.referenceNumber = ReferenceNumber
    cy.writeFile(TransactionFleO2C, data)
  })
  O2CTransferInitiatePage.getType().select(this.data15.O2CTransferInitiate.type, { force: true })
  O2CTransferInitiatePage.getNumber().type(number, { force: true })
  O2CTransferInitiatePage.getRemarks().type(getRandomName(), { force: true })
})