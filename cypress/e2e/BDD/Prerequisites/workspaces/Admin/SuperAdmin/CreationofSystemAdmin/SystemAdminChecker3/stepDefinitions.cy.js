/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-iframe';
import homePage from '../../../../../../../../support/pageObjects/homePage';
import loginPage from '../../../../../../../../support/pageObjects/loginPage';
import securityQuestion from '../../../../../../../../support/pageObjects/SecurityQuestion/securityQuestion';
import approvals from '../../../../../../../../support/pageObjects/UserManagement/approvals';
import register from '../../../../../../../../support/pageObjects/UserManagement/register';
import "../../../../../../../../support/Utils/generic";
import "../../../../../../../../support/Utils/registration";
import "../../../../../../../../support/Utils/securityCommands";
import { recurse } from "cypress-recurse";
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
var mobile, name, loginId
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


And('Save LoginID3', function () {
  registerPage.getMobileNumber().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(Sysfilelogin).then((data) => {
      data.MobileNumber3 = val
      cy.writeFile(Sysfilelogin, data)
    })
  })
  registerPage.getLoginID().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(Sysfilelogin).then((data) => {
      data.LoginId3 = val
      cy.writeFile(Sysfilelogin, data)
    })
  })
})


Given('Login into Mobiquity Portal as System admin Checker3 Created by Master', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.readFile(Sysfilelogin).then((data) => {
    cy.login(data.LoginId3, this.data1.DefaultPassword)
    cy.login1(this.data1.BAPassword)
    cy.Passwordchange(this.data1.UserCreationSuccessMessage)
    pageLogin.getloginbtn1().eq(0).click()
    cy.wait(2000)
    cy.login(data.LoginId3, this.data1.BAPassword)
if(Cypress.env('version').includes('x.7')){
    //------------------SecurityQuestion&Answer------------------------
    securityQuestionPage.getQuestion().select(1, { force: true })
    securityQuestionPage.getQuestion1().select(2, { force: true })
    let a1 = getRandomName1()
    securityQuestionPage.getAnswer().clear({ force: true }).type(a1, { force: true })
    .invoke('val').then((val) => {
      cy.log(val)
      cy.readFile(Sysfilelogin).then((data) => {
        data.Checker2SecurityAns1 = val
        cy.writeFile(Sysfilelogin, data)
      })
    })
    
    let a2 = getRandomName1()
    securityQuestionPage.getAnswer1().clear({ force: true }).type(a2, { force: true })
    .invoke('val').then((val) => {
      cy.log(val)
      cy.readFile(Sysfilelogin).then((data) => {
        data.Checker2SecurityAns2 = val
        cy.writeFile(Sysfilelogin, data)
      })
    })
    securityQuestionPage.getSave().click({ force: true })
    securityQuestionPage.getDoneButton1().click({ force: true })
    data.ChangePassword3 = this.data1.BAPassword
    cy.writeFile(Sysfilelogin, data)
  }
  else{
    data.ChangePassword3 = this.data1.BAPassword
    cy.writeFile(Sysfilelogin, data)
  }
  })

})

Given('x.4 Login into Mobiquity Portal as System admin Checker3 Created by Master', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.readFile(Sysfilelogin).then((data) => {
    cy.login(data.LoginId3, this.data1.DefaultPassword)
    cy.login1(this.data1.BAPassword)
    cy.Passwordchange(this.data1.UserCreationSuccessMessage)
    pageLogin.getloginbtn1().eq(0).click()
    
    cy.login(data.LoginId3, this.data1.BAPassword)
    data.ChangePassword3 = this.data1.BAPassword
    cy.writeFile(Sysfilelogin, data)
  })

})


And('Enter all Maker required Field for the new language', function () {
  const uuid = () => Cypress._.random(1e8)
  mobile = "77" + uuid()
  loginId = "SY" + mobile
  let lastname = getRandomName()
  let firstname = getRandomName()
  registerPage.getLastName().type(lastname, { force: true })
  cy.getrandomUserEmailID1()
  registerPage.getLoginID().clear()
  registerPage.getLoginID().type(loginId)
  recurse(
    () => cy.MobileNumber(),
    () => registerPage.getFirstName().clear().type(firstname, { force: true }),

    (uniqueness) => (uniqueness) == registerPage.getuniqueness()
  )
  cy.readFile(Sysfilelogin).then((data) => {
    data.SysAdminName = firstname + '' + lastname
    cy.writeFile(Sysfilelogin, data)
  })

  cy.writeFile('userData/SystemAdminLogin.json', { MobileNumber: mobile })
  cy.iframe().find('select[data-test-id="preferredLanguage"]')
    .select(this.data2.personalInfo.preferredLang1, { force: true })
  registerPage.getCountry().select(this.data2.personalInfo.country1, { force: true })
  registerPage.getNextButtonBasic().click({ force: true })

  //----------------------Profile Data-----------------------------------------------------------------


    registerPage.getSecurityProfile().select("adminSecurityProfile", { force: true })
  

  registerPage.getAuthProfile().select(this.data2.personalInfo.authProfile2, { force: true })
  registerPage.getNextButtonProfile().click({ force: true })
  //cy.intercept('/mobiquitypay/v1/ums/user').as('all')
  registerPage.getSubmitButton().click({ force: true })
  //cy.checkAPI('/mobiquitypay/v1/ums/user')
})





//Given Login into Mobiquity Portal as Super admin Checker-----------------------------
//When Navigate to Approvals and filter by Submitted status for SystemAdmin-------------
//And User click on System admin submitted user data------------------------------------



And('Approve the Users and save loginID with new language', function () {
  // cy.intercept('/mobiquitypay/serviceRequest/resume/any').as('all')
   approvalPage.getApproveButton().click({ force: true })
 //  cy.checkAPI('/mobiquitypay/serviceRequest/resume/any')
   cy.wait(3000)
 //  cy.intercept('/mobiquitypay/serviceRequest/resume/any').as('all')
   approvalPage.getApproveRequest().click({ force: true })
 //  cy.checkAPI('/mobiquitypay/serviceRequest/resume/any')
   cy.wait(3000)
   cy.readFile(Sysfilelogin).then((data) => {
     data.LoginId5 = loginId
     cy.writeFile(Sysfilelogin, data)
   })
   cy.readFile(Sysfilelogin).then((data) => {
     data.ChangePassword5 = this.data3.Password1
     cy.writeFile(Sysfilelogin, data)
   })
   cy.readFile(Sysfilelogin).then((data) => {
     data.MobileNumber5 = mobile
     cy.writeFile(Sysfilelogin, data)
   })
   cy.log(loginId)
 })



 //------------------------------------------------------------------------------------------

 Given('Login into Mobiquity Portal as System admin Created by Master with changed language', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.readFile(Sysfilelogin).then((data) => {
    let loginId5 = data.LoginId5
cy.log(loginId5)
cy.login(loginId5, this.data1.DefaultPassword)
cy.log(loginId5)
//cy.intercept('/mobiquitypay/ums/v2/user/auth/change-credential').as('all')
cy.login1(this.data1.BAPassword)
//cy.checkAPI('/mobiquitypay/ums/v2/user/auth/change-credential')
  cy.Passwordchange(this.data1.UserCreationSuccessMessage)
  pageLogin.getloginbtn1().eq(0).click()
  cy.wait(2000)
  cy.login(loginId5,this.data1.BAPassword)
    cy.SecurityQuestions()
  })
  cy.readFile(Sysfilelogin).then((data) => {
    data.ChangePassword5 = this.data1.BAPassword
    cy.writeFile(Sysfilelogin, data)
  })
  cy.readFile(Sysfilelogin).then((data) => {
    data.MobileNumber5 = mobile
    cy.writeFile(Sysfilelogin, data)
  })
})


Then ('Verify the text' , function(){
  cy.waitUntil(() => {
    return cy.iframe().find('.welcome').contains('Accueillir')
  })
})

