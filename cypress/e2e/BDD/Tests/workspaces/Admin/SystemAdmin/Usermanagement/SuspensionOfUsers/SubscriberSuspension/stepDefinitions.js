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

const subRegistration = 'cypress/fixtures/userData/subscriberReg.json'
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


//-----------------------------------------------------------------------------------------------
And('enter user mobile number and search the SuspendResume user', function () {
  manageUsersPage.getUserSearchDetails().click({ force: true })
  cy.getSubscriberMobileNumberSuspension()
  manageUsersPage.getSearchUserButton().click({ force: true })
})

And('Assert Suspension of Subscriber Mobile Number and Write Created on time', function () {
  cy.readFile(subRegistration).then((user) => {
    let SubMobile = user.subscriberMobileSuspend
    var SUBMobile = " " + SubMobile
    
      manageUsersPage.getAssertMobile().eq(0).should('contain', SUBMobile)
    
  })
  myActivityPage.getCreatedOnTime().eq(1).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(subRegistration).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(subRegistration, data)
    })
  })
})
