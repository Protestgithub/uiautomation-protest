/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../support/pageObjects/loginPage';

import "../../../../../support/Utils/generic";
//import register from '../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../support/pageObjects/UserManagement/manageUsers';
//import ErrorMessage from '../../../../../support/pageObjects/UserManagement/ErrorMessage';
import myActivity from '../../../../../support/pageObjects/MyActivity/myActivity';
//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const myActivityPage = new myActivity()
//const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
//const ErrorM = new ErrorMessage()
let Sysfilelogin = 'cypress/fixtures/userData/SystemAdminLogin.json'
var SubProfileName = 'cypress/fixtures/profileData/Profile.json'
var mobile, Password1
var name
var LoginId1
const uuid12 = () => Cypress._.random(1e8)
LoginId1 = uuid12()
var loginId
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
//----------------BDD Hooks-----------------------------------------------------------------


// //superadminm
// Given('Login into Mobiquity Portal as Super admin Maker', function () {
//     cy.launchURL(Cypress.env('Adminurl'))
//     cy.login(this.data1.masteradminmaker.superadminm, this.data1.masteradminmaker.superadminmPwd)
//     //cy.checkWelcomeText(this.data1.superadminm.superadminmaker)
//   })-----------------------------------------------------------------------------
And('Enter Mobile number1 or KYC number of Business Admin in Search', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile(Sysfilelogin).then((data) => {
    // var mobileSys
    var mobile
    mobile = data.MobileNumber
    manageUsersPage.getSearchUser().type(mobile, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})

//------------------------------------------------------------------------------------
And('Enter Mobile number2 or KYC number of Business Admin in Search', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile(Sysfilelogin).then((data) => {
    // var mobileSys
    var mobile
    mobile = data.MobileNumber2
    manageUsersPage.getSearchUser().type(mobile, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})

//------------------------------------------------------------------------------------
And('Enter Mobile number3 or KYC number of Business Admin in Search', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile(Sysfilelogin).then((data) => {
    // var mobileSys
    var mobile
    mobile = data.MobileNumber3
    manageUsersPage.getSearchUser().type(mobile, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})


And('Enter Mobile number5 or KYC number of Business Admin in Search', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile(Sysfilelogin).then((data) => {
    // var mobileSys
    var mobile
    mobile = data.MobileNumber5
    manageUsersPage.getSearchUser().type(mobile, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})

