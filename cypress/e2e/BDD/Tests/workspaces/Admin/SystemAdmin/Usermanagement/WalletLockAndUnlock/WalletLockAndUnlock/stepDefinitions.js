/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
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
const SubMob = 'userData/subscriberReg.json'
//--------------------------------------------------------------------------------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

//---------------------------------------------------------------------------------------




Then('Check All Wallet Details', function () {
})

And('select either Lock outgoing payments or Lock incoming payments or Lock both', function () {
  manageUsersPage.getlockunclockWallets().click({ force: true })
  if(Cypress.env('version').includes("x.4")){
    manageUsersPage.getversion4LockOutgoingPayements().click({ force: true })
  }
  else{
    manageUsersPage.getLockOutgoingPayements().click({ force: true })
  }
  
})

Then('Click On lock all', function () {
  if(Cypress.env('version').includes("x.4")){
    manageUsersPage.getversion4lockallbtn().click({ force: true })
  }
  else{
    manageUsersPage.getlockallbtn().click({ force: true })
  }
  
  manageUsersPage.getconfirmationlock().type(getRandomName(), { force: true })
  manageUsersPage.getconfirmationbtn().click({ force: true })
  manageUsersPage.getlockedmessage().should('contain', this.data2.LockOutgoing)
})

And('Click on view Details and Click on Credentials', function () {
  // manageUsersPage.getViewIcon().eq(0).click({ force: true })
   manageUsersPage.getMore().click()
  manageUsersPage.getcredentials().click({ force: true })
})

And('Click on refresh icon corresponding to the respective authentication factor', function () {
  manageUsersPage.getresetcredentials().eq(0).click({ force: true })
  manageUsersPage.getresetconfirmation().click({ force: true })
  manageUsersPage.getsuccessresetconfirmation().click({ force: true })
})
And('select either UNLock outgoing payments or UNLock incoming payments or Lock both', function () {
  manageUsersPage.getlockunclockWallets().click({ force: true })
  cy.wait(1000)
  if(Cypress.env('version').includes("x.4")){
    manageUsersPage.getversion4LockOutgoingPayements().click({ force: true })
  }
  else{
    manageUsersPage.getLockOutgoingPayements().click({ force: true })
    cy.wait(1000)
  }
})
Then('Click On UNLock', function () {
  if(Cypress.env('version').includes("x.4")){
    manageUsersPage.getversion4unlockbtn().click({ force: true })
  }
  else{
    manageUsersPage.getunlockbtn().click({ force: true })
    cy.wait(1000)
  }
  manageUsersPage.getconfirmationlock().type(getRandomName(), { force: true })
  cy.wait(1000)
  manageUsersPage.getconfirmationbtn().click({ force: true })
  cy.wait(2000)
  cy.waitUntil(()=>{
    return cy.iframe().find('div .cdk-overlay-pane >snack-bar-container>simple-snack-bar>span').should('be.visible')
  })
  manageUsersPage.getlockedmessage().should('have.text', this.data2.UnlockOutgoing)
})
