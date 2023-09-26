/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../support/pageObjects/loginPage';


import SecurityProfilePage from '../../../../../../support/pageObjects/SecurityProfile/SecurityProfilePage';
import "../../../../../../support/Utils/generic";
import "../../../../../../support/Utils/securityCommands";
//import { recurse } from 'cypress-recurse';

//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const securityProfilePage = new SecurityProfilePage()
//const registerPage = new register()
var SecurityProfileNamePath = 'cypress/fixtures/profileData/SecurityProfileName.json'
var SubProfileName = 'cypress/fixtures/profileData/securityProfile.json'
var profName

//----------------BDD Hooks-----------------------------------------------------------------


//----------------------------------------POC - CODE-------------------------------------------------------
//---------------------------------------------System Admin Login----------------------------------------------------

// Given('Login into Mobiquity Portal as System admin Maker', function () {
//   cy.launchURL(Cypress.env('Adminurl'))
//   cy.SysAdminlogin()
//   cy.fixture('userData/SystemAdminLogin.json').then((data) => {
//     let Name = data.SysAdminMakerName
//     //cy.checkWelcomeText(Name)
//   })
// })


//------------TC_109--------------------------Security Profile------------------------------------------------
//----------------------------------------Subscriber----------------------------------------------------

// When('Navigate to Security and click to select security profile', function () {
//   welcomePage.getSecurityLink().scrollIntoView()
//   welcomePage.getSecurityLink().click({ force: true })
//   welcomePage.getSecurityProfileLink().click({ force: true })
//   securityProfilePage.getSecurityProfilePageTitle().should('contain', this.data6.securityProfilePageTitle)
// })



//------------TC_110--------------------default security profile------------------------------------------------

And('Filter by slecting Default', function () {
  pageLogin.getiFrame()
  securityProfilePage.getFilter().click({ force: true })
  // securityProfilePage.getuserdefined().click()
  //securityProfilePage.getsubscriber().should('contain',)
  cy.waitUntil(() => {
    return cy.iframe().find('.row.dark.font-weight-bold.category-div.ng-star-inserted').eq(0).should('be.visible')
  })
  securityProfilePage.getsubscriber().click()
  // 
  securityProfilePage.getApplyFilter().scrollIntoView()
  securityProfilePage.getApplyFilter().click()
  // securityProfilePage.getShowDropDown().click({ force: true })
  //securityProfilePage.getSelectFromDropDown().click({ force: true })
  cy.getDelete(SecurityProfileNamePath)
  //securityProfilePage.getDelete().click({force: true})
  securityProfilePage.getComment().type(this.data6.Comment)
  securityProfilePage.getYesButton().click()
})
//----------------------------------------------------------------------------------------------------
And('Filter by selecting default business admin', function () {
  pageLogin.getiFrame()
  securityProfilePage.getFilter().click({ force: true })
  // securityProfilePage.getuserdefined().click()
  //securityProfilePage.getsubscriber().should('contain',)
  cy.waitUntil(() => {
    return cy.iframe().find('.row.dark.font-weight-bold.category-div.ng-star-inserted').eq(0).should('be.visible')
  })
  securityProfilePage.getbusinessadmin().click()
  // 
  securityProfilePage.getApplyFilter().scrollIntoView()
  securityProfilePage.getApplyFilter().click()
  // securityProfilePage.getShowDropDown().click({ force: true })
  //securityProfilePage.getSelectFromDropDown().click({ force: true })
  cy.getDeletebusinesAadmin(SecurityProfileNamePath)

  //securityProfilePage.getDelete().click({force: true})
  securityProfilePage.getComment().type(this.data6.Comment)
  securityProfilePage.getYesButton().click()
})
//-------------------------------------------------------------------------------------------------


And('Filter by selecting default Distributer', function () {
  pageLogin.getiFrame()
  securityProfilePage.getFilter().click({ force: true })
  // securityProfilePage.getuserdefined().click()
  //securityProfilePage.getsubscriber().should('contain',)
  cy.waitUntil(() => {
    return cy.iframe().find('.row.dark.font-weight-bold.category-div.ng-star-inserted').eq(0).should('be.visible')
  })
  securityProfilePage.getdistributer().click()
  // 
  securityProfilePage.getApplyFilter().scrollIntoView()
  securityProfilePage.getApplyFilter().click()
  // securityProfilePage.getShowDropDown().click({ force: true })
  //securityProfilePage.getSelectFromDropDown().click({ force: true })
  cy.getDeleteDistributer(SecurityProfileNamePath)
  //securityProfilePage.getDelete().click({force: true})
  securityProfilePage.getComment().type(this.data6.Comment)
  securityProfilePage.getYesButton().click()
})
//------------------------------------------------------------------------------------------------


And('Filter by selecting default CCA admin', function () {
  pageLogin.getiFrame()
  securityProfilePage.getFilter().click({ force: true })
  // securityProfilePage.getuserdefined().click()
  //securityProfilePage.getsubscriber().should('contain',)
  cy.waitUntil(() => {
    return cy.iframe().find('.row.dark.font-weight-bold.category-div.ng-star-inserted').eq(0).should('be.visible')
  })
  securityProfilePage.getCCAAdmin().click()
  // 
  securityProfilePage.getApplyFilter().scrollIntoView()
  securityProfilePage.getApplyFilter().click()
  // securityProfilePage.getShowDropDown().click({ force: true })
  //securityProfilePage.getSelectFromDropDown().click({ force: true })
  cy.getDeleteCustomercareAdmin(SecurityProfileNamePath)
  //securityProfilePage.getDelete().click({force: true})
  securityProfilePage.getComment().type(this.data6.Comment)
  securityProfilePage.getYesButton().click()
})
//-----------------------------------------------------------------------------------------------


Then('Verify the Success Message of security', function () {
  cy.waitUntil(() => {
    return cy.iframe().find('simple-snack-bar.mat-simple-snackbar.ng-star-inserted').should('be.visible')
  })
  securityProfilePage.getSuccessMsg().contains(this.data6.SuccessMsg)
})
