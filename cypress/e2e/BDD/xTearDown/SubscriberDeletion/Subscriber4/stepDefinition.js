/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And } from "@badeball/cypress-cucumber-preprocessor";
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

And('User click on submitted user data Subscriber Deletion', function () {
  approvalPage.getCurrentDateRowData().eq(0).click({ force: true })
})