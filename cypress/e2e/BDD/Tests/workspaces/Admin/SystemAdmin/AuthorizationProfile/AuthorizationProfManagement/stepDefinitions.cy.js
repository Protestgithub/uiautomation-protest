/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And,Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import authorizationManagement from '../../../../../../../../support/pageObjects/AuthorizationProfileManagement/authorizationManagement';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import "../../../../../../../../support/Utils/authourizationcommands";
import "../../../../../../../../support/Utils/generic";


//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const authorizationProfilePage = new authorizationManagement()
const welcomePage = new homePage()
const uid = () => Cypress._.random(1e6)
const id = uid()
var profName
var SubProfileName = 'cypress/fixtures/profileData/Profile.json'

//----------------BDD Hooks-----------------------------------------------------------------


//----------------Test Scripts---------------------------------------------------------------

//----------------Launch Mobiquity Portal URL and Login--------------------------------------


//----------TC_150-----To verify that system admin should be able to ViewAuthorization profile for the selected category------------------------------
When('Select Authorization profile', function () {
  authorizationProfilePage.getAuthorizationProfileManagement().click({ force: true })
})

Then('View Profiles', function () {
  authorizationProfilePage.getViewProfile().click({ force: true })
  authorizationProfilePage.getViewProfileSuccess().should('contain', this.data7.viewprofile)

})


//----------TC_151----To verify that system admin should be able to modify an already created authorization profile-------------------------------

Then('Click on Modify Icon in front of authorization profile to modify', function () {
  authorizationProfilePage.getViewProfile().click({ force: true })
  authorizationProfilePage.getEditProfile().click({ force: true })
  authorizationProfilePage.getModifyProfile().click({ force: true })
  authorizationProfilePage.getConfirm().click({ force: true })
  authorizationProfilePage.getViewProfileModifyDone().click({ force: true })
})

//----------------------Approvals------------------------
Then('User approval for modified Authorization profile', function () {
  if(Cypress.env('version').includes('x.4')){
    welcomePage.getversion4Approvaltab().click({ force: true })
  }
  else{
    cy.intercept('/mobiquitypay/v2/workflow_management/workflow/pending_records*').as('getApproval')
    welcomePage.getApprovalButtonTab().click({ force: true })
 cy.wait('@getApproval',{timeout:30000})
  }
 

  authorizationProfilePage.getApproveButton().click({ force: true })
  authorizationProfilePage.getApproveButtonSubmit().click({ force: true })
})


//----------TC_152-------To verify that System admin should be able to delete an authorization profile----------------------------

Then('Click on Modify Icon in front of authorization profile to delete', function () {
  authorizationProfilePage.getDeleteProfile().click({ force: true })
  authorizationProfilePage.getYesDeleteProfile().click({ force: true })
})

//--------------------------Saswat--------------------
And("Click on Authorization Profile", function () {
  authorizationProfilePage.getAuthorizationProfileManagement().click({ force: true })
  
});
Then("Click on Add Profile Button", function () {
  authorizationProfilePage.getAddProfile().click({ force: true })
  
});
And("Select User Role", function () {
  ;
  authorizationProfilePage.getSelectUser().click({ force: true })
});
// When('Select Authorization profile and apply filter', function () {

//   authorizationProfilePage.getAuthorizationProfileManagement().scrollIntoView()
//   cy.intercept('/mobiquitypay/v1/authorization-profiles').as('all')
//   authorizationProfilePage.getAuthorizationProfileManagement().click({ force: true })
//   
//   authorizationProfilePage.getFilter().click({ force: true })
//   authorizationProfilePage.getUserdefinedCheckbox().click({ force: true })
//   authorizationProfilePage.getSystemadminCheckbox().click({ force: true })
//   authorizationProfilePage.getApplyButton().click()
//   authorizationProfilePage.getProfileModify().click({ force: true })
//   authorizationProfilePage.getViewProfile().click({ force: true })
//   authorizationProfilePage.getProfileModify().click({ force: true })
//   authorizationProfilePage.getModifyProfile().click({ force: true })
//   authorizationProfilePage.getConfirm().click({ force: true })
//   authorizationProfilePage.getViewProfileModifyDone().click({ force: true })
//   
//   authorizationProfilePage.getLogoutButton().click()
// })