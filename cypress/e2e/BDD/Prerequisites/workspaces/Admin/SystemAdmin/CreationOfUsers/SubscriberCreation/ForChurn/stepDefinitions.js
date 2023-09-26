/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import { validate } from "schema-utils";
import ChurnManagement from '../../../../../../../../../support/pageObjects/ChurnManagement/ChurnManagement';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import myActivity from '../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import securityQuestion from '../../../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';
import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../../support/Utils/ChurnCommands";
import "../../../../../../../../../support/Utils/comissioncommands";
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/subscriberCommands";
//----------------Object Declaration-----------------------------------------------------------

const pageLogin = new loginPage()
const churnManagementPage = new ChurnManagement()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const myActivityPage = new myActivity()
const manageUsersPage = new manageUsers()
const securityQuestionPage = new securityQuestion()
const uuid = () => Cypress._.random(1e2)
Amount = uuid()

var CashFile = 'cypress/fixtures/userData/cashIn&cashout.json'
const SubRegistration = 'cypress/fixtures/userData/subscriberReg.json'
const churnSubRegistration = 'cypress/fixtures/userData/churnSubscriberReg.json'
var loginId, KycValue, name, Amount

const timestamp = (new Date).getTime()
KycValue = "A" + timestamp

//----------------------------------------------------------------------------------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


//--------------------------------------------------------------------------------------------------------

And('Assert Created Subscriber Mobile Number and Write Created on time for Churn Management', function () {
  cy.readFile(churnSubRegistration).then((user) => {
    let SubMobile = user.churnSubscriberRegistration
    var SUBMobile = " " + SubMobile
    manageUsersPage.getAssertMobile().eq(1).should('contain', SUBMobile)
  })
  myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(churnSubRegistration).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(churnSubRegistration, data)
    })
  })
})
//-----------------------------------------------------------------------------------------------

And('User click on Subscriber submitted user data for Churn', function () {
  cy.getApproval(churnSubRegistration)
})

And('Enter all the required subscriber details for Churn Initiation', function () {
  //-------------------Random Data-----------------------------------------------------------------
  let mobileut1;
  const m = parseInt(Date.now() / 100000);
  const q = m + 61
  mobileut1 = "77" + q
  cy.getBasicInfoTextFields()
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  cy.MobileNumber()

  cy.getSubEmailID()
  if (Cypress.env('otpVerification').includes("Yes")) {
    cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else {
    cy.log("No OTP verification required")
  }
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
  registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })
  // cy.writeFile(churnSubRegistration, { churnSubscriberRegistration: mobileut1 })

  registerPage.getMobileNumber().invoke('val').then((val) => {
    cy.readFile(churnSubRegistration).then((data) => {
      data.churnSubscriberRegistration = val
      cy.writeFile(churnSubRegistration, data)
    })
  })
})


And('Assert Created Subscriber Mobile Number for Bulk and Write Created on time', function () {
  cy.readFile(churnSubRegistration).then((user) => {
    let SubMobile = user.churnSubscriberRegistrationBulkUpload
    var SUBMobile = " " + SubMobile
    manageUsersPage.getAssertMobile().eq(1).should('contain', SUBMobile)
  })
  myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(churnSubRegistration).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(churnSubRegistration, data)
    })
  })
})

And('Enter all the required subscriber details for bulk upload', function () {
  //-------------------Random Data-----------------------------------------------------------------
  let mobileut2;
  const m = parseInt(Date.now() / 100000);
  let k = m + 31
  mobileut2 = "77" + k
  cy.getBasicInfoTextFields()
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  cy.MobileNumber()

  cy.getSubEmailID()
  if (Cypress.env('otpVerification').includes("Yes")) {
    cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else {
    cy.log("No OTP verification required")
  }
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
  registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })

  registerPage.getMobileNumber().invoke('val').then((val) => {
    cy.readFile(churnSubRegistration).then((data) => {
      data.churnSubscriberRegistrationBulkUpload = validate
      cy.writeFile(churnSubRegistration, data)
    })
  })
})

