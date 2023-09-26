/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import ChurnManagement from '../../../../../../../support/pageObjects/ChurnManagement/ChurnManagement';
import homePage from '../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../support/pageObjects/loginPage';
import myActivity from '../../../../../../../support/pageObjects/MyActivity/myActivity';
import securityQuestion from '../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';
import approvals from '../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../support/Utils/ChurnCommands";
import "../../../../../../../support/Utils/comissioncommands";
import "../../../../../../../support/Utils/generic";
import "../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../support/pageObjects/CashInCashOut/CashInCashOut";
import CashInCashOut from "../../../../../../../support/pageObjects/CashInCashOut/CashInCashOut";
//----------------Object Declaration-----------------------------------------------------------

const pageLogin = new loginPage()
const churnManagementPage = new ChurnManagement()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const myActivityPage = new myActivity()
const manageUsersPage = new manageUsers()
const securityQuestionPage = new securityQuestion()
const cashincashoutPage = new CashInCashOut()

const uuid = () => Cypress._.random(1e2)
Amount = uuid()

var CashFile = 'cypress/fixtures/userData/cashIn&cashout.json'
const SubMob = 'userData/subscriberReg.json'
const churnSubRegistration = 'cypress/fixtures/userData/churnSubscriberReg.json'
var loginId, KycValue, name, Amount, CashOutAmont
CashOutAmont = 1
var CashIO = 'cypress/fixtures/userData/cashIn&cashout.json'




const timestamp = (new Date).getTime()
KycValue = "A" + timestamp

//----------------------------------------------------------------------------------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

function getRandomName1() {
  name = "12";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 7; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


//------------------------------------------------------------------
And('Enter all Mandatory details CashOut', function () {
  cy.wait(4000)
 
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
    cy.fixture(SubMob).then((user) => {
      var SubMob1 = user.subscriberMobile
  
    const $body = $iframe.contents().find('body')
    const $win = $iframe[0].contentWindow
    cy.stub($win, 'alert', () => true).as('windowConfirm')
    cy.stub($win.console, 'log').as('consoleLog')
    cy.wrap($body).find('#paymentMethodNumberId').type(SubMob1).should(function () {
            //  expect(this.windowConfirm).to.be.calledWith("You must enter a value in MSISDN")
          })
          cy.stub($win, 'confirm', () => true).as('windowConfirm')
    cy.wrap($body).find('[name="amount"]').type("1").should(function () {
              // expect(this.windowConfirm).to.be.calledWith("Subscriber Does Not Exist")
          })

        })
      })

  cashincashoutPage.getAmount().clear().type("1")
  cy.iframe().find('#partyWalletListSel').select('Normal')
  //cashincashoutPage.getPaymentID().type(PaymentID1)
})


Then('Click on Submit and Click on Confirm Button for cashout', function () {
  cashincashoutPage.getSubmitButton1().click()
  cy.wait(2000)
  cashincashoutPage.getConfirmButton().click()
  cy.wait(2000)
  churnManagementPage.getChurnInitiationMessage().then((al => {
    let q = al.text()
    cy.log(q)
    let a = q.split(':')
    let b = a[1].trim()
    cy.log(b)

    cy.readFile(CashIO).then((data) => {
      data.cashoutTransactionID = b
      cy.writeFile(CashIO, data)
      let Msg = data.cashoutTransactionID
      churnManagementPage.getChurnInitiationMessage().should('have.text', this.data003.cashOutMsg + Msg)
      
    })
  }))
})



