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

//--------------------------------------------------------------------------------

And ('Enter Invalid Amount for CashOut and Verify Error Message', function()
{
  cy.wait(4000)
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
  cy.readFile(subRegistration).then((data) => {
      let mobilenumber =data.subscriberMobile
      const $body = $iframe.contents().find('body')
      const $win = $iframe[0].contentWindow
      cy.stub($win, 'alert', () => true).as('windowConfirm')
      cy.stub($win.console, 'log').as('consoleLog')
   
      cy.wrap($body).find('#paymentMethodNumberId').type(mobilenumber).should(function () {
        //  expect(this.windowConfirm).to.be.calledWith("You must enter a value in MSISDN")
      })
      cy.stub($win, 'confirm', () => true).as('windowConfirm')
        cy.wrap($body).find('[name="amount"]').type("1").should(function () {
          // expect(this.windowConfirm).to.be.calledWith("Subscriber Does Not Exist")
      })
   
   cashin.getSubscriberWalletType().select('Normal')
  })
   cashin.getCashOutAmount().clear().type(getRandomName())
   cashin.getCashOutSubmit().click({force:true})
   cy.wait(2000)
   cashin.getErrorMessage().should('contain','Please enter a valid amount to be transferred')
})
})

Then('Enter Invalid Mobile number and verify error message',function(){
    cy.wait(4000)
    cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
        const $body = $iframe.contents().find('body')
        const $win = $iframe[0].contentWindow
        cy.stub($win, 'alert', () => true).as('windowConfirm')
        cy.stub($win.console, 'log').as('consoleLog')
     
        cy.wrap($body).find('#paymentMethodNumberId').type(getRandomName()).should(function () {
          //  expect(this.windowConfirm).to.be.calledWith("You must enter a value in MSISDN")
        })
        cy.stub($win, 'confirm', () => true).as('windowConfirm')
          cy.wrap($body).find('[name="amount"]').type("1").should(function () {
            // expect(this.windowConfirm).to.be.calledWith("Subscriber Does Not Exist")
        })
    })
})

Then('Enter Suspendend mobile number and Verify error message',function(){
    cy.wait(4000)
    cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    cy.readFile(subRegistration).then((data) => {
        let mobilenumber =data.subscriberMobileSuspend
        const $body = $iframe.contents().find('body')
        const $win = $iframe[0].contentWindow
        cy.stub($win, 'alert', () => true).as('windowConfirm')
        cy.stub($win.console, 'log').as('consoleLog')
     
        cy.wrap($body).find('#paymentMethodNumberId').type(mobilenumber).should(function () {
          //  expect(this.windowConfirm).to.be.calledWith("You must enter a value in MSISDN")
        })
        cy.stub($win, 'confirm', () => true).as('windowConfirm')
          cy.wrap($body).find('[name="amount"]').type("1").should(function () {
            // expect(this.windowConfirm).to.be.calledWith("Subscriber Does Not Exist")
        })
     
     cashin.getSubscriberWalletType().select('Normal')
    })
     cashin.getCashOutAmount().clear().type('1')
     cashin.getCashOutSubmit().click({force:true})
     cy.wait(2000)
     cashin.getConfirm().click({force:true})
  })
  cy.wait(2000)
  cashin.getErrorMessage().contains('Receiver has been suspended')  
})

Then('Enter Amount more than balance and verify error message for cashout',function(){
    cy.wait(4000)
    cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    cy.readFile(subRegistration).then((data) => {
        let mobilenumber =data.subscriberMobileSuspend
        const $body = $iframe.contents().find('body')
        const $win = $iframe[0].contentWindow
        cy.stub($win, 'alert', () => true).as('windowConfirm')
        cy.stub($win.console, 'log').as('consoleLog')
     
        cy.wrap($body).find('#paymentMethodNumberId').type(mobilenumber).should(function () {
          //  expect(this.windowConfirm).to.be.calledWith("You must enter a value in MSISDN")
        })
        cy.stub($win, 'confirm', () => true).as('windowConfirm')
          cy.wrap($body).find('[name="amount"]').type("1").should(function () {
            // expect(this.windowConfirm).to.be.calledWith("Subscriber Does Not Exist")
        })
     
     cashin.getSubscriberWalletType().select('Normal')
    })
     cashin.getCashOutAmount().clear().type(amount)
     cashin.getCashOutSubmit().click({force:true})
     cy.wait(2000)
     cashin.getConfirm().click({force:true})
     cy.wait(2000)
     cashin.getErrorMessage().should('contain','Balance can not be negative')
    })
})