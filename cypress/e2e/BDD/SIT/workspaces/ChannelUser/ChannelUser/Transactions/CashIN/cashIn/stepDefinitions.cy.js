/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import ChurnManagement from '../../../../../../../../../support/pageObjects/ChurnManagement/ChurnManagement';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import "../../../../../../../../../support/Utils/comissioncommands";
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../../../support/Utils/BusinessUserCommands";
import CashInCashOut from "../../../../../../../../../support/pageObjects/CashInCashOut/CashInCashOut";
//----------------Object Declaration-----------------------------------------------------------

const churnManagementPage = new ChurnManagement()
const welcomePage = new homePage()
const manageUsersPage = new manageUsers()
const cashin = new CashInCashOut()
const uuid = () => Cypress._.random(1e2)
const uid = () => Cypress._.random(1e6)
Amount = uuid()
amount = uid()
var CashFile = 'cypress/fixtures/userData/cashIn&cashout.json'
const subRegistration = 'cypress/fixtures/userData/subscriberReg.json'
const churnSubRegistration = 'cypress/fixtures/userData/churnSubscriberReg.json'
var loginId, KycValue, name, Amount, amount
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
      name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//--------------------------------------------------------------------------------------

And('Enter Suspended mobile for CashIn', function () {
 cy.wait(2000)
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
  cy.readFile(subRegistration).then((data) => {
    let Mobile = data.subscriberMobileSuspend
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
    cy.stub($win, 'alert', () => true).as('windowConfirm')
    cy.stub($win.console, 'log').as('consoleLog')
    cy.wrap($body).find('#paymentMethodNumberId').type(Mobile).should(function () {
            //  expect(this.windowConfirm).to.be.calledWith("You must enter a value in MSISDN")
          })
          cy.stub($win, 'confirm', () => true).as('windowConfirm')
    cy.wrap($body).find('[name="amount"]').type("1").should(function () {
              // expect(this.windowConfirm).to.be.calledWith("Subscriber Does Not Exist")
          })
  
  })
})
  churnManagementPage.getAmount().clear().type("1")
  cy.wait(2000)
  cy.iframe().find('#partyWalletListSel').select('Normal')
  churnManagementPage.getPaymentID().type(Amount)
})

And('Click on Submit and Click on Confirm Button', function () {
    cy.intercept('/CoreWeb/stock/cashInWeb_confirm.action').as('cashInsubmit')
    churnManagementPage.getSubmitButton().click()
    cy.wait('@cashInsubmit')
    cy.intercept('/CoreWeb/stock/cashInWeb_makePayment.action').as('cashInConfirm')
    churnManagementPage.getConfirmButton().click()
    cy.wait('@cashInConfirm')
    cy.readFile(CashFile).then((data) => {
      churnManagementPage.getChurnInitiationMessage().then((al => {
        let q = al.text()
        cy.log(q)
        let a = q.split(':')
        let b = a[1].trim()
        cy.log(b)
        data.cashinTransactionID1 = b
        cy.writeFile(CashFile, data)
      }))
    })
    cy.readFile(CashFile).then((data) => {
      let Msg = data.cashinTransactionID1
      cy.wait(2000)
   })
})

Then('Verify Suspended error message',function(){
  cashin.getErrorMessage().should('contain','Receiver has been suspended')
})

And('Enter Invalid Amount and Verify error message',function(){
    cy.wait(2000)
    cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    cy.readFile(subRegistration).then((data) => {
      let Mobile = data.subscriberMobileSuspend
      const $body = $iframe.contents().find('body')
      const $win = $iframe[0].contentWindow
      cy.stub($win, 'alert', () => true).as('windowConfirm')
      cy.stub($win.console, 'log').as('consoleLog')
      cy.wrap($body).find('#paymentMethodNumberId').type(Mobile).should(function () {
              //  expect(this.windowConfirm).to.be.calledWith("You must enter a value in MSISDN")
            })
            cy.stub($win, 'confirm', () => true).as('windowConfirm')
      cy.wrap($body).find('[name="amount"]').type("1").should(function () {
                // expect(this.windowConfirm).to.be.calledWith("Subscriber Does Not Exist")
            })
    
    })
  })
    churnManagementPage.getAmount().clear().type(getRandomName())
    cy.wait(2000)
    cy.iframe().find('#partyWalletListSel').select('Normal')
    churnManagementPage.getPaymentID().type(Amount)
    cy.intercept('/CoreWeb/stock/cashInWeb_confirm.action').as('cashInsubmit')
    churnManagementPage.getSubmitButton().click()
    cy.wait('@cashInsubmit')
    cashin.getErrorMessage().should('contain','Please enter a valid amount to be transferred')
})

Then('Enter Amount more than balance and verify error message',function(){
    cy.wait(2000)
    cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    cy.readFile(subRegistration).then((data) => {
      let Mobile = data.subscriberMobileSuspend
      const $body = $iframe.contents().find('body')
      const $win = $iframe[0].contentWindow
      cy.stub($win, 'alert', () => true).as('windowConfirm')
      cy.stub($win.console, 'log').as('consoleLog')
      cy.wrap($body).find('#paymentMethodNumberId').type(Mobile).should(function () {
              //  expect(this.windowConfirm).to.be.calledWith("You must enter a value in MSISDN")
            })
            cy.stub($win, 'confirm', () => true).as('windowConfirm')
      cy.wrap($body).find('[name="amount"]').type("1").should(function () {
                // expect(this.windowConfirm).to.be.calledWith("Subscriber Does Not Exist")
            })
    
    })
  })
    churnManagementPage.getAmount().clear().type(amount)
    cy.wait(2000)
    cy.iframe().find('#partyWalletListSel').select('Normal')
    churnManagementPage.getPaymentID().type(Amount)
    cy.intercept('/CoreWeb/stock/cashInWeb_confirm.action').as('cashInsubmit')
    churnManagementPage.getSubmitButton().click()
    cy.wait('@cashInsubmit')
    cy.intercept('/CoreWeb/stock/cashInWeb_makePayment.action').as('cashInConfirm')
    churnManagementPage.getConfirmButton().click()
    cy.wait('@cashInConfirm')
    cashin.getErrorMessage().should('contain','Balance can not be negative')
})

