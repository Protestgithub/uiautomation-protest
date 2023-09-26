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

//--------------------------------------------------------------------------------------

And('Select User type as Adminstrator and click on Customer care Admin', function () {
  pageLogin.getiFrame()
  registerPage.getregisterPageTitle().should('be.visible')
  registerPage.getSelectUserTypeTab().contains('Administrator').click({ force: true })
  registerPage.getSelectUserTypeTab().contains('Administrator').focused()
  cy.waitUntil(() => {
    return cy.iframe().find('div.mat-radio-label-content').should('be.visible')
  })
  registerPage.getUserRole().contains('Customer care Admin').click({ force: true })
  registerPage.getRegistrationMode().eq(0).click({ force: true })
})

And('Enter all the details for CCA', function () {
  //-------------------Random Data-----------------------------------------------------------------
  cy.getBasicInfoTextFields()

  registerPage.getAllBasicFormDropDown().each(($el) => {
    cy.wrap($el).select(1)
  })
  cy.MobileNumber()
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  cy.getCCAdminEmailID()

  registerPage.getMobileNumber().invoke('val').then((val) => {
    cy.readFile(filename).then((data) => {
      data.CCAMobileNumber = val
      cy.writeFile(filename, data)
    })
  })
})

And('Save Customer Care Admin LoginID', function () {
  registerPage.getLoginID().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(filename).then((data) => {
      data.CCALoginId = val
      cy.writeFile(filename, data)
    })
  })
})

And('Enter Customer Care Admin Profile Details', function () {
  registerPage.getNextButtonBasic().click({ force: true })
  // if (Cypress.env('app').includes('Core')) {
  registerPage.getSecurityProfile().select('CustomerCareAdminSecurityProfile', { force: true })
  registerPage.getAuthProfile().select('CCEDefault Profile', { force: true })
  //}
  // else {
  //     registerPage.getAllProfileFormDropDown().each(($el) => {
  //       cy.wrap($el).select(1)
  //     })
  //   }
  registerPage.getNextButtonProfile().click({ force: true })
  registerPage.getSubmitButton().click({ force: true })
})


And('Navigate to My Activity and Apply Add User filters', function () {
  welcomePage.getMyActivity().click()
  myActivityPage.getFilter().click({ force: true })
  myActivityPage.getAddUser().click({ force: true })
  myActivityPage.getSubmittedStatus().click()
  myActivityPage.getApply().click()
})

And('Assert Created Customer care Admin Mobile Number and Write Created on time', function () {
  cy.readFile(filename).then((user) => {
    let CAMobile = user.CCAMobileNumber
    var CCAMobile = " " + CAMobile
    manageUsersPage.getAssertMobile().eq(1).should('contain', CCAMobile)
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

And('User click on submitted user data for CCA', function () {
  cy.getApproval(filename)
})

Given('Login into Mobiquity Portal as System admin Checker1', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.SysAdminlogin2()
})

Given('Login into Mobiquity Portal as System admin Checker3', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.SysAdminlogin4()
})

// And('Select User type as Adminstrator and click on BusinessAdmin', function () {
//   pageLogin.getiFrame()
//   registerPage.getregisterPageTitle().should('be.visible')
//   registerPage.getSelectUserTypeTab().eq(1).click({ force: true })
//   registerPage.getSelectUserTypeTab().eq(1).focused()
//   cy.waitUntil(() => {
//     return cy.iframe().find('div.mat-radio-label-content').should('be.visible')
//   })
//   registerPage.getUserRole().eq(0).click({ force: true })
//   registerPage.getRegistrationMode().eq(0).click({ force: true })
// })