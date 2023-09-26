/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Given } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import securityQuestion from '../../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';
import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals';
import register from '../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/registration";
import "../../../../../../../../support/Utils/securityCommands";

//----------------Object Declaration----------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const securityQuestionPage = new securityQuestion()
const uuid = () => Cypress._.random(1e8)
mobile = "77" + uuid()
let Sysfilelogin = 'cypress/fixtures/userData/SystemAdminLogin.json'
var SubProfileName = 'cypress/fixtures/profileData/Profile.json'
var mobile, name
//----------------------------------------------------------------------------------------
function getRandomName() {
  name = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}

function getRandomName1() {
  name = "12";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 7; i++)
    name += possible.charAt(Math.floor(Math.random() * possible.length));
  return name;
}


And('Save LoginID1', function () {
  registerPage.getMobileNumber().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(Sysfilelogin).then((data) => {
      data.MobileNumber1 = val
      cy.writeFile(Sysfilelogin, data)
    })
  })
  registerPage.getLoginID().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(Sysfilelogin).then((data) => {
      data.LoginId1 = val
      cy.writeFile(Sysfilelogin, data)
    })
  })
})


Given('Login into Mobiquity Portal as System admin Checker1 Created by Master', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.readFile(Sysfilelogin).then((data) => {
    cy.login(data.LoginId1, this.data1.DefaultPassword)
    cy.login1(this.data1.BAPassword)
    cy.Passwordchange(this.data1.UserCreationSuccessMessage)
    pageLogin.getloginbtn1().eq(0).click()
    cy.wait(2000)
    cy.login(data.LoginId1, this.data1.BAPassword)
if(Cypress.env('version').includes('x.7')){
    //------------------SecurityQuestion&Answer------------------------
    securityQuestionPage.getQuestion().select(1, { force: true })
    securityQuestionPage.getQuestion1().select(2, { force: true })
    let a1 = getRandomName1()
    securityQuestionPage.getAnswer().clear({ force: true }).type(a1, { force: true })
    .invoke('val').then((val) => {
      cy.log(val)
      cy.readFile(Sysfilelogin).then((data) => {
        data.Checker1SecurityAns1 = val
        cy.writeFile(Sysfilelogin, data)
      })
    })
    
    let a2 = getRandomName1()
    securityQuestionPage.getAnswer1().clear({ force: true }).type(a2, { force: true })
    .invoke('val').then((val) => {
      cy.log(val)
      cy.readFile(Sysfilelogin).then((data) => {
        data.Checker1SecurityAns2 = val
        cy.writeFile(Sysfilelogin, data)
      })
    })
    securityQuestionPage.getSave().click({ force: true })
    securityQuestionPage.getDoneButton1().click({ force: true })
    data.ChangePassword1 = this.data1.BAPassword
    cy.writeFile(Sysfilelogin, data)
  }
  else{
    data.ChangePassword1 = this.data1.BAPassword
    cy.writeFile(Sysfilelogin, data)
  }
  })

})

Given('x.4 Login into Mobiquity Portal as System admin Checker1 Created by Master', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.readFile(Sysfilelogin).then((data) => {
    cy.login(data.LoginId1, this.data1.DefaultPassword)
    cy.login1(this.data1.BAPassword)
    cy.Passwordchange(this.data1.UserCreationSuccessMessage)
    pageLogin.getloginbtn1().eq(0).click()
    
    cy.login(data.LoginId1, this.data1.BAPassword)
    data.ChangePassword1 = this.data1.BAPassword
    cy.writeFile(Sysfilelogin, data)
  })

})
