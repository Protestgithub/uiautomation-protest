/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';

import TransactionCorrection from '../../../../../../../../../support/pageObjects/TransactionCorrection';
import "../../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/subscriberCommands";

import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';



//----------------Object Declaration-----------------------------------------------------------------

const manageUsersPage = new manageUsers()
const pageLogin = new loginPage()
const welcomePage = new homePage()
const tranCorrPage = new TransactionCorrection()
var  BAMobileNumber
var TransactionFle = "cypress/fixtures/userData/cashIn&cashout.json"
var TransactionFleO2C = "cypress/fixtures/userData/TransactionFile.json"


And('Enter Mobile number or KYC number for Cash-Out service', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  var O2CFile = "cypress/fixtures/userData/O2Cdata.json"
  cy.readFile(O2CFile).then((data) => {
    BAMobileNumber = data.O2CMsisdn1
    manageUsersPage.getSearchUser().type(BAMobileNumber, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})

And('User Click Wallet Payment History and Click on reverse transaction for Cash-Out service', function () {
  manageUsersPage.getEyeIcon().click({ force: true })
  manageUsersPage.getexpandmore().click({ force: true })
  manageUsersPage.getwallet().click({ force: true })
  cy.readFile(TransactionFle).then((data) => {
    const TransactionID = data.cashoutTransactionID
    cy.log(TransactionID)
    manageUsersPage.getSearchTransactionId().type(TransactionID)
    manageUsersPage.getserachicon().click({ force: true })
  })
  
  manageUsersPage.getreversetransaction().eq(0).click({force:true})
  manageUsersPage.getreason().type('NIL')
  manageUsersPage.getreverseservicecharge().click({ force: true })
  manageUsersPage.getreversecommission().click({ force: true })
  manageUsersPage.getReverYes().click({ force: true })
 manageUsersPage.getintiatedmessage().should('have.text',this.data10.initiatedMessage)

})
When('Navigate to Transaction Correction and click on Transaction Approval3', function () {
  welcomePage.getTransactionCorrection().click()
  welcomePage.getTransactionCorrectionApproval().click()
  
  tranCorrPage.getcolumn().within(function () {
    
    cy.readFile(TransactionFle).then((data) => {
      var transID = data.cashoutTransactionID
      cy.log(transID)
      cy.get('td').contains(transID)

      tranCorrPage.getradiobutton().check()
      tranCorrPage.getsubmit().click({ force: true })
    })
    

  })
  tranCorrPage.getcolumn().within(function () {
    cy.get('td').within(function () {
      tranCorrPage.getapprove().click({ force: true })
    })
  })
  
  tranCorrPage.getsuccessmessage().contains(this.data10.successmessage)
  
//cy.TransactionCorrectionIDWriteData()
})

When('Navigate to User Management and Click on manage Users', function () {
      welcomePage.getUserManagementOption().scrollIntoView()
       welcomePage.getUserManagementOption().click()
    cy.intercept('/mobiquitypay/v1/ums/user/search*').as('getSearch')
    welcomePage.getManageUsersLink().click()
    cy.wait('@getSearch', {timeout:20000})
    cy.wait(2000)
    })
    
