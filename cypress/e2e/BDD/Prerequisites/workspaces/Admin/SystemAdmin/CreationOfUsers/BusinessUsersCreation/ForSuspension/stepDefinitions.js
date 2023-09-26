/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
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

const SubRegistration = 'cypress/fixtures/userData/subscriberReg.json'
var BuisnessRegSuspension = 'cypress/fixtures/userData/BusinessUserSuspensionData.json'

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


And('Assert Created Buissness User Mobile Number for Suspension and Write Created on time', function () {
  cy.readFile(BuisnessRegSuspension).then((user) => {
    let BUMobile = user.registeredMobile
    var BUDMobile = " " + BUMobile
    manageUsersPage.getAssertMobile().eq(1).should('contain', BUDMobile)
  })

  myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(BuisnessRegSuspension).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(BuisnessRegSuspension, data)
    })
  })
})


And('Enter all the required business user details for suspension', function () {
  let mobileut;
  const m = parseInt(Date.now() / 100000);
  let p = m + 48
  mobileut = "77" + p

  cy.iframe().find('select[data-test-id="title"]').select(this.data2.personalInfo.Title, { force: true })
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  cy.getBasicInfoTextFields()
  cy.MobileNumber()
  registerPage.getLatitude().clear().type(this.data2.personalInfo.Latitude, { force: true })
  registerPage.getSupportOnline().select(this.data2.personalInfo.online, { force: true })
  registerPage.getlongitude().clear().type(this.data2.personalInfo.Longitude, { force: true })
  if (Cypress.env('otpVerification').includes("Yes")) {
    cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else {
    cy.log("No OTP verification required")
  }
  cy.getEmailID()
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
  registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })
  if (Cypress.env('otpVerification').includes("Yes")) {
    cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
  }
  else {
    cy.log("No OTP verification required")
  }
  registerPage.getMobileNumber().invoke('val').then((val) => {
    cy.readFile(BuisnessRegSuspension).then((data) => {
      data.registeredMobile = val
      cy.writeFile(BuisnessRegSuspension, data)
    })
  })
})


And('Save BusinessUser LoginID for Suspension', function () {
  registerPage.getLoginID().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(BuisnessRegSuspension).then((data) => {
      data.LoginId = val
      cy.writeFile(BuisnessRegSuspension, data)
    })
  })
})

And('User click on Suspended submitted user data for Suspension', function () {
  cy.getApproval(BuisnessRegSuspension)
})