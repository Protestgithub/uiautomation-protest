/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import API from '../../../../../../../../../support/pageObjects/API';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';
import myActivity from '../../../../../../../../../support/pageObjects/MyActivity/myActivity';
import securityQuestion from '../../../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';
import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../../../../support/Utils/BusinessUserCommands";
import "../../../../../../../../../support/Utils/generic";
import "../../../../../../../../../support/Utils/subscriberCommands";


//----------------Object Declaration-----------------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
const APIPage = new API()
const myActivityPage = new myActivity()
const securityQuestionPage = new securityQuestion()
const uuid = () => Cypress._.random(1e8)
const uuid1 = () => Cypress._.random(1e6)
const uuuid = () => Cypress._.random(1e3)
amount = uuuid()
var loginId, mobile, KycValue, amount, name, ifscnum, accnumber, BankData
const kycid = () => Cypress._.random(1e8)
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp
mobile = "77" + uuid1()
var mobile1, Submobile, loginId, name
mobile1 = "77" + uuid()
var filename = 'cypress/fixtures/userData/AdministratorData.json'
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'
var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'
var BuisnessRegO2C = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var BankData = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'

//-----------------------------------variable declaration-----------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


And('Select User type as Business and click on Telco operator', function () {
  registerPage.getSelectUserTypeTab().contains('Business').click({ force: true })
  registerPage.getSelectUserTypeTab().contains('Business').focused()
  registerPage.getUserRole().contains('Telco Operator').click({ force: true })

  cy.waitUntil(() => {
    return cy.iframe().find('div.row.px-2').eq(0).should('be.visible', { force: true })
  })
  registerPage.getRegistrationMode().eq(0).click({ force: true })
})

And('Enter all the required business user details for Telco-Operator', function () {
  let mobileut;
  const m = parseInt(Date.now() / 100000);
  let p = m + 6
  mobileut = "77" + p
  cy.iframe().find('select[data-test-id="title"]').select(this.data2.personalInfo.Title, { force: true })
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  cy.getBasicInfoTextFields()
  cy.MobileNumber()

  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getState().select(this.data2.personalInfo.state, { force: true })
  registerPage.getCity().select(this.data2.personalInfo.city, { force: true })

  registerPage.getMobileNumber().invoke('val').then((val) => {
    cy.readFile(BuisnessReg).then((data) => {
      data.telcoMobile = val
      cy.writeFile(BuisnessReg, data)
    })
  })
})


And('Enter Telco-Operator Profile Details', function () {
  registerPage.getNextButtonBasic().click({ force: true })
  if (Cypress.env('app').includes('Core')) {
    registerPage.getReguProfile().select('FullKycprofile', { force: true })
    registerPage.getMarketingProfile().select('TELOPTDefaultMP', { force: true })
  }
  else {
    registerPage.getAllProfileFormDropDown().each(($el) => {
      cy.wrap($el).select(1)
    })
  }
  registerPage.getNextButtonProfile().click({ force: true })
  registerPage.getSMSC().select(this.data2.personalInfo.smscid, { force: true })
  registerPage.getTopUpId().select(this.data2.personalInfo.topupid, { force: true })
  registerPage.getVouchers().click({ force: true })
  registerPage.getRechargingOpt().select(this.data2.personalInfo.recharge, { force: true })
  registerPage.getDenominationOptional().type("123", { force: true })
  registerPage.getNextButtonOperatorProfile().click({ force: true })
  registerPage.getNextButtonBasic2().click({ force: true })
  registerPage.getSubmitButton().click({ force: true })
})

And('Assert Created Telco-Operator Mobile Number and Write Created on time', function () {
  cy.readFile(BuisnessReg).then((user) => {
    let TEMobile = user.telcoMobile
    var TOMobile = " " + TEMobile
    if (Cypress.env('version').includes('x.4')) {
      manageUsersPage.getAssertMobile().eq(0).should('contain', TOMobile)
    }
    else {
      manageUsersPage.getAssertMobile().eq(1).should('contain', TOMobile)
    }
  })
  myActivityPage.getCreatedOnTime().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(BuisnessReg).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(BuisnessReg, data)
    })
  })
})
