/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../../support/pageObjects/loginPage';

import approvals from '../../../../../../../../../support/pageObjects/UserManagement/approvals';
import ErrorMessage from '../../../../../../../../../support/pageObjects/UserManagement/ErrorMessage';
import manageUsers from '../../../../../../../../../support/pageObjects/UserManagement/manageUsers';
import register from '../../../../../../../../../support/pageObjects/UserManagement/register';
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



Then('Error Message Should be displayed', function () {
  ErrorM.getLoginIdErrorMessage().should('contain', this.data2.errorMessage.loginerror, { force: true })
})
Then('Email Id Error Message Should be dispalyed', function () {
  ErrorM.getEmailIDErrorMessage().should('contain', this.data2.errorMessage.invaildemail, { force: true })
})

Then("Not Registered EmailId Error Message", function () {
  ErrorM.getinvalidemailidErrorMessage().should('contain', this.data2.errorMessage.invaildemail, { force: true })
})
Then("Invaild Value Error Message", function () {
  ErrorM.getinvalidlname().should('contain', this.data2.errorMessage.invalidlname, { force: true })
})

And('Fill All Required Fields and Enter Registered LoginID', function () {
  registerPage.getFirstName().type(this.data2.personalInfo.firstName, { force: true })
  ErrorM.getLoginID().type(this.data3.LoginId, { force: true })
  registerPage.getLastName().type(this.data2.personalInfo.lastName, { force: true })
})

And('Fill All Required Fields and Enter Registered EmailID', function () {
  cy.readFile("cypress/fixtures/userData/SystemAdminLogin.json").then((data)=>{
    let mobileNumber = data.MobileNumber1
    registerPage.getMobileNumber().type(mobileNumber)
    registerPage.getFirstName().type("Test")
  })
})


And('Fill All Required Fields and Enter Not Verified EmailID', function () {
  registerPage.getFirstName().type(this.data2.personalInfo.firstName, { force: true })

  ErrorM.getEmailiD().type(this.data2.errorMessage.testemail, { force: true })
  registerPage.getLastName().type(this.data2.personalInfo.lastName, { force: true })
})

And('enter invalid value in mandatory field', function () {
  registerPage.getFirstName().type(this.data2.personalInfo.firstName, { force: true })
  ErrorM.getEmailiD().type(this.data2.personalInfo.firstName)
  registerPage.getLastName().type(this.data2.errorMessage.Lname1, { force: true })
})