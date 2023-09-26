
/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
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
//var loginId
var BuisnessRegO2C = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;

}


//----------------BDD Hooks-----------------------------------------------------------------

//---------------------------------------------System Admin Login----------------------------------------------------
// Given('Login into Mobiquity Portal as System admin Maker', function () {
//     cy.launchURL(Cypress.env('Adminurl'))
//     cy.SysAdminlogin()
//     cy.fixture('userData/SystemAdminLogin.json').then((data)=>{
//       let Name = data.SysAdminMakerName
//       //cy.checkWelcomeText(Name)
//     })
//   })
//-------------------------------------------------------------------------------------
And('Enter Mobile number or KYC number of Business user in Search', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })

  cy.readFile(BuisnessRegO2C).then((data) => {
    // var mobileSys
    var mobile
    mobile = data.registeredMobileO2C
    manageUsersPage.getSearchUser().type(mobile, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})
Then('Verify Sucess Message to initiate businsess user creation', function () {
  cy.waitUntil(() => {
    return cy.iframe().find('simple-snack-bar.mat-simple-snackbar.ng-star-inserted').should('be.visible')
  })
  manageUsersPage.getRejectErrorMessage().should('contain', this.data2.Deletemsg.DeleteServicePaused)
})
And('User click on submitted user data for O2C', function () {
  cy.getApproval(BuisnessRegO2C)

})