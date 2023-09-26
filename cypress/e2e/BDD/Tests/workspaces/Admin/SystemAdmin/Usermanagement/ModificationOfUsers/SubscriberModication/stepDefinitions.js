/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import myActivity from '../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/registration";
import "../../../../../../../../../support/Utils/subscriberCommands";

//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
const myActivityPage = new myActivity()
const uuid = () => Cypress._.random(1e8)
const uuid1 = () => Cypress._.random(1e8)
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()
var loginId, mobile, KycValue, amount, name
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp
mobile = "77" + uuid1()
var mobile1, loginId, name
mobile1 = "77" + uuid()
var filename = 'cypress/fixtures/userData/AdministratorData.json'
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'

//--------------------------------------------------------------------------------------


And('Enter Subscriber mobile number and search', function () {
  cy.getSubscriberMobileNumber()
  manageUsersPage.getSearchUserButton().click({ force: true })
})

And('System Admin is able to edit subscriber details', function () {
  manageUsersPage.getEditToolTip().eq(0).click({ force: true })
  registerPage.getState().select(this.data2.modified.state, { force: true })
  registerPage.getCity().select(this.data2.modified.city, { force: true })
  registerPage.getNextButtonBasic().click({ force: true })
  registerPage.getNextButtonBasic1().click({ force: true })
  registerPage.getNextButtonBasic2().click({ force: true })
})

//---------------------------------Notification----------------------------------

Then('Approve the Users and Check for SMS Notification sent to Subscriber', () => {
  cy.getSubMessage(Cypress.env('apiBaseURL'), Cypress.env('port'))
})
