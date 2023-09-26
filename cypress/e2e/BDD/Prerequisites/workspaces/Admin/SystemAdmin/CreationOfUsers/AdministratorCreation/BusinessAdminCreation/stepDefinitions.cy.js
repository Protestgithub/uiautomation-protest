/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import { recurse } from 'cypress-recurse';
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../../../support/Utils/AdministratorCommands"
import "../../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../../support/Utils/registration";
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import myActivity from '../../../../../../../../../support/pageObjects/MyActivity/myActivity';

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
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


//----------------Test Scripts---------------------------------------------------------------------------

//--------------------------User Management--------------------------------------------------------------

//---------------------------------------------System Admin Login----------------------------------------------------


And('Select User type as Adminstrator and click on BusinessAdmin', function () {
  pageLogin.getiFrame()
  registerPage.getregisterPageTitle().should('be.visible')
  registerPage.getSelectUserTypeTab().contains('Administrator').click({ force: true })
  registerPage.getSelectUserTypeTab().contains('Administrator').focused()
  cy.waitUntil(() => {
    return cy.iframe().find('div.mat-radio-label-content').should('be.visible')
  })
  registerPage.getUserRole().contains('Business Admin').click({ force: true })
  registerPage.getRegistrationMode().eq(0).click({ force: true })
})

And('Enter all the required details for Business Admin', function () {
  //-------------------Random Data-----------------------------------------------------------------
  cy.getBasicInfoTextFields()
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getAllBasicFormDropDown().each(($el) => {
    cy.wrap($el).select(1)
  })
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })

  cy.MobileNumber()
  cy.wait(2000)
  cy.getEmailID()

  registerPage.getMobileNumber().invoke('val').then((val) => {
    cy.readFile(filename).then((data) => {
      data.BAMobileNumber = val
      cy.writeFile(filename, data)
    })
  })
})

And('Save Business Admin LoginID', function () {
  registerPage.getLoginID().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(filename).then((data) => {
      data.BALoginId = val
      cy.writeFile(filename, data)
    })
  })
})

And('Enter Business Admin Profile Details', function () {
  registerPage.getNextButtonBasic().click({ force: true })
  // if (Cypress.env('app').includes('Core')) {
  registerPage.getSecurityProfile().select('BusinessAdminSecurityProfile', { force: true })
  registerPage.getAuthProfile().select('BusinessAdminDefault Profile', { force: true })
  //}
  //else {
  // registerPage.getAllProfileFormDropDown().each(($el) => {
  //cy.wrap($el).select(1)
  //})
  // }
  registerPage.getNextButtonProfile().click({ force: true })
  registerPage.getSubmitButton().click({ force: true })
})

And('Navigate to My Activity and Apply required filters', function () {
  welcomePage.getMyActivity().click()
  cy.wait(3000)
  myActivityPage.getFilter().click({ force: true })
  myActivityPage.getAddUser().click({ force: true })
  myActivityPage.getSubmittedStatus().click()
  myActivityPage.getApply().click()
  cy.wait(3000)
})


And('Navigate to My Activity and Apply required filters1', function () {
  welcomePage.getMyActivity().click()
  myActivityPage.getFilter().click({ force: true })
  myActivityPage.getSubmittedStatus().click()
  myActivityPage.getApply().click()
})

And('Assert Created Business Admin Mobile Number and Write Created on time for Business Administrator', function () {
  cy.readFile(filename).then((user) => {
    let BAMobile = user.BAMobileNumber
    var BBAMobile = " " + BAMobile
    manageUsersPage.getAssertMobile().eq(1).should('contain', BBAMobile)
  })
  myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(filename).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(filename, data)
    })
  })
})


And('User click on Buissness Admin submitted user data', function () {
  cy.getApproval(filename)
})


And('Approve the Users for Admin Creation', function () {
  approvalPage.getApproveButton().click({ force: true })
  cy.intercept('/mobiquitypay/serviceRequest/resume/any').as('getApproveRequest')
  approvalPage.getApproveRequest().click({ force: true })
  cy.wait('@getApproveRequest')
})


