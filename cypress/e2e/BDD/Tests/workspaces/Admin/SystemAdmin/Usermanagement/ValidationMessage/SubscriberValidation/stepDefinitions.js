/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And } from "@badeball/cypress-cucumber-preprocessor";
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

And('Fill all required details and Enter Email and Contact Number which are not verified and confirm Error message', function () {
  //-------------------Random Data-----------------------------------------------------------------
  let mobileut1;
  const m = parseInt(Date.now() / 100000);
  const q = m + 1
  mobileut1 = "77" + q
  cy.getBasicInfoTextFields()
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  cy.MobileNumber()
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
  registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })
})

//---------------------------------------------TC_183--------------------------------------------------------
And('Fill all required details and Enter Invalid value and confirm Error message', function () {
  registerPage.getFirstName().type("@#", { force: true })
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getErrorMessage().should('contain', ' Only alphabets and space are allowed and max length is 80 ')
})



//-------------------------------------TC_187-------------------------------------------------

And('Fill all required details and enter registered EmailID and confirm Error message', function () {
  cy.readFile(subRegistration).then((usermobile) => {
    let eid = usermobile.SubEmailId
    cy.log(eid)
    registerPage.getEmailID().type(eid, { force: true })
  })
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
})
