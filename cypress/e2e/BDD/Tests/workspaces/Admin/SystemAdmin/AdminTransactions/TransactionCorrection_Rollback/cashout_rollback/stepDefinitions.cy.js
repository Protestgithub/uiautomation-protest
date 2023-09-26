/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../../../support/pageObjects/homePage';

import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../../support/Utils/subscriberCommands";
import TransactionCorrection from '../../../../../../../../../support/pageObjects/TransactionCorrection';

import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';

//----------------Object Declaration-----------------------------------------------------------------

const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()




//----------------Object Declaration-----------------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const tranCorrPage = new TransactionCorrection()
const uid = () => Cypress._.random(1e10)
const uuid = () => Cypress._.random(1e5)
var TransferAmount = uuid()
var ReferenceNumber = uuid()
var number = uuid()
var Amount = uid()
var name, BAMobileNumber
var TransactionFleO2C = "cypress/fixtures/userData/cashIn&cashout.json"
var filename = "cypress/fixtures/userData/O2CBulkData.json"
var BBAFile = "cypress/fixtures/userData/BusinessUsersDataO2C.json"
var O2CFile = "cypress/fixtures/userData/O2Cdata.json"
var BuisnessRegO2C = "cypress/fixtures/userData/BusinessUsersDataO2C.json"
var BuisnessReg = "cypress/fixtures/userData/BusinessUsersData.json"

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
//----------------BDD Hooks-----------------------------------------------------------------


///////////////////// KALYANI /////////////////////////////////


When('User Click on eye button for WalletHistory', function () {
  manageUsersPage.getEyeIcon().click({ force: true })
  manageUsersPage.getexpandmore().click({ force: true })
  manageUsersPage.getwallet().click({ force: true })
   cy.wait(3000)
    cy.readFile(TransactionFleO2C).then((data) => {
    const TransactionID = data.cashinTransactionID
    cy.log(TransactionID)
    manageUsersPage.getSearchTransactionId().type(TransactionID)
    manageUsersPage.getserachicon().click({ force: true })
  })
    cy.wait(3000)
  manageUsersPage.getreversetransaction().eq(0).click()
  manageUsersPage.getreason().type('NIL')
  manageUsersPage.getreverseservicecharge().click({ force: true })
  cy.wait(2000)
  manageUsersPage.getreversecommission().click({ force: true })
  cy.wait(2000)
  manageUsersPage.getReverYes().click({ force: true })
  cy.wait(3000)
  cy.wait(10000)
  manageUsersPage.getintiatedmessage().should('have.text',this.data21.initiatedMessage)
  

  
})
When('User Click on eye button for WalletHistory1', function () {
  manageUsersPage.getEyeIcon().click({ force: true })
  manageUsersPage.getexpandmore().click({ force: true })
  manageUsersPage.getwallet().click({ force: true })
  cy.readFile(TransactionFleO2C).then((data) => {
    const TransactionID1 = data.cashinTransactionID1
    cy.log(TransactionID1)
    manageUsersPage.getSearchTransactionId().type(TransactionID1)
    manageUsersPage.getserachicon().click({ force: true })
  })
  cy.wait(3000)
  manageUsersPage.getreversetransaction().eq(0).click()
  manageUsersPage.getreason().type('NIL')
  manageUsersPage.getreverseservicecharge().click({ force: true })
  cy.wait(2000)
  manageUsersPage.getReverYes().click({ force: true })
   cy.wait(10000)
  manageUsersPage.getintiatedmessage().should('have.text',this.data21.initiatedMessage)
  
 
})
When('User Click on eye button for WalletHistory2', function () {
  manageUsersPage.getEyeIcon().click({ force: true })
  manageUsersPage.getexpandmore().click({ force: true })
  manageUsersPage.getwallet().click({ force: true })
  cy.readFile(TransactionFleO2C).then((data) => {
    let TransactionID = data.cashinTransactionID2
    cy.log(TransactionID)
    manageUsersPage.getSearchTransactionId().type(TransactionID)
    manageUsersPage.getserachicon().click({ force: true })
  })
  cy.wait(3000)
  manageUsersPage.getreversetransaction().eq(0).click()
  manageUsersPage.getreason().type('NIL')
   cy.wait(2000)
  manageUsersPage.getreversecommission().click({ force: true })
  cy.wait(2000)
  manageUsersPage.getReverYes().click({ force: true })
  
  cy.wait(10000)
 manageUsersPage.getintiatedmessage().should('have.text',this.data21.initiatedMessage)
  
  })

When('Navigate to Transaction Correction and click on Transaction Approval', function () {
  welcomePage.getTransactionCorrection().click()
  welcomePage.getTransactionCorrectionApproval().click()
  cy.wait(3000)
  tranCorrPage.getcolumn().within(function () {
    cy.wait(5000)
    cy.readFile(TransactionFleO2C).then((data) => {
      var transID = data.cashinTransactionID
      cy.log(transID)
      cy.get('td').contains(transID)

      tranCorrPage.getradiobutton().check()
      tranCorrPage.getsubmit().click({ force: true })
    })
    cy.wait(3000)

  })
  tranCorrPage.getcolumn().within(function () {
    cy.get('td').within(function () {
      tranCorrPage.getapprove().click({ force: true })
    })
  })
  cy.wait(10000)
  tranCorrPage.getsuccessmessage().contains(this.data21.successmessage)

})
When('Navigate to Transaction Correction and click on Transaction Approval1', function () {
  welcomePage.getTransactionCorrection().click()
  welcomePage.getTransactionCorrectionApproval().click()
  cy.wait(3000)
  tranCorrPage.getcolumn().within(function () {
    cy.wait(5000)
    cy.readFile(TransactionFleO2C).then((data) => {
      var transID1 = data.cashinTransactionID1
      cy.log(transID1)
      cy.get('td').contains(transID1)

      tranCorrPage.getradiobutton().check()
      tranCorrPage.getsubmit().click({ force: true })
    })
    cy.wait(3000)

  })
  tranCorrPage.getcolumn().within(function () {
    cy.get('td').within(function () {
      tranCorrPage.getapprove().click({ force: true })
    })
  })
  cy.wait(10000)
  tranCorrPage.getsuccessmessage().contains(this.data21.successmessage)
})
When('Navigate to Transaction Correction and click on Transaction Approval2', function () {
  welcomePage.getTransactionCorrection().click()
  welcomePage.getTransactionCorrectionApproval().click()
  cy.wait(3000)
  tranCorrPage.getcolumn().within(function () {
    cy.wait(5000)
    cy.readFile(TransactionFleO2C).then((data) => {
      var transID2 = data.cashinTransactionID2
      cy.log(transID2)
      cy.get('td').contains(transID2)

      tranCorrPage.getradiobutton().check()
      tranCorrPage.getsubmit().click({ force: true })
    })
    cy.wait(3000)

  })
  tranCorrPage.getcolumn().within(function () {
    cy.get('td').within(function () {
      tranCorrPage.getapprove().click({ force: true })
    })
  })
  cy.wait(10000)
  tranCorrPage.getsuccessmessage().contains(this.data21.successmessage)
})
    And('Enter Mobile number or KYC number',function(){
      pageLogin.getiFrame()
      manageUsersPage.getSearchUser().click({ force: true })
    
      cy.readFile(BuisnessReg).then((data) => {
        // var mobileSys
        var mobile
        mobile = data.registeredMobileMerch
        manageUsersPage.getSearchUser().type(mobile, { force: true })
      })
      manageUsersPage.getSearchUserButton().click({ force: true })  
    })
