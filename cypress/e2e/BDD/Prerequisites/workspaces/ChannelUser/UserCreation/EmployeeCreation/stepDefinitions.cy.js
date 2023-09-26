//-----------------------------------------------------------------------BulkUpload Stepdefinition.cy.js-----------------------------------------------------------
/// <reference types="Cypress" />
/// <reference types = "Cypress-iframe"/>

//----------------Imports---------------------------------------------------------------------
import 'cypress-iframe'
import { Given, When, Then, And, Before } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../../../../../../support/pageObjects/loginPage';
import homePage from '../../../../../../../support/pageObjects/homePage';
import manageUsers from '../../../../../../../support/pageObjects/UserManagement/manageUsers';
import myActivity from '../../../../../../../support/pageObjects/MyActivity/myActivity';
import "../../../../../../../support/Utils/generic"
//import "../../../../../../support/Utils/securityCommands";
import "../../../../../../../support/Utils/registration";
import register from '../../../../../../../support/pageObjects/UserManagement/register';
import approvals from '../../../../../../../support/pageObjects/UserManagement/approvals';
import SecurityProfilePage from '../../../../../../../support/pageObjects/SecurityProfile/SecurityProfilePage';
import bulkupload from '../../../../../../../support/pageObjects/BulkUpload/bulkupload';
import "../../../../../../../support/Utils/subscriberCommands";
import "../../../../../../../support/Utils/AdministratorCommands";
import "../../../../../../../support/Utils/BusinessUserCommands";


//----------------Object Declaration----------------------------------------------------------
const pageLogin = new loginPage()
const welcomePage = new homePage()
const registerPage = new register()
const approvalPage = new approvals()
const securityProfilePage = new SecurityProfilePage()
const BulkUploadPage = new bulkupload()
const manageUsersPage = new manageUsers()
const myActivityPage = new myActivity()
let answerone = "vuip45$"
let answertwo = "mlop$93"

var BuisnessReg = 'cypress/fixtures/userData/BusinessUsersData.json'
let mobileut1, mobileut2;
const q = parseInt(Date.now() / 100000);
let r = q + 39
mobileut1 = "77" + r

const m = parseInt(Date.now() / 100000);
let p = m + 98
mobileut2 = "77" + p

//-------------------------------------------------------

Given('Log in with corporate user credential', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
  cy.frameLoaded(pageLogin.getiFrame())
  cy.readFile(BuisnessReg).then((data) => {
    let loginID = data.CorporateLoginId
    cy.login(loginID, this.data1.businessAdmin.businessadminPwd1);
  })
})


When('Select User type as Business and Select user role Employee', function () {

  pageLogin.getiFrame()
  welcomePage.getUserManagementOption().click()
  welcomePage.getRegisterOption().click()
  //  registerPage.getregisterPageTitle().should('contain', this.data2.registerPageTitle)
  registerPage.getSelectUserTypeTab().eq(0).click({ force: true })
  registerPage.getSelectUserTypeTab().eq(0).focused()
  registerPage.getUserRole().eq(0).click({ force: true })
  registerPage.getRegistrationMode().eq(0).click({ force: true })
})

And('Enter all the Employee Details', function () {
  cy.getEmployeeBasicInfoTextFields()
  registerPage.getMobileNumber().type(mobileut1)
  cy.iframe().find('select[data-test-id="title"]').select(this.data2.personalInfo.Title, { force: true })
  if(Cypress.env('otpVerification').includes("Yes"))
{
cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
}
else
{
cy.log("No OTP verification required")
}
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  cy.getEmployeeEmail()
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
  registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
  registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })
  cy.readFile(BuisnessReg).then((data) => {
    data.corpregisteredEmployeeMobile = mobileut1
    cy.writeFile(BuisnessReg, data)
  })
  registerPage.getLoginID().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(BuisnessReg).then((data) => {
      data.corpEmployeeLoginId = val
      cy.writeFile(BuisnessReg, data)
    })
  })
   registerPage.getDateofEmployment().type('02/04/2023', { force: true })
//    if(Cypress.env('otpVerification').includes("Yes"))
// {
// cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))
// }
// else
// {
// cy.log("No OTP verification required")
// }
  registerPage.getNextButtonBasic().eq(0).click({ force: true })
  //------------------------------------------------KYC-------------------------------------------------
  let kycut
  const k = parseInt(Date.now());
  kycut = "A" + k
  registerPage.getKYCButton().eq(0).click({ force: true })
  
  registerPage.getKYCIDType().select(this.data2.KycInfo8.KycIDType, { force: true })
  registerPage.getKYCIDValue().type(kycut, { force: true })
  registerPage.getCityissued().select(this.data2.personalInfo.city, { force: true })
  
  registerPage.getCountryissued().select(this.data2.personalInfo.country, { force: true })
  cy.wait(2000)
  registerPage.getDateIssued().dblclick({ force: true }).type("22/07/2020", { force: true })
  registerPage.getDateIssued().click({ force: true })
  registerPage.getValidFrom().dblclick({ force: true }).type("22/07/2020")
  registerPage.getValidFrom().click({ force: true })
  registerPage.getValidThru().dblclick({ force: true }).type("22/07/2030")
  registerPage.getValidThru().click({ force: true })
  registerPage.getMakeThisPrimaryButton().click({ force: true })
  registerPage.getNextButtonBasic1().click({ force: true })
  registerPage.getNextButtonBasic2().click({ force: true })
  registerPage.getSubmitButton().click({ force: true })
})

And('Enter all the Employee Details1', function () {
  cy.getEmployeeBasicInfoTextFields()
  registerPage.getMobileNumber().type(mobileut2)
  cy.iframe().find('select[data-test-id="title"]').select(this.data2.personalInfo.Title, { force: true })
  cy.iframe().find('select[data-test-id="preferredLanguage"]').select(this.data2.personalInfo.preferredLang, { force: true })
  cy.getDistributerEmailID()
  registerPage.getCountry().select(this.data2.personalInfo.country, { force: true })
   if(Cypress.env('otpVerification').includes("Yes"))
{cy.OTP(Cypress.env('apiBaseURL'), Cypress.env('port'))}
else
{cy.log("No OTP verification required")}
  registerPage.getState().select(this.data2.subPersonalInfo.state, { force: true })
  registerPage.getCity().select(this.data2.subPersonalInfo.city, { force: true })
  cy.readFile(BuisnessReg).then((data) => {
    data.corpregisteredEmployeeMobile1 = mobileut2
    cy.writeFile(BuisnessReg, data)
  })
  registerPage.getLoginID().invoke('val').then((val) => {
    cy.log(val)
    cy.readFile(BuisnessReg).then((data) => {
      data.corpEmployeeLoginId1 = val
      cy.writeFile(BuisnessReg, data)
    })
  })
 registerPage.getDateofEmployment().type('02/04/2023', { force: true })

  registerPage.getNextButtonBasic().eq(0).click({ force: true })
  //------------------------------------------------KYC-------------------------------------------------
  let kycut
  const k = parseInt(Date.now());
  kycut = "A" + k
  registerPage.getKYCButton().eq(0).click({ force: true })
  
  registerPage.getKYCIDType().select(this.data2.KycInfo8.KycIDType, { force: true })
  registerPage.getKYCIDValue().type(kycut, { force: true })
  registerPage.getCityissued().select(this.data2.personalInfo.city, { force: true })
  
  registerPage.getCountryissued().select(this.data2.personalInfo.country, { force: true })
  cy.wait(2000)
  registerPage.getDateIssued().dblclick({ force: true }).type("22/07/2020", { force: true })
  registerPage.getDateIssued().click({ force: true })
  registerPage.getValidFrom().dblclick({ force: true }).type("22/07/2020")
  registerPage.getValidFrom().click({ force: true })
  registerPage.getValidThru().dblclick({ force: true }).type("22/07/2030")
  registerPage.getValidThru().click({ force: true })
  registerPage.getMakeThisPrimaryButton().click({ force: true })
  registerPage.getNextButtonBasic1().click({ force: true })
  registerPage.getNextButtonBasic2().click({ force: true })
  cy.wait(2000)
  registerPage.getSubmitButton().click({ force: true })
  cy.wait(2000)
})

Given('Log in with employee user credential', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
  
  cy.frameLoaded(pageLogin.getiFrame())
  cy.readFile(BuisnessReg).then((data) => {
    let loginID = data.corpEmployeeLoginId
    cy.login(loginID, this.data1.businessAdmin.DefaultPassword)
    cy.login1(this.data1.BAPassword)
    cy.wait(2000)
    cy.Passwordchange(this.data1.UserCreationSuccessMessage)
    pageLogin.getloginbtn1().click({ force: true })
    cy.wait(2000)
    cy.login(loginID, this.data1.BAPassword)
    pageLogin.getiFrame()
    BulkUploadPage.getSecurityQuestionOne().select(1)
    
    BulkUploadPage.getAnswerTabOne().type(answerone)
    
    BulkUploadPage.getSecurityQuestionTwo().select(5)
    
    BulkUploadPage.getAnswerTabTwo().type(answertwo)
    
    BulkUploadPage.getSaveButton().click({ force: true })
    cy.wait(2000)
    // 
    // //BulkUploadPage.getSuccessmessage().contains("")
    
    BulkUploadPage.getDoneButton().click()

  })
})


Given('Log in with employee user2 credential', function () {
  cy.launchURL(Cypress.env('Adminurl'))
  cy.visit(Cypress.env("Adminurl") + "/dfscontainer/#/business/")
  cy.wait(2000)
  cy.frameLoaded(pageLogin.getiFrame())
  cy.readFile(BuisnessReg).then((data) => {
    let loginID = data.corpEmployeeLoginId1
    cy.login(loginID, this.data1.businessAdmin.DefaultPassword)
    cy.login1(this.data1.BAPassword)
    cy.wait(2000)
    cy.Passwordchange(this.data1.UserCreationSuccessMessage)
    pageLogin.getloginbtn1().click({ force: true })
    cy.wait(2000)
    cy.login(loginID, this.data1.BAPassword)
    pageLogin.getiFrame()
    BulkUploadPage.getSecurityQuestionOne().select(1)
    
    BulkUploadPage.getAnswerTabOne().type(answerone)
    
    BulkUploadPage.getSecurityQuestionTwo().select(5)
    
    BulkUploadPage.getAnswerTabTwo().type(answertwo)
    
    BulkUploadPage.getSaveButton().click({ force: true })
    cy.wait(2000)
    // 
    // //BulkUploadPage.getSuccessmessage().contains("")
    
    BulkUploadPage.getDoneButton().click()

  })
})