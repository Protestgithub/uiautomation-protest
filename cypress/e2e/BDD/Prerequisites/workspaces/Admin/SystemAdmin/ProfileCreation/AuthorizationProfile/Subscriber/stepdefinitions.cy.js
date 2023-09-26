/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import authorizationManagement from '../../../../../../../../../support/pageObjects/AuthorizationProfileManagement/authorizationManagement';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import "../../../../../../../../../support/Utils/authourizationcommands";
import "../../../../../../../../../support/Utils/generic";
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
//--------------------------------------------------------------------------------------------------------

//------------------------------------- Authorization Profile Management----------------------------------

//----------TC_149-----To verify that system admin should be able to add authorization profile------------

When('Select Authorization profile and add profile', function () {
  authorizationProfilePage.getAuthorizationProfileManagement().scrollIntoView()
  authorizationProfilePage.getAuthorizationProfileManagement().click({ force: true })
  authorizationProfilePage.getAddProfile().click({ force: true })
})

And('select Subscriber user type and select user role', function () {
  authorizationProfilePage.getAuthorizationUserType().click({ force: true })
  authorizationProfilePage.getAdministratorType().focused()
  cy.intercept('/mobiquitypay/v1/privileges?user-type=SUBS').as('selectUserRole')
  authorizationProfilePage.getAuthorizationUserRole().click({ force: true })
  cy.wait('@selectUserRole')
})
//-----------------------SubscriberM1S1----------------------

Then('Fill all Details and Create Subscriber authorization profile', function () {
  authorizationProfilePage.getProfileName().clear({ force: true }).type(getRandomName(), { force: true }),
  cy.wait(2000) 
  authorizationProfilePage.getUserServicePreferences().click({ force: true })
  cy.readFile(AuthProfileName).then((data) => {
    data.SubscriberProfileName = profName
    cy.writeFile(AuthProfileName, data)
  })
  authorizationProfilePage.getAdd().click({ force: true })
  cy.wait(2000)
  authorizationProfilePage.getConfirm().click({ force: true })
  authorizationProfilePage.getProfileDoneButton().click({ force: true })
})

//----------------------Approvals------------------------
Then('User approval for Authorization profile', function () {
  /*authorizationProfilePage.getApprovals().scrollIntoView()
  authorizationProfilePage.getApprovals().click({ force: true })
  authorizationProfilePage.getApprovalButtonTab().click()*/
  if(Cypress.env("version").includes("x.4"))
  {
  welcomePage.getApprovaltab1().click()
  }
  else{
    welcomePage.getApprovalTab().click()
  }
  

  //-------------------Added wait until------------------------
  // cy.waitUntil(()=>{
  //   return cy.iframe().find('h4.text-secondary').should('be.visible')
  // })
  
  authorizationProfilePage.getApproveButton().click({ force: true })
  authorizationProfilePage.getApproveButtonSubmit().click({ force: true })
})


Then('x.4 User approval for Authorization profile', function () {
  /*authorizationProfilePage.getApprovals().scrollIntoView()
  authorizationProfilePage.getApprovals().click({ force: true })
  authorizationProfilePage.getApprovalButtonTab().click()*/
  welcomePage.getversion4Approvaltab().click()

  //-------------------Added wait until------------------------
  // cy.waitUntil(()=>{
  //   return cy.iframe().find('h4.text-secondary').should('be.visible')
  // })
  authorizationProfilePage.getApproveButton().click({ force: true })
  authorizationProfilePage.getApproveButtonSubmit().click({ force: true })
})