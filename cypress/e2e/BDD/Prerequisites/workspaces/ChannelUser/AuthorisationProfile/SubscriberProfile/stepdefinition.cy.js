/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../support/pageObjects/homePage';
import { recurse } from 'cypress-recurse';
import "../../../../../../../support/Utils/generic";
import "../../../../../../../support/Utils/authourizationcommands";

import myActivity from '../../../../../../../support/pageObjects/MyActivity/myActivity';
import authorizationManagement from '../../../../../../../support/pageObjects/AuthorizationProfileManagement/authorizationManagement';
import approvals from '../../../../../../../support/pageObjects/UserManagement/approvals';

//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const myActivityPage = new myActivity()
const approvalPage = new approvals()
const authorizationProfilePage = new authorizationManagement()
var AuthProfileName = 'cypress/fixtures/profileData/AuthProfile.json'
let BAlogin = 'cypress/fixtures/userData/BusinessAdminLogin.json'
var profName
function getRandomName() {
  profName = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    profName += possible.charAt(Math.floor(Math.random() * possible.length));
  return profName;
}







//------------------------ Authorization Profile Management----------------------------------

Then('View Subscriber authorization profile and Write Created on time', function () {
  
  myActivityPage.getAuthCreatedOnTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(AuthProfileName).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(AuthProfileName, data)
    })
  })
})

And('Navigate to My Activity for Subscriber authorization profile and Aplly required filters', function () {
  welcomePage.getMyActivity().click()
  myActivityPage.getFilter().click({ force: true })
  
  myActivityPage.getSubmittedStatus().click()
  myActivityPage.getApply().click()
})
