
/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And } from "@badeball/cypress-cucumber-preprocessor";
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
// let Sysfilelogin = 'cypress/fixtures/userData/SystemAdminLogin.json'
// var SubProfileName = 'cypress/fixtures/profileData/Profile.json'
// var mobile, Password1
var name
var LoginId1
const uuid12 = () => Cypress._.random(1e8)
LoginId1 = uuid12()
// var loginId
var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'

function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}
var filename = 'cypress/fixtures/userData/AdministratorData.json'


//----------------BDD Hooks-----------------------------------------------------------------

//---------------------------------------------Login----------------------------------------------------
//---------------------------------------------System Admin Login----------------------------------------------------
// Given('Login into Mobiquity Portal as System admin Maker', function () {
//     cy.launchURL(Cypress.env('Adminurl'))
//     cy.SysAdminlogin()
//     cy.fixture('userData/SystemAdminLogin.json').then((data)=>{
//       let Name = data.SysAdminMakerName
//       //cy.checkWelcomeText(Name)
//     })
//   })

And('Enter Mobile number4 or KYC number of Business Admin in Search', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile(BuisnessReg).then((data) => {
    var mobileSys
    mobileSys = data.registeredMobile
    manageUsersPage.getSearchUser().type(mobileSys, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})


// And('Click on delete', function () {

//   manageUsersPage.getdelete().click({ force: true })
//   manageUsersPage.getcomment().type(this.data2.comment)
//   manageUsersPage.getreasonforclosure().select(this.data2.Reason)
//   manageUsersPage.getintiatedelete().click({ force: true })
// })
//------------------------------------------------------------------------------------
// Then('Verify Sucess Message', function () {
//   cy.waitUntil(() => {
//     return cy.iframe().find('simple-snack-bar.mat-simple-snackbar.ng-star-inserted').should('be.visible')
//   })
//   manageUsersPage.getRejectErrorMessage().contains(this.data2.personalInfo.deletemessage)
// })


// And('Navigate to My Activity and Apply required filters', function () {
//     welcomePage.getMyActivity().click()
//     myActivityPage.getFilter().click({ force: true })
//     // myActivityPage.getEnterworkflows().type(this.data2.Deletemsg.EnterWorkflow).click()
//     // // 
//     // myActivityPage.getDeleteuser().click({ force: true })
//    //myActivityPage.getAddUser().click({ force: true })
//    myActivityPage.getModificationOfUser().click({ force: true })
//     myActivityPage.getSubmittedStatus().click()
//     myActivityPage.getApply().click()
//   })
//--------------------------------------------------------------------------------------------------------

And('Assert Created Business Admin Mobile Number and Write Created on time', function () {
  cy.readFile(BuisnessReg).then((user) => {
    let BUMobile = user.registeredMobile
    var BUDMobile = " " + BUMobile
    manageUsersPage.getAssertMobile().eq(1).should('contain', BUDMobile)
  })
  myActivityPage.getCreatedOnTime1().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(BuisnessReg).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(BuisnessReg, data)
    })
  })
})


And('User click on submitted user BU', function () {
  cy.getApproval(BuisnessReg)

})