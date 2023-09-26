/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import { recurse } from 'cypress-recurse';
import "../../../../../../../../../support/Utils/authourizationcommands";
import "../../../../../../../../../support/Utils/generic";
import authorizationManagement from '../../../../../../../../../support/pageObjects/AuthorizationProfileManagement/authorizationManagement';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import "../../../../../../../../../support/Utils/securityCommands";

//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const authorizationProfilePage = new authorizationManagement()
var AuthProfileName = 'cypress/fixtures/profileData/AuthProfile.json'
var profName

function getRandomName() {
  profName = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    profName += possible.charAt(Math.floor(Math.random() * possible.length));
  return profName;
}
//---------------------------------------------Login----------------------------------------------------
//---------------------------------------------System Admin Login----------------------------------------------------


And('select BusinessAdmin user type and select user role', function () {
  authorizationProfilePage.getAdministratorType().click({ force: true })
  authorizationProfilePage.getAdministratorType().focused()
  cy.intercept('/mobiquitypay/v1/privileges?user-type=BCU').as('selectBA')
  authorizationProfilePage.getAdministratorBusinessAdmin().click({ force: true })
  cy.wait('@selectBA')
})

Then('Fill all Details and Create BusinessAdmin authorization profile', function () {
  authorizationProfilePage.getProfileName().clear({ force: true }).type(getRandomName(), { force: true }),
    
  authorizationProfilePage.getUserServicePreferences().click({ force: true })
  cy.readFile(AuthProfileName).then((data) => {
    data.businesAadmin = profName
    cy.writeFile(AuthProfileName, data)
  })
  authorizationProfilePage.getAdd().click({ force: true })
  authorizationProfilePage.getConfirm().click({ force: true })
  authorizationProfilePage.getProfileDoneButton().click({ force: true })
})


