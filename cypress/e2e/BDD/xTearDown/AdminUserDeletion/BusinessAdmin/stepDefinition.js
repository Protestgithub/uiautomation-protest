
/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, When } from "@badeball/cypress-cucumber-preprocessor";
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
var filename = 'cypress/fixtures/userData/AdministratorData.json'
var subRegistration = 'cypress/fixtures/userData/subscriberReg.json'


function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;

}
//----------------BDD Hooks-----------------------------------------------------------------

//---------------------------------------------System Admin Login----------------------------------------------------
// Given('Login into Mobiquity Portal as System admin Maker', function () {
//     cy.launchURL(Cypress.env('Adminurl'))
//     cy.SysAdminlogin()
//     cy.fixture('userData/SystemAdminLogin.json').then((data)=>{
//       let Name = data.SysAdminMakerName
//      // cy.checkWelcomeText(Name)
//     })
//   })
// Given('Login into Mobiquity Portal as System admin Checker1', function () {
//   cy.launchURL(Cypress.env('Adminurl'))
//   cy.SysAdminlogin2()
//   cy.fixture('userData/SystemAdminLogin.json').then((data)=>{
//     let Name = data.SysAdminChecker1Name
//   //  cy.checkWelcomeText(Name)
//   })
// })
//-------------------------------------------------------------------------------------
And('Enter Mobile number or KYC number of Business Admin in Search', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })

  cy.readFile(filename).then((data) => {
    // var mobileSys
    var mobile
    mobile = data.BAMobileNumber

    manageUsersPage.getSearchUser().type(mobile, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})

//------------------------------------------------------------------------------------
And('Enter Mobile number or KYC number of subscriber in Search', function () {
  pageLogin.getiFrame()
  manageUsersPage.getSearchUser().click({ force: true })
  cy.readFile(subRegistration).then((data) => {
    // var mobileSys
    var mobile
    mobile = data.subscriberMobile
    manageUsersPage.getSearchUser().type(mobile, { force: true })
  })
  manageUsersPage.getSearchUserButton().click({ force: true })
})

//-----------------------------------------------------------------------------------

// When('User Click on eye button', function () {

//   manageUsersPage.getEyeIcon().click({ force: true })
// })

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

//------------------------------------Approve----------------------------------------------------------
// And('Navigate to My Activity and Apply required filters', function () {
//   welcomePage.getMyActivity().click()
//     myActivityPage.getFilter().click({ force: true })
//     // myActivityPage.getEnterworkflows().type(this.data2.Deletemsg.EnterWorkflow).click()
//     // 
//     // myActivityPage.getDeleteuser().click({ force: true })
//    //myActivityPage.getAddUser().click({ force: true })
//    myActivityPage.getModificationOfUser().click({ force: true })
//     myActivityPage.getSubmittedStatus().click()
//     myActivityPage.getApply().click()
// })
//---------------------------------------Business Admin -----------------------------------------------------------------
And('Assert Created Business Admin Name and delete the same user', function () {
  cy.readFile(filename).then((user) => {
    let BAMobile = user.BAMobileNumber
    var BBAMobile = " " + BAMobile
    manageUsersPage.getAssertMobile().eq(0).should('contain', BBAMobile)
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
//--------------------------------------Subscriber-------------------------------------------------
And('Assert Created Subscriber Name and delete the same user', function () {
  cy.readFile(subRegistration).then((user) => {
    let SubMobile = user.subscriberMobile
    var SUBMobile = " " + SubMobile
    manageUsersPage.getAssertMobile().eq(0).should('contain', SUBMobile)
  })
  myActivityPage.getCreatedOnTime1().eq(0).invoke('text').then((time) => {
    time = time.trim()
    cy.log(time)
    cy.readFile(subRegistration).then((data) => {
      data.CreatedOnTime = time
      cy.writeFile(subRegistration, data)
    })
  })
})

And('User click on submitted user data for BA', function () {
  cy.getApproval(filename)

})
And('User click on submitted user data for Subscriber', function () {
  cy.getApproval(subRegistration)

})