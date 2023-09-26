/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import "../../../../../../../../../support/Utils/generic"
import "../../../../../../../../../support/Utils/securityCommands";
//import EnterpriseBulkUpload from '../../../../../../../../support/pageObjects/EnterpriseBulkUpload/EnterpriseBulkUpload';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';


//----------------Object Declaration----------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
//const BulkUploadPage= new bulkupload()
const manageUsersPage = new manageUsers()

//const BulkUploadPage= new EnterpriseBulkUpload()
var loginId
let businesslogin="cypress/fixtures/userData/BusinessUsersData.json"


const RegMob = 'userData/BusinessUsersData.json'

//------------------@Test-------------------------------------------------
//---------------Log in with corporate user credential-----------------------------

//------Navigate to User Management and Click on manage user-----------------------

//----Select user type-------------------------------------------------------------
Given ('Login with corporate user credential', function(){
  cy.launchURL(Cypress.env('Adminurl'))
  cy.launchbusinessURL(Cypress.env('Adminurl'))
  
  cy.frameLoaded(pageLogin.getiFrame())
  cy.readFile(businesslogin).then((data) => {
  let loginID = data.CorporateLoginId
  cy.login(loginID, this.data1.businessAdmin.businessadminPwd1)
})
})
And('Select user type as Other' , function() {
  manageUsersPage.getSelectOptn().select(1)
})
//---------------Enter Mobile number and KYC number in search menu-----------------

//--------------User Click on eye button-------------------------------------------

Then('Click on Account Info of User', function (){
    manageUsersPage.getAccinfo().click({ force:true })
    manageUsersPage.getAccountInfo().click({ force:true })

cy.waitUntil(() => {
        return cy.iframe().find('div>.mat-tab-label-content').eq(5).contains('Wallets')
      })

})

//------------------------------------------------------------------------------------------

//------------------------@Test----------------------------------------------------------
//---------------Log in with corporate user credential-----------------------------

//------Navigate to User Management and Click on manage user-----------------------

//----Select user type-------------------------------------------------------------

And('Select user type as Self and Search' , function() {
    manageUsersPage.getSelectOptn().select(2)
    manageUsersPage.getSearchUserButton().click( { force:true })
})
//---------------Enter Mobile number and KYC number in search menu-----------------

//--------------User Click on eye button-------------------------------------------

And('Click on eye button', function () {
    manageUsersPage.getEyeIcon().click({ force: true })
       cy.wait(2000)
    cy.waitUntil(() => {
        return cy.iframe().find('div>h3.font-weight-bold').eq(0).contains('Personal Information')
      })
    
  })

  //-----------------------------TC_347-----------------------------------------------------

And('Select user type as self' , function() {
    manageUsersPage.getSelectOptn().select(2)
    manageUsersPage.getSearchUserButton().click( { force:true })
    cy.wait(2000)
})

And('Verify the Balance of Employer' , function (){
    manageUsersPage.getBalance().contains(" balance ")
})

//////////////////////////////////////////////////////////////////////////////////////////

When('Navigate to User Management and Click on manage user', function () {
    welcomePage.getUserManagementOption().scrollIntoView()
    welcomePage.getUserManagementOption().click()
    cy.intercept('/mobiquitypay/v1/ums/user/search*').as('getSearch')
    welcomePage.getManageUsersLink().click()
    cy.wait('@getSearch', {timeout:20000})
    cy.wait(5000)
  })

And('Enter Mobile number and KYC number in search menu', function () {
    cy.fixture(RegMob).then((user) => {
      var RegMobile = user.registeredMobileCorp
      cy.log(RegMobile)
      manageUsersPage.getSearchUser().type(RegMobile)
    })
    manageUsersPage.getSearchUserButton().click({ force: true })
  })

And('User Click on eye button', function () {
    manageUsersPage.getEyeIcon().click({ force: true })
    cy.wait(2000)
  })
Then('Click on Account Info', function (){
    manageUsersPage.getAccinfo().click({ force:true })
    manageUsersPage.getAccountInfo().click({ force:true })
    manageUsersPage.getBankAcc().click({ force:true })
    
   
cy.waitUntil(() => {
        return cy.iframe().find('div[role="button"]').contains(' ACCOUNT NUMBER ')
    })
})