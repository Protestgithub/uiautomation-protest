/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../support/pageObjects/loginPage';
import "../../../../../support/Utils/comissioncommands";
import "../../../../../support/Utils/generic";
import "../../../../../support/Utils/subscriberCommands";
//import approvals from '../../../../../support/pageObjects/UserManagement/approvals';
// import register from '../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../support/pageObjects/UserManagement/approvals';
// import { recurse } from 'cypress-recurse';
import "../../../../../support/Utils/ChurnCommands";
// import myActivity from '../../../../../support/pageObjects/MyActivity/myActivity';
import manageUsers from '../../../../../support/pageObjects/UserManagement/manageUsers';
// import { waitForDebugger } from 'inspector';
//----------------Object Declaration-----------------------------------------------------------

const pageLogin = new loginPage()
// const churnManagementPage = new ChurnManagement()
const welcomePage = new homePage()
// const registerPage = new register()
const approvalPage = new approvals()
// const myActivityPage = new myActivity()
const manageUsersPage = new manageUsers()
// const uuid = () => Cypress._.random(1e2)
// Amount = uuid()

// var CashFile = 'cypress/fixtures/userData/cashIn&cashout.json'
// const churnSubRegistration = 'cypress/fixtures/userData/churnSubscriberReg.json'
// var loginId, KycValue, name, Amount

// const timestamp = (new Date).getTime()
//   KycValue = "A" + timestamp

//----------------BDD Hooks-----------------------------------------------------------------


And('Click on delete icon for Subscriber creation', function () {
  manageUsersPage.getDelete().click({ force: true })
  manageUsersPage.getcomment().type(this.data2.comment)
  manageUsersPage.getreasonforclosure().select(this.data2.Reason)
   cy.wait(2000)
  cy.intercept("/mobiquitypay/v1/ums/user/*").as('getDelete')
  manageUsersPage.getintiatedelete().click({ force: true })
  cy.wait('@getDelete', {timeout:50000})

})
// Then('Verify Sucess Message', function () {
//   cy.waitUntil(() => {
//     return cy.iframe().find('simple-snack-bar.mat-simple-snackbar.ng-star-inserted').should('be.visible')
//   })
//   manageUsersPage.getRejectErrorMessage().contains(this.data2.personalInfo.deletemessage)
// })

When('User Click on eye button and Click on Delete', function () {
  manageUsersPage.getEyeIcon().click({ force: true })
  manageUsersPage.getDelete().click({ force: true })
})


And('User click on submitted user data for Subscriber Deletion to Churn', function () {
  approvalPage.getCurrentDateRowData().eq(0).click({ force: true })
})

Then('Verify Success Message for delete request', function () {
  cy.waitUntil(() => {
    return cy.iframe().find('div.mat-simple-snackbar-action.ng-star-inserted').should('be.visible')
  })
  //     approvalPage.getsucessSYS().should('contain', this.data2.confirmationMessage.EdituserSys)
})