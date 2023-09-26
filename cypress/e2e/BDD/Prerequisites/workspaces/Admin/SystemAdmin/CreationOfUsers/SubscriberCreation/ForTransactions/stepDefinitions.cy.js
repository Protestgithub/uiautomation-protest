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
KycValue = getRandomName() + timestamp
mobile = "77" + uuid1()
var mobile1, loginId, name
mobile1 = "77" + uuid()
var filename = 'cypress/fixtures/userData/AdministratorData.json'
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'

//--------------------------------------------------------------------------------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 1; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


And('Enter all the required subscriber details to initiate Subscriber creation for UMS', function () {

  //-------------------Random Data-----------------------------------------------------------------
  let mobileut1;
  const m = parseInt(Date.now() / 100000);
  const q = m + 74
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

  registerPage.getMobileNumber().invoke('val').then((val) => {
    cy.readFile(subRegistration).then((data) => {
      data.subscriberMobile = val
      cy.writeFile(subRegistration, data)
    })
  })
})

And('Save Subscriber LoginID', function () {
  registerPage.getLoginID().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(subRegistration).then((data) => {
      data.subscriberLoginId = val
      cy.writeFile(subRegistration, data)
    })
  })
})

And('Enter KYC Details', function () {
  registerPage.getNextButtonBasic().click({ force: true })
  registerPage.getKycDropDownButton().eq(0).click({ force: true })

  //----------------------KYC-----------------------------------------------------------------------
  if (Cypress.env('app').includes('Core')) {
    registerPage.getKycIDType().select(this.data2.KycInfo.KycIDType, { force: true })
    registerPage.getKycIDValue().type(KycValue, { force: true })
    registerPage.getKycGracePeriod().select(1, { force: true })
  }
  else {
    registerPage.getAllKYCDropDown().each(($el) => {
      cy.wrap($el).select(1)
    })
    cy.getKYCTextFields()
  }
  registerPage.getMakeThisPrimaryButton().click({ force: true })
})



And('Enter Subscriber Profile Details', function () {
  registerPage.getNextButtonBasic1().click({ force: true })
  if (Cypress.env('app').includes('Core')) {
    registerPage.getSecurityProfile().contains('SecurityProfile').invoke('index')
      .then((index) => {
        registerPage.getSecurityProfile().select(index, { force: true })
      })
    registerPage.getAuthProfile().contains('Default').invoke('index')
      .then((index) => {
        registerPage.getAuthProfile().select(index, { force: true })
      })
    registerPage.getReguProfile().select("FullKycprofile", { force: true })
    registerPage.getMarketingProfile().contains('Default').invoke('index')
      .then((index) => {
        registerPage.getMarketingProfile().select(index, { force: true })
      })
  }
  else {
    registerPage.getAllProfileFormDropDown().each(($el) => {
      cy.wrap($el).select(1)
    })
  }
  registerPage.getNextButtonBasic2().click({ force: true })
  registerPage.getSubmitButton().click({ force: true })
})

And('Assert Created Subscriber Mobile Number and Write Created on time to initiate Subscriber creation', function () {
  cy.readFile(subRegistration).then((user) => {
    let SubMobile = user.subscriberMobile
    var SUBMobile = " " + SubMobile
    // if(Cypress.env('version').includes('x.4')){
    //   manageUsersPage.getAssertMobile().eq(0).should('contain', SUBMobile)
    // }
    // else{
    manageUsersPage.getAssertMobile().eq(1).should('contain', SUBMobile)
    // }
  })
  myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(subRegistration).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(subRegistration, data)
    })
  })
})

//-----------------------Profile------------------------------------------------------------------------

And('User click on Subscriber submitted user data', function () {
  cy.getApproval(subRegistration)
})

And('Click on view Details', function () {
  cy.intercept('/mobiquitypay/v1/ums/modification-schema?*').as('getEditDetails')
  manageUsersPage.getViewAllDetailsButton().click({ force: true })
  cy.waitUntil(() => {
    return cy.iframe().find('h3.font-weight-bold').eq(0).should('be.visible', { force: true })
  })
  cy.wait('@getEditDetails')
})
