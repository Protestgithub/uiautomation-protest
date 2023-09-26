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
//----------------Object Declaration-----------------------------------------------------------

const pageLogin = new loginPage()
const churnManagementPage = new ChurnManagement()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const myActivityPage = new myActivity()
const manageUsersPage = new manageUsers()
const securityQuestionPage = new securityQuestion()
const uuid = () => Cypress._.random(1e2)


var CashFile = 'cypress/fixtures/userData/cashIn&cashout.json'
const SubRegistration = 'cypress/fixtures/userData/subscriberReg.json'
const churnSubRegistration = 'cypress/fixtures/userData/churnSubscriberReg.json'
var loginId, KycValue, name, Amount

const timestamp = (new Date).getTime()
KycValue = "A" + timestamp
Amount = uuid()
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

//----------------Business user login---------------------------------------------------------------------------



Given('Login into Mobiquity Portal as Channel User4', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
  
  cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
    var loginId
    loginId = data.MerchantLoginID
    cy.login(loginId, this.data1.businessAdmin.businessadminPwd1)

  })
})

When('Navigate to Cash in or Cash out and Click on Cash in', function () {
  welcomePage.getCashinOrCashout().click({ force: true })
  cy.intercept("/CoreWeb/stock/cashInWeb_inputCashtrans.action").as('cashIn')
  welcomePage.getCashin().click({ force: true })
  cy.wait('@cashIn',{timeout:30000})
  
})

When('Click on cash in',function(){
  welcomePage.getCashinOrCashout().click({ force: true })
  cy.intercept("/CoreWeb/stock/cashInWeb_inputCashtrans.action").as('cashIn')
  welcomePage.getCashin().click({ force: true })
  cy.wait('@cashIn',{timeout:30000})
  cy.wait(2000)
})

And('Enter all Mandatory details for CashIn', function () {
 cy.wait(2000)
  cy.get('.fd-page.iframeContainer.svelte-1v5e28n > iframe').then(($iframe) => {
  cy.readFile(SubRegistration).then((data) => {
    let Mobile = data.subscriberMobile
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

Then('Click on Submit and Click on Confirm Button', function () {
  cy.intercept('/CoreWeb/stock/cashInWeb_confirm.action').as('cashInsubmit')
  churnManagementPage.getSubmitButton().click()
  cy.wait('@cashInsubmit')
  cy.intercept('/CoreWeb/stock/cashInWeb_makePayment.action').as('cashInConfirm')
  churnManagementPage.getConfirmButton().click()
  cy.wait('@cashInConfirm')
  churnManagementPage.getChurnInitiationMessage().then((al => {
    let q = al.text()
    cy.log(q)
    let a = q.split(':')
    let b = a[1].trim()
    cy.log(b)
    cy.writeFile(CashFile, { cashinTransactionID: b })
  }))
  cy.readFile(CashFile).then((data) => {
    let Msg = data.cashinTransactionID
    cy.wait(2000)
    churnManagementPage.getChurnInitiationMessage().should('contain', this.data003.cashInSucsessMsg + Msg)
  })
})

Then('Click on Submit and Click on Confirm Button1', function () {
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
    churnManagementPage.getChurnInitiationMessage().should('contain', this.data003.cashInSucsessMsg + Msg)
  })
})

Then('Click on Submit and Click on Confirm Button2', function () {
  cy.intercept('/CoreWeb/stock/cashInWeb_confirm.action').as('cashInsubmit')
  churnManagementPage.getSubmitButton().click()
  cy.wait('@cashInsubmit')
  cy.intercept('/CoreWeb/stock/cashInWeb_makePayment.action').as('cashInConfirm')
  cy.wait(2000)
  churnManagementPage.getConfirmButton().click()
  cy.wait('@cashInConfirm')
  cy.wait(2000)

  cy.readFile(CashFile).then((data) => {
    churnManagementPage.getChurnInitiationMessage().then((al => {
      let q = al.text()
      cy.log(q)
      let a = q.split(':')
      let b = a[1].trim()
      cy.log(b)
      data.cashinTransactionID2 = b
      cy.writeFile(CashFile, data)
    }))
  })
  cy.readFile(CashFile).then((data) => {
    let Msg = data.cashinTransactionID2
    
    churnManagementPage.getChurnInitiationMessage().should('contain', this.data003.cashInSucsessMsg + Msg)
  })
})

Given('x.4 Login into Mobiquity Portal as Business User3', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
    cy.wait(2000)
  cy.readFile('cypress/fixtures/userData/BusinessUsersDataO2C.json').then((data) => {
    var loginId
    loginId = data.LoginId
    cy.login(loginId, this.data1.businessAdmin.DefaultPassword)
    cy.login1(this.data1.businessAdmin.businessadminPwd1)
      cy.wait(2000)
    cy.Passwordchange(this.data1.UserCreationSuccessMessage)
    pageLogin.getloginbtn1().click({ force: true })
      cy.wait(2000)
    cy.login(loginId, this.data1.businessAdmin.businessadminPwd1)
  })
})