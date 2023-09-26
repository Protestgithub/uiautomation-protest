/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';

import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import ErrorMessage from '../../../../../../../../../support/pageObjects/UserManagement/ErrorMessage';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import "../../../../../../../../../support/Utils/generic";

//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
const ErrorM = new ErrorMessage()
let Sysfilelogin = 'cypress/fixtures/userData/SystemAdminLogin.json'
var SubProfileName = 'cypress/fixtures/profileData/Profile.json'
var mobile, Password1
var name
var LoginId1
const uuid12 = () => Cypress._.random(1e8)
LoginId1 = uuid12()
var loginId
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

And('Click on delete', function () {

  manageUsersPage.getdelete().click({ force: true })
  manageUsersPage.getcomment().type(this.data2.comment)
  manageUsersPage.getreasonforclosure().select(this.data2.Reason)
  cy.wait(2000)
  cy.intercept("/mobiquitypay/v1/ums/user/*").as('getDelete')
  manageUsersPage.getintiatedelete().click({ force: true })
  cy.wait('@getDelete', {timeout:50000})
  
})


//------------------------------------Approve----------------------------------------------------------

And('User click on submitted user data for deletion', function () {
  approvalPage.getCurrentDateRowData().eq(0).click({ force: true })
})

And('User click on approve delete request', function () {
    
  approvalPage.getApproveButton().click({ force: true })
  cy.wait(2000)
  approvalPage.getApproveRequest().click({ force: true })
  cy.wait(2000)
})

And('Save Mobile Number', function () {
  registerPage.getMobileNumber().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(Sysfilelogin).then((data) => {
      data.DeletedMobileNumber = val
      cy.writeFile(Sysfilelogin, data)
    })
  })
})
And('Enter Mobile number4 or KYC number of System admin in Search', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile(Sysfilelogin).then((data) => {
    var mobileSys
    mobileSys = data.DeletedMobileNumber
    manageUsersPage.getSearchUser().type(mobileSys, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})

And('Enter Mobile number4 or KYC number of Subscriber for suspension in Search', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile("cypress/fixtures/userData/subscriberReg.json").then((data) => {
    var mobileSys
    mobileSys = data.subscriberMobileSuspend
    manageUsersPage.getSearchUser().type(mobileSys, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})