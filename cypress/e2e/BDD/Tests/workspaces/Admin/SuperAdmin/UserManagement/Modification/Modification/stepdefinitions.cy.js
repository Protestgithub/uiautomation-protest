/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';

import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import ErrorMessage from '../../../../../../../../../support/pageObjects/UserManagement/ErrorMessage';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
const ErrorM = new ErrorMessage()
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



And('Click on edit', function () {
  manageUsersPage.getEditIcon().eq(1).click({ force: true })
})

And('Enter all required Fields', function () {

  registerPage.getFirstName().clear().type(getRandomName() + "Automation")
})

And('x.7 Enter all required Fields', function () {

  registerPage.getFirstName().clear().type(getRandomName() + "Automation")
})

And('Enter all Profile Details Modification', function () {
  registerPage.getNextButtonBasic().click({ force: true })
  if (Cypress.env('app').includes('Core')) {
    registerPage.getSecurityProfile().select('adminSecurityProfile', { force: true })
    registerPage.getAuthProfile().select(this.data2.personalInfo.authProfile2, { force: true })
  }
  else {
    registerPage.getAllProfileFormDropDown().each(($el) => {
      cy.wrap($el).select(1)
    })

  }
  registerPage.getNextButtonProfile().click({ force: true })
})