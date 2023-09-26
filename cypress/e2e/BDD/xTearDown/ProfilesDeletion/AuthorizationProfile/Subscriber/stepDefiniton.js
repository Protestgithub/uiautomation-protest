/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import authorizationManagement from '../../../../../../support/pageObjects/AuthorizationProfileManagement/authorizationManagement';
import homePage from '../../../../../../support/pageObjects/homePage';
import approvals from '../../../../../../support/pageObjects/UserManagement/approvals';
import "../../../../../../support/Utils/authourizationcommands";
import "../../../../../../support/Utils/generic";
import "../../../../../../support/Utils/securityCommands";
//----------------Object Declaration----------------------------------------------------------

const welcomePage = new homePage()
const authorizationProfilePage = new authorizationManagement()
var AuthProfileNamepath = 'cypress/fixtures/profileData/AuthProfile.json'
var profName
const approvalPage = new approvals()

function getRandomName() {
  profName = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    profName += possible.charAt(Math.floor(Math.random() * possible.length));
  return profName;
}

//----------------BDD Hooks-----------------------------------------------------------------

//---------------------------------------------Login----------------------------------------------------
//---------------------------------------------System Admin Login----------------------------------------------------
// Given('Login into Mobiquity Portal as System admin Maker', function () {
//   cy.launchURL(Cypress.env('Adminurl'))
//   cy.SysAdminlogin()
//   cy.fixture('userData/SystemAdminLogin.json').then((data)=>{
//     let Name = data.SysAdminMakerName
//    // cy.checkWelcomeText(Name)
//   })
// })
// Given('Login into Mobiquity Portal as System admin Checker1', function () {
//   cy.launchURL(Cypress.env('Adminurl'))
//   cy.SysAdminlogin2()
//   cy.fixture('userData/SystemAdminLogin.json').then((data)=>{
//     let Name = data.SysAdminChecker1Name
//     //cy.checkWelcomeText(Name)
//   })
// })
//--------------------------------------------------------------------------------------------------------

//------------------------------------- Authorization Profile Management----------------------------------

//----------TC_149-----To verify that system admin should be able to add authorization profile------------

// When('Select Authorization profile', function () {
//   authorizationProfilePage.getAuthorizationProfileManagement().scrollIntoView()
//   authorizationProfilePage.getAuthorizationProfileManagement().click({ force: true })
// })


And('Click on filters and select Subscriber', function () {
  // pageLogin.getiFrame()
  cy.wait(2000)
  authorizationProfilePage.getFilter().click({ force: true })
  authorizationProfilePage.getuserdefined().click()
  cy.wait(1000)
    if(Cypress.env('subscriberNamedAs').includes('Subscriber')){
    authorizationProfilePage.getsubscriber().click()
  }
  else{
    authorizationProfilePage.getcustomer().click()
  }
  authorizationProfilePage.getApplyFilter().scrollIntoView()
  cy.wait(1000)
  authorizationProfilePage.getApplyFilter().click()
  cy.getDeleteAuthProfile(AuthProfileNamepath)
  authorizationProfilePage.getDeleteCCA().click({ force: true })
  cy.wait(2000)
  authorizationProfilePage.getYesDeleteProfile().click()
cy.wait(2000)

})

// Then('Logout', function(){
//   welcomePage.getUserMenu().click()
//   welcomePage.getLogoutButton().click()
//   welcomePage.getLogoutYesButton().click()  
// })


//------------------------------------Approve----------------------------------------------------------
When('Navigate to Approvals', function () {

  welcomePage.getApprovaltab().click()
  
  cy.waitUntil(() => {
    return cy.get('[data-testid*="APPROVALS"]').click({ force: true })
  })
})


And('User click on submitted user data for Authorization profile', function () {
  approvalPage.getCurrentDateRowData().eq(0).click({ force: true })

})

Then('Verify Sucess Message for Authorization profile', function () {
  cy.waitUntil(() => {
    return cy.iframe().find('simple-snack-bar.mat-simple-snackbar.ng-star-inserted').should('be.visible')
  })
 // approvalPage.getSuccessMessage().contains("success")
})
//---------------------------------
// When('Select Authorization profile AND apply filter',function(){
//   authorizationProfilePage.getAuthorizationProfileManagement().scrollIntoView()
//   cy.intercept('/mobiquitypay/v1/authorization-profiles').as('all')
//   authorizationProfilePage.getAuthorizationProfileManagement().click({ force: true })
//   
//   authorizationProfilePage.getFilter().click({ force: true })
//   authorizationProfilePage.getUserdefinedCheckbox().click({ force: true })
//   authorizationProfilePage.getSystemadminCheckbox().click({ force: true })
//   authorizationProfilePage.getApplyButton().click()
//   
// })
// Then('click on delete icon of created authorization profile AND click on yes',function(){
// authorizationProfilePage.getProfileDelete().click({ force: true })
//   
//   authorizationProfilePage.getDeleteConfirm().click()
//   

// })