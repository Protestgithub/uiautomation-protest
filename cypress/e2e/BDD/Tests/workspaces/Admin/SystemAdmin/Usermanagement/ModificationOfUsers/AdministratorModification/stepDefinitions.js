/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import myActivity from '../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/registration";
import "../../../../../../../../../support/Utils/subscriberCommands";

//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
const myActivityPage = new myActivity()
const uuid = () => Cypress._.random(1e8)
const uuid1 = () => Cypress._.random(1e8)
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()
var loginId, mobile, KycValue, amount, name
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp
mobile = "77" + uuid1()
var mobile1, loginId, name
mobile1 = "77" + uuid()
var filename = 'cypress/fixtures/userData/AdministratorData.json'
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'

//--------------------------------------------------------------------------------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 3; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


//----------------Test Scripts---------------------------------------------------------------------------
And('Click on user management and Manage users',function(){
  welcomePage.getUserManagementOption().scrollIntoView()
  welcomePage.getUserManagementOption().click()
      cy.intercept('/mobiquitypay/v1/ums/user/search*').as('getSearch')
    welcomePage.getManageUsersLink().click()
    cy.wait('@getSearch', {timeout:20000})
    cy.wait(2000)
})
And('Search Business Admin', function () {
  cy.getBAMobileNumber()
  manageUsersPage.getSearchUserButton().click({ force: true })
})

And('System Admin is able to edit details of the Adminstrator user', function () {
  manageUsersPage.getEditToolTip().eq(0).click({ force: true })
  registerPage.getFirstName().clear().type(getRandomName() + "Automation")
  registerPage.getNextButtonBasic().click({ force: true })
  registerPage.getNextButtonProfile().click({ force: true })
})

When('Navigate to Checker Approvals and filter by Modified status', function () {

  welcomePage.getApprovalTab().click({force:true})
  //------------------------------------Filter the data--------------------------------------------------
  pageLogin.getiFrame()
  approvalPage.getFilter().click({ force: true })
  approvalPage.getModificationUserCheckBox().click({ force: true })
  approvalPage.getSubmittedCheckBox().click({ force: true })
  approvalPage.getApplyFilter().click({ force: true })
})

And('Navigate to My Activity and Apply Modified User filters', function () {
  welcomePage.getMyActivity().click()
  myActivityPage.getFilter().click({ force: true })
  cy.wait(2000)
  myActivityPage.getModificationOfUser().click({ force: true })
  myActivityPage.getSubmittedStatus().click()
  myActivityPage.getApply().click()
})


And('Search with CCA Mobile Number', function () {
  cy.getCCAMobileNumber()
  manageUsersPage.getSearchUserButton().click({ force: true })
})

//---------------------------EmailID------------------------------------------------------

And('Search with CCA EmailID', function () {
  cy.getCCAEmailID()
  manageUsersPage.getSearchUserButton().click({ force: true })
})
//--------------------------LoginID--------------------------------------------------------
And('Search with CCA LoginID', function () {
  cy.getCCALoginID()
  manageUsersPage.getSearchUserButton().click({ force: true })
})

//--------------------------------------------------------------------------------------------------------
And('Assert Created Business Admin Mobile Number and Write Created on time for Business Administrator modification', function () {
  cy.readFile(filename).then((user) => {
    let BAMobile = user.BAMobileNumber
    var BBAMobile = " " + BAMobile
    

      manageUsersPage.getAssertMobile().eq(0).should('contain', BBAMobile)
   
   
  })
  myActivityPage.getCreatedOnTime().eq(1).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(filename).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(filename, data)
    })
  })
})


And('Assert Created Customer care Admin Mobile Number and Write Created on time for modification', function () {
  cy.readFile(filename).then((user) => {
    let CAMobile = user.CCAMobileNumber
    var CCAMobile = " " + CAMobile
      manageUsersPage.getAssertMobile().eq(0).should('contain', CCAMobile)
  
  })

  myActivityPage.getCreatedOnTime().eq(1).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(filename).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(filename, data)
    })
  })
})

//-----------------------------------------------------------------------------
Then('Confirm the edit details', function () {
  manageUsersPage.getConfirmButton().click({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('.text-center.text-success').should('be.visible')
  })
  registerPage.getModifiedConfirmationText().should('contain', this.data2.confirmationMessage.successMessage)
  manageUsersPage.getDoneButton().click({ force: true })
})

Then('Approve the edit details', function () {
  approvalPage.getApproveConfirmationMessage().should('be.visible')
  approvalPage.getApproveConfirmationMessage().should('contain', this.data2.confirmationMessage.editUser)
})


//-----------------------------Notification----------------------------------

And('Approve the Users and Check for SMS Notification sent to Administrator user', function () {
  cy.getMessage(Cypress.env('apiBaseURL'), Cypress.env('port'))
})