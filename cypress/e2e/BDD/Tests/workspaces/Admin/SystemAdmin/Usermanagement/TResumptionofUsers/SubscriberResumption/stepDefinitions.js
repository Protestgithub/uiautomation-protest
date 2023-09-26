/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import ChurnManagement from '../../../../../../../../../support/pageObjects/ChurnManagement/ChurnManagement';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import myActivity from '../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import securityQuestion from '../../../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';
import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../../support/Utils/ChurnCommands";
import "../../../../../../../../../support/Utils/comissioncommands";
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/subscriberCommands";
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
Amount = uuid()

const subRegistration = 'cypress/fixtures/userData/subscriberReg.json'

var loginId, KycValue, name, Amount

const timestamp = (new Date).getTime()
KycValue = "A" + timestamp

//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//----------------------------------------------------------------------------------------------
And('Resume the user by giving the comment', function () {
  manageUsersPage.getEyeIcon().click({ force: true })
  manageUsersPage.getSuspendUser().click({ force: true })
  manageUsersPage.getCommentBox().type(this.data2.modifyPersonalInfo8.comments, { force: true })
  manageUsersPage.getSubmitSuspendResumeButton().click({ force: true })
})
Then('Verify the user resume Confirmation message', function () {
  cy.waitUntil(() => {
    return cy.iframe().find('.mat-simple-snackbar.ng-star-inserted > span').should("contain", this.data2.suspendResumeConfirmationMessage.suspendResumeUser)
  })
})
And('Admin click on Resumeded user data', function () {
  cy.getApproval(subRegistration)
})

Then('Verify the user Resumed approval message', function () {
  cy.waitUntil(() => {
    return cy.iframe().find('.mat-simple-snackbar.ng-star-inserted > span').contains(this.data2.suspendResumeConfirmationMessage.userResumed)
  })
})
Then('Verify View Details Page', function () {
  cy.waitUntil(() => {
    return cy.iframe().find('span.font-weight-bold').should('be.visible')
  })
  manageUsersPage.getViewDetails().contains(this.data2.confirmationMessage.viewDetails)
})