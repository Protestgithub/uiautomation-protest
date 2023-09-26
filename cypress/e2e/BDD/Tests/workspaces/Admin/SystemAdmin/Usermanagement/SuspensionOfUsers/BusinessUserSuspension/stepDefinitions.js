/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
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

//----------------------------------------------------------------------------------------------

And('Enter Mobile number and KYC number in search for suspension', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile('cypress/fixtures/userData/BusinessUserSuspensionData.json').then((data) => {
    var mobile
    mobile = data.registeredMobile
    cy.log(mobile)
    manageUsersPage.getSearchUser().type(mobile, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})

Then('Click on Suspend user icon', function () {
  manageUsersPage.getSuspendUser().click({ force: true })
})

And('write comments to Suspend user', function () {
  manageUsersPage.getDailogbox().type(this.data2.dailogbox, { force: true })
})
And('click on yes', function () {
  manageUsersPage.getYesbtn().click({ force: true })
})
Then('Verify the user suspend Confirmation message', function () {
  approvalPage.getApproveConfirmationMessage().contains(this.data2.suspendResumeConfirmationMessage.suspendResumeUser)
})


And('Assert Buissness User Mobile Number for Suspension and Write Created on time', function () {
  cy.readFile(BuisnessRegSuspension).then((user) => {
    let BUMobile = user.registeredMobile
    var BUDMobile = " " + BUMobile
    if(Cypress.env('version').includes('x.4')){
      manageUsersPage.getAssertMobile().eq(0).should('contain', BUDMobile)
    }
    else{
      manageUsersPage.getAssertMobile().eq(1).should('contain', BUDMobile)
    }
  })

  myActivityPage.getCreatedOnTime().eq(1).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(BuisnessRegSuspension).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(BuisnessRegSuspension, data)
    })
  })
})

And('User click on Suspended submitted user data', function () {
  cy.getApproval(BuisnessRegSuspension)
})


Then('User status is Suspended', function () {
  cy.waitUntil(() => {
    return cy.iframe().find('.mat-simple-snackbar.ng-star-inserted > span').should('be.visible')
  })
  approvalPage.getApproveConfirmationMessage().should("contain", this.data2.suspendResumeConfirmationMessage.userSuspended)
})

Given('Login into Mobiquity Portal as Business admin User', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
  
  cy.readFile('cypress/fixtures/userData/BusinessUserSuspensionData.json').then((data) => {
    var SuspendedId
    SuspendedId = data.LoginId
    cy.login(SuspendedId, this.data1.businessAdmin.DefaultPassword)

  })
  pageLogin.getUserLoginMessage().should('contain', this.data1.ErrorMessageLogin)
})


Given('Login into Mobiquity Portal as Business admin Users1', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
  
  cy.readFile('cypress/fixtures/userData/BusinessUserSuspensionData.json').then((data) => {
    var SuspendedId
    SuspendedId = data.LoginId
    cy.login(SuspendedId, this.data1.businessAdmin.DefaultPassword)
    cy.login1(this.data1.businessAdmin.businessadminPwd1)
    
    cy.Passwordchange(this.data1.UserCreationSuccessMessage)
    //pageLogin.getloginbtn1().click({ force: true })
   

  })
})

And('Enter Mobile number and KYC number in search for suspension1', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile('cypress/fixtures/userData/BusinessUsersData.json').then((data) => {
    var mobile
    mobile = data.registeredMobileATM
    cy.log(mobile)
    manageUsersPage.getSearchUser().type(mobile, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})