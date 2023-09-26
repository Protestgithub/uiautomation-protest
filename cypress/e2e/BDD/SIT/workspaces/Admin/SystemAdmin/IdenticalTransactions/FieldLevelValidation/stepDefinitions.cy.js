/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../../support/pageObjects/homePage'
import "../../../../../../../../support/Utils/generic"
//import "../../../../../../../../support/Utils/IdenticalTransactionCommands"
import IdenticalTransaction from '../../../../../../../../support/pageObjects/IdenticalTransaction/IdenticalTransaction';
import CashInCashOut from '../../../../../../../../support/pageObjects/CashInCashOut/CashInCashOut';
import ChurnManagement from '../../../../../../../../support/pageObjects/ChurnManagement/ChurnManagement';
//----------------Object Declaration-----------------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const identicalTransactionPage = new IdenticalTransaction()
const cashincashoutPage = new CashInCashOut()
const churnManagementPage = new ChurnManagement()
//var CashIO = 'cypress/fixtures/userData/cashIn&cashout.json'
//----------------BDD Hooks-----------------------------------------------------------------


const amount = 3

And('assert payer id type', () => {
  cy.wait(3000)
  identicalTransactionPage.getAssertpayeridtype().check().should('be.checked')
})

And('assert payee ID', () => {
  cy.wait(3000)
  identicalTransactionPage.getAssertpayeeidtype().check().should('be.checked')
})

And('Click on check box of Payee wallet ID', () => {
  cy.wait(3000)
  identicalTransactionPage.getpayeewalletid().eq(5).click({ force: true })
})

And('Click on check box of Payer wallet ID', () => {
  cy.wait(3000)
  identicalTransactionPage.getpayerwalletid().eq(4).click({ force: true })
})

And('Clcik on check box of currency', () => {
  cy.wait(3000)
  identicalTransactionPage.getCurrency().eq(3).click({ force: true })
})

And('Click on check box of transaction ammount', () => {
  cy.wait(3000)
  identicalTransactionPage.getTransactionAmount().eq(2).click({ force: true })
})

Then('Click on save button1', function () {
  cy.wait(3000)
  identicalTransactionPage.getSaveButton().click({ force: true })
})

And('Click on back button', () => {
  cy.wait(3000)
  identicalTransactionPage.getBackButton().click()
})

And('Select service type All from drop down', function () {
  cy.wait(3000)
  identicalTransactionPage.getserviceType().select(1)
})

And('assert error message', () => {
  cy.wait(3000)
  identicalTransactionPage.geterrormessage().contains('Service Type is required')
})

And('assert error message1', () => {
  cy.wait(3000)
  identicalTransactionPage.geterrormessage().contains('Time Interval value cannot be empty')
})
And('Click on service type drop down1', () => {
  cy.wait(3000)
  identicalTransactionPage.getserviceType().select(2)
})

And('Select action on IT', () => {
  cy.wait(3000)
  identicalTransactionPage.getActionOnIT().select(1).contains("Pause Transaction")
  identicalTransactionPage.getActionOnIT().select(2).contains("Block Transaction")
})

And('Click on save button for IT', () => {
  cy.wait(3000)
  identicalTransactionPage.getSaveButton().click({ force: true })
})
