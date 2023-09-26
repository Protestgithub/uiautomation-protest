
/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../support/pageObjects/loginPage';

import "../../../../../support/Utils/generic";
//import register from '../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../support/pageObjects/UserManagement/approvals';
import manageUsers from '../../../../../support/pageObjects/UserManagement/manageUsers';
//import ErrorMessage from '../../../../../support/pageObjects/UserManagement/ErrorMessage';
import myActivity from '../../../../../support/pageObjects/MyActivity/myActivity';
//----------------Object Declaration----------------------------------------------------------

const pageLogin = new loginPage()
const welcomePage = new homePage()
const myActivityPage = new myActivity()
//const registerPage = new register()
const approvalPage = new approvals()
const manageUsersPage = new manageUsers()
//const ErrorM = new ErrorMessage()
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
var filename = 'cypress/fixtures/userData/AdministratorData.json'

And('Enter Mobile number4 or KYC number of Customer Care Admin in Search', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile(filename).then((data) => {
    var mobileSys
    mobileSys = data.CCAMobileNumber
    manageUsersPage.getSearchUser().type(mobileSys, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})

And('Click on delete for CCA', function () {

  manageUsersPage.getdelete().click({ force: true })
  manageUsersPage.getcomment().type(this.data2.comment)
  manageUsersPage.getreasonforclosure().select(this.data2.Reason)
  manageUsersPage.getintiatedelete().click({ force: true })
})

//--------------------------------------------------------------------------------------------------------
And('Assert Created CCA Mobile Number and Write Created on time', function () {
  cy.readFile(filename).then((user) => {
    let CAMobile = user.CCAMobileNumber
    var CCAMobile = " " + CAMobile
    manageUsersPage.getAssertMobile().eq(0).should('contain', CCAMobile)
  })
  myActivityPage.getCreatedOnTime1().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(filename).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(filename, data)
    })
  })
})
Then('Verify Sucess Message of CCA Deletion', function () {
  cy.waitUntil(() => {
    return cy.iframe().find('simple-snack-bar.mat-simple-snackbar.ng-star-inserted').should('be.visible')
  })
//  approvalPage.getSuccessMessage().should('contain', this.data2.Deletemsg.DeleteSuccessmsg)
})