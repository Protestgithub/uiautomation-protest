/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import API from '../../../../../../../../../support/pageObjects/API';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import myActivity from '../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import securityQuestion from '../../../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';
import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/subscriberCommands";


//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
const APIPage = new API()
const myActivityPage = new myActivity()
const securityQuestionPage = new securityQuestion()
const uuid = () => Cypress._.random(1e8)
const uuid1 = () => Cypress._.random(1e6)
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()
var loginId, mobile, KycValue, amount, name, ifscnum, accnumber
const kycid = () => Cypress._.random(1e8)
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp
mobile = "77" + uuid1()
var mobile1, Submobile, loginId, name
mobile1 = "77" + uuid()
var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'

//-----------------------------------------------------------------------------------------------


And('Enter registered login id value', function () {
  cy.readFile(BuisnessReg).then((usermobile) => {
    let lid = usermobile.CorporateLoginId
    cy.log(lid)
    registerPage.getLoginID().type(lid, { force: true })
  })
  registerPage.getFirstName().type("Test")
})

Then('Login id Error message is displayed', function () {
  registerPage.getLoginError().find('small.text-danger').should('contain', ' Value is not unique ');
})

And('Enter registered email id value', function () {
  cy.readFile(BuisnessReg).then((usermobile) => {
    let eid = usermobile.DistributerEmailId
    cy.log(eid)
    registerPage.getEmailID().type(eid, { force: true })
  })
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
})
Then('Email Error message is displayed', function () {
  registerPage.getLoginError().find('small.text-danger').should('contain', ' Value is not unique ');
})
