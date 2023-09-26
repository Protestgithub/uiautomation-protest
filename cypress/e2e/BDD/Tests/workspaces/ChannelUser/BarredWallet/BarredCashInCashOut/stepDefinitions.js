/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import ChurnManagement from '../../../../../../../support/pageObjects/ChurnManagement/ChurnManagement';
import homePage from '../../../../../../../support/pageObjects/homePage';
import manageUsers from '../../../../../../../support/pageObjects/UserManagement/manageUsers';
import "../../../../../../../support/Utils/comissioncommands";
import "../../../../../../../support/Utils/generic";
import "../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../support/Utils/BusinessUserCommands";
import CashInCashOut from "../../../../../../../support/pageObjects/CashInCashOut/CashInCashOut";
//----------------Object Declaration-----------------------------------------------------------

const churnManagementPage = new ChurnManagement()
const welcomePage = new homePage()
const manageUsersPage = new manageUsers()
const cashin = new CashInCashOut()
const uuid = () => Cypress._.random(1e2)
Amount = uuid()

var CashFile = 'cypress/fixtures/userData/cashIn&cashout.json'
const subRegistration = 'cypress/fixtures/userData/subscriberReg.json'
const churnSubRegistration = 'cypress/fixtures/userData/churnSubscriberReg.json'
var loginId, KycValue, name, Amount
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
      name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//----------------------------------------------------------------------------------------


And('Enter Buisness Mobile number for locking wallet', function () {
  cy.getBusinessUserMobNum()
})

And('Lock Incomiming Payments', function () {
  manageUsersPage.getlockunclockWallets().click({ force: true })
  manageUsersPage.getLockIncomingPayements().click({ force: true })
})

Then('Click On lock all incoming payments', function () {
  manageUsersPage.getlockallbtn().click({ force: true })
  manageUsersPage.getconfirmationlock().type(getRandomName(), { force: true })
  manageUsersPage.getconfirmationbtn().click({ force: true })
})
When('Navigate to Cash in or Cash out and Click on Cash Out', function () {
  welcomePage.getCashinOrCashout().click({force:true})
  welcomePage.getCashOut().click({force:true})
  
  })


//--------------------------------------------------
And ('Enter required details for cash out for different wallet', function()
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
   cashin.getCashOutAmount().clear().type('1')
   cashin.getCashOutSubmit().click({force:true})
   cy.wait(2000)
   cashin.getConfirm().click({force:true})
})
cy.wait(2000)
cashin.getSuccessMessage().contains(this.data1.cashoutsuccessmessage)
})

And('select Lock incoming payments', function () {
  manageUsersPage.getlockunclockWallets().click({ force: true })
  manageUsersPage.getLockIncomingPayements().click({force:true})
})
