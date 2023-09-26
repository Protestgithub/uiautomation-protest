//-------------------------------------------------------------------Step-Definition------------------------------------------------------------------------
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
var loginId, mobile, KycValue, amount, name, ifscnum, accnumber
const kycid = () => Cypress._.random(1e8)
const timestamp = (new Date).getTime()
KycValue = "A" + timestamp
mobile = "77" + uuid1()
var mobile1, Submobile, loginId, name
mobile1 = "77" + uuid()
var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'
var BuisnessRegO2C = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
var BankData = 'cypress/fixtures/userData/BusinessUsersDataO2C.json'
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 3; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
//--------------------------------------------------------------------------------------------------------------

And('Enter Telco operator Mobile number and KYC number in search menu', function () {
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile(BuisnessReg).then((data) => {
    let mobile1 = data.telcoMobile
    manageUsersPage.getSearchUser().type(mobile1, { force: true })
  })
  cy.intercept('/mobiquitypay/v1/regulatoryProfile').as('getsearch')
  manageUsersPage.getSearchUserButton().click({ force: true })
  cy.wait('@getsearch', { timeout: 30000 })
})

And('Edit all the required business user details for Telco-Operator', function () {
  manageUsersPage.getEditToolTip().eq(0).click({ force: true })
  registerPage.getLastName().clear().type(getRandomName() + "Automation")
  registerPage.getNextButtonBasic().click({ force: true })
  registerPage.getNextButtonProfile().click({ force: true })
  registerPage.getNextButtonOperatorProfile().click({ force: true })
})



And('Search with the Business Mobile Number', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.getBusinessUserMobileNumber()
  manageUsersPage.getSearchUserButton().click({ force: true })
})

And('Edit all the required business user details for Distributer', function () {
  manageUsersPage.getEditToolTip().eq(0).click({ force: true })
  registerPage.getState().select(this.data2.modified.state, { force: true })
  registerPage.getCity().select(this.data2.modified.city, { force: true })
  registerPage.getNextButtonBasic().click({ force: true })
  registerPage.getNextButtonProfile().click({ force: true })
  registerPage.getNextButtonOperatorProfile().click({ force: true })
})


//------------------------------------Notification-------------------

And('Approve the Users and Check for SMS Notification sent to Business User', function () {
  cy.getBusinessUserMessage(Cypress.env('apiBaseURL'), Cypress.env('port'))
})

//------------
And('Select user type as Hierarchy and Check aligned user' , function() {
  manageUsersPage.getSelectOptn().select(1)
  manageUsersPage.getSearchUserButton().click( { force:true })
  cy.waitUntil(()=>{
  return cy.iframe().find('[class="mat-row cdk-row ng-star-inserted"]').should('be.visible', { force: true })
})
})


And('User Click on eye button and Edit hierarchy information', function (){
  manageUsersPage.getEyeIcon().click({ force: true })
  manageUsersPage.getEditIconUser().click({ force: true })
  // registerPage.getNextButtonBasic().click()
  // registerPage.getNextButtonBasic1().click()
  // registerPage.getNextButtonBasic2().click()
  registerPage.getSaveButton().click({ force: true })
  registerPage.getSavedMsg().should('contain.text', 'Intermediate Save Successful!!!')
  cy.iframe().find('div>button>.mat-button-wrapper').contains('Close').click({ force: true })
  //registerPage.getNextButtonBasic3().click()
  //registerPage.getConfirmButton().click({ force: true })
})