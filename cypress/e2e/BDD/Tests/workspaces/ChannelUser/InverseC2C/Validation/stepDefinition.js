/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import homePage from '../../../../../../../support/pageObjects/homePage';
import "../../../../../../../support/Utils/generic";
import "../../../../../../../support/Utils/securityCommands";
import "../../../../../../../support/Utils/authourizationcommands"
import authorizationManagement from '../../../../../../../support/pageObjects/AuthorizationProfileManagement/authorizationManagement';
import approvals from '../../../../../../../support/pageObjects/UserManagement/approvals';
//----------------Object Declaration----------------------------------------------------------
const approvalPage = new approvals()
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
//----------TC_149-----To verify that system admin should be able to add authorization profile------------



And('select Business user type and select user role Head Merchant', function () {
  
authorizationProfilePage.getBusinessType().click({ force: true })
//authorizationProfilePage.getBusinessType().focused()

// cy.waitUntil(() => {
//    return cy.iframe().find('h4.font-weight-bold.mt-4.mb-2').contains(' Select user role: ')
//  })
//cy.intercept('/mobiquitypay/v1/privileges').as('@selectHMER')
authorizationProfilePage.getHeadmerchant().click({ force: true }) 
//cy.wait('@selectHMER') 
 })
//-----------------------SubscriberM1S1----------------------

Then('Fill all Details and Create Business authorization profile', function () {
  authorizationProfilePage.getProfileName().clear({ force: true }).type(getRandomName(), { force: true }),
  
  cy.readFile(AuthProfileName).then((data) => {
    data.BusinessProfileName = profName
    cy.writeFile(AuthProfileName, data)
  })
  authorizationProfilePage.getBusinessModule().contains(" Business Services ").click( { force:true })
  cy.selectModule1()
  authorizationProfilePage.getAdd().click({ force: true })
  authorizationProfilePage.getConfirm().click({ force: true })
  authorizationProfilePage.getProfileDoneButton().click({ force: true })
})

//----------------------Approvals------------------------
Then('Approve the Business authorization user', function () {
welcomePage.getApprovaltab().click()
approvalPage.getCurrentDateRowData().eq(0).click({ force: true })
authorizationProfilePage.getApproveButton().click({ force: true })
authorizationProfilePage.getApproveButtonSubmit().click({ force: true })  
})

//--------------------------------------------------------------
When('Check with Inverse C2C transaction' , function (){
  cy.get('fd-nested-list__item lui-collapsible-item svelte-sigym8').should('not.have', ' Inverse C2C Transaction ')
})
