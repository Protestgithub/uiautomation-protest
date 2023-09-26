/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe';
// import 'cypress-cucumber-preprocessor/steps'
import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
// import loginPage from '../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../support/pageObjects/loginPage';
// // import ChurnManagement from '../../../../../support/pageObjects/ChurnManagement/ChurnManagement';
import '../../../../../support/Utils/generic';
import '../../../../../support/Utils/subscriberCommands';
// import "../../../../../support/comissioncommands";
// import register from '../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../support/pageObjects/UserManagement/approvals';
// // import { recurse } from 'cypress-recurse';
// import "../../../../../support/ChurnCommands";
import myActivity from '../../../../../support/pageObjects/MyActivity/myActivity';
import manageUsers from '../../../../../support/pageObjects/UserManagement/manageUsers';
// // import { waitForDebugger } from 'inspector';

//----------------Object Declaration-----------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'
const myActivityPage = new myActivity()

//----------------BDD Hooks-----------------------------------------------------------------


//---------------------------------------------System Admin Login----------------------------------------------------
// Given('Login into Mobiquity Portal as System admin Maker', function () {
//   cy.launchURL(Cypress.env('Adminurl'))
//   cy.SysAdminlogin()
//   
//   // cy.fixture('userData/SystemAdminLogin.json').then((data) => {
//   //   let Name = data.SysAdminMakerName
//   //  // cy.checkWelcomeText(Name)
//   // })
// })
Given('Login into Mobiquity Portal as System admin Checker', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.SysAdminlogin2()
  // cy.fixture('userData/SystemAdminLogin.json').then((data) => {
  //   let Name = data.SysAdminChecker1Name
  //   
  //  // cy.checkWelcomeText(Name)
  // })
})
When('Navigate to User Management and Click on Manage Users', function () {
  welcomePage.getUserManagementOption().scrollIntoView()
  welcomePage.getUserManagementOption().click()
  cy.intercept('/usermanagementui/').as('ManageUs')
  manageUsersPage.getManageUsers().click({ force: true })
  cy.wait('@ManageUs', { timeout: 3000 })
})
And('Enter the Mobile number you want to delete and Click on Search', function () {
  //
  manageUsersPage.getSearchUser().type(this.data06.subscriberMobileBankingActivation)
  
  manageUsersPage.getSearchUserButton().click()
})
And('Click on delete icon for Subscriber', function () {
  manageUsersPage.getDelete().click()
})
Then('Enter the Reason and Initiate to Delete', function () {
  //manageUsersPage.getdelete().click({ force: true })
  //
  manageUsersPage.getcomment().type(this.data2.comment)
  
  manageUsersPage.getreasonforclosure().select(this.data2.Reason)
  cy.wait(2000)
  cy.intercept("/mobiquitypay/v1/ums/user/*").as('getDelete')
  manageUsersPage.getintiatedelete().click({ force: true })
  cy.wait('@getDelete', {timeout:50000})
})

And('Assert Created Subscriber Mobile Number and Write Created on time to Delete the Subscriber creation', function () {
  
  cy.readFile(subRegistration).then((user) => {
    let SubMobile = user.subscriberMobileBankingActivation
    var SUBMobile = " " + SubMobile
    manageUsersPage.getAssertMobile().eq(1).should('contain', SUBMobile)
  })
  
  myActivityPage.getCreatedOnTime1().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(subRegistration).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(subRegistration, data)
    })
  })
})
And('Enter the Mobile number you want to delete and Click on Search1', function () {
  //
  manageUsersPage.getSearchUser().type(this.data06.subscriberMobile)
  
  manageUsersPage.getSearchUserButton().click()
})

And('Enter the Mobile number you want to delete and Click on Search2', function () {
  //
  manageUsersPage.getSearchUser().type(this.data06.subscriberMobileSuspend)
  
  manageUsersPage.getSearchUserButton().click()
})