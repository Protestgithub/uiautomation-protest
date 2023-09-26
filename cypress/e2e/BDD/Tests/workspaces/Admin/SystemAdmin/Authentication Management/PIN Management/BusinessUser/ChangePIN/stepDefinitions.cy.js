/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../../support/pageObjects/loginPage';

import TransactionCorrection from '../../../../../../../../../../support/pageObjects/TransactionCorrection';
import "../../../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../../support/Utils/subscriberCommands";

import approvals from '../../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../../../../support/pageObjects/UserManagement/register';

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
var BBAFile = "cypress/fixtures/userData/BusinessUsersData.json"

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


And('Enter previously registeredd Mobile number', function () {
    pageLogin.getiFrame()
    manageUsersPage.getSearchUser().click({ force: true })
    cy.readFile(BBAFile).then((data) => {
      BAMobileNumber = data.registeredMobile
      manageUsersPage.getSearchUser().type(BAMobileNumber, { force: true })
    })
    manageUsersPage.getSearchUserButton().click({ force: true })
  
  })

  And("Navigate to Credentials and reset PIN", function(){
    manageUsersPage.getexpandmore().click({ force: true })
    manageUsersPage.getcredentials().click({ force: true })
    manageUsersPage.getresetcredentials().eq(0).click()
    cy.intercept('/mobiquitypay/v1/ums/user/auth/admin_reset_auth').as('getSuccess')
    manageUsersPage.getresetconfirmation().click()
    cy.wait('@getSuccess')
    manageUsersPage.getResetSuccessMessage().contains('Success')
    manageUsersPage.getResetSuccessMessageContent().contains('sent to the user')
    manageUsersPage.getsuccessresetconfirmation().click()

  })

  Then('Login with loginId and PIN', function(){
    cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
  
  cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
    var loginId
    loginId = data.registeredMobile
    cy.login(loginId, this.data1.businessAdmin.DefaultPassword)
    cy.login1(this.data1.businessAdmin.PIN)
    
    cy.Passwordchange(this.data1.PINChangeMessage)
    pageLogin.getloginbtn1().click({ force: true })
    
    cy.login(loginId, this.data1.businessAdmin.PIN)

  })
  })